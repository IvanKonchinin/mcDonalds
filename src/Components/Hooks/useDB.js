import { useState, useEffect } from 'react';

export const useDB = (database) => {
  const [db, setdb] = useState(null);

  useEffect(() => {
    const dbrRef = database.ref('goods');
    dbrRef.on('value', snapshot => {
      setdb(snapshot.val())
    })
  }, [database])
  return db;
}