import { Draft, produce } from "immer";
import { useEffect, useRef, useState } from "react";

export const makeSetter = <T, S>(
  obj: T,
  setter: (obj: T) => void,
  callback: (draft: Draft<T>, action: S) => void
) => {
  return (action: S) =>
    setter(produce(obj, (draft) => callback(draft, action)));
};

export const makePropertySetter = <
  T extends object,
  K extends keyof T & keyof Draft<T>
>(
  obj: T,
  setter: (obj: T) => void,
  property: K
) => {
  return (action: T[K]) =>
    setter(
      produce(obj, (draft) => {
        // @ts-ignore
        draft[property] = action;
      })
    );
};

export const makePropertySetterFactory = <T extends object>(
  obj: T,
  setter: (obj: T) => void
) => {
  return <K extends keyof T & keyof Draft<T>>(property: K) => {
    return (action: T[K]) =>
      setter(
        produce(obj, (draft) => {
          // @ts-ignore
          draft[property] = action;
        })
      );
  };
};

export const makeArrayPropertySetterFactory = <T extends object>(
  obj: T[],
  setter: (obj: T[]) => void
) => {
  return <K extends keyof T>(index: number, property: K) => {
    return (action: T[K]) =>
      setter(
        produce(obj, (draft) => {
          // @ts-ignore
          draft[index][property] = action;
        })
      );
  };
};

export const removeItem = <T>(
  items: T[],
  setter: (items: T[]) => void,
  index: number
) => () =>
  setter(
    produce(items, (draft) => {
      draft.splice(index, 1);
    })
  );

export const itemRemoverFactory = <T>(
  items: T[],
  setter: (items: T[]) => void
) => (index: number) => () =>
  setter(
    produce(items, (draft) => {
      draft.splice(index, 1);
    })
  );

export const itemAdder = <T>(
  items: T[],
  setItems: (items: T[]) => void,
  defaultItem: () => T
) => () => setItems([...items, defaultItem()]);

export const useArrayManager = <T extends Object>(
  items: T[],
  setItems: (items: T[]) => void,
  defaultItem: () => T
) => {
  const set = makeArrayPropertySetterFactory(items, setItems);
  const ref = useRef<HTMLInputElement>(null);
  const [isItemAdded, setItemAdded] = useState(false);
  useEffect(() => {
    if (isItemAdded) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
      ref.current?.focus();
      setItemAdded(false);
    }
  }, [items]);
  const remove = itemRemoverFactory(items, setItems);
  const add = () => {
    setItems([...items, defaultItem()]);
    setItemAdded(true);
  };
  return {
    ref,
    remove,
    set,
    add,
  };
};

// The first ts ignore is because there is no way to specify changes in type of an object in ts
// The second is because of keyof Draft<T> being screwy
export const transformProperty = <O extends object, K extends keyof O, V>(
  obj: O,
  property: K,
  newProperty: V
): Omit<O, K> & { [P in K]: V } =>
  // @ts-ignore
  produce(obj, (draft) => {
    // @ts-ignore
    draft[property] = newProperty;
  });
