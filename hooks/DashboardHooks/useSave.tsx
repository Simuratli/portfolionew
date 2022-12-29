import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";

export function useSave() {
  const [saved, setSaved] = useState(false);

  const handleSaveButton = async <T, U>(where: string | undefined, data: U) => {
    const db = getDatabase();
    set(ref(db, where), data);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1500);
  };

  return {
    handleSaveButton,
    saved,
  };
}
