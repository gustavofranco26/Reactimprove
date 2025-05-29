import { collection, DocumentData, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc } from "firebase/firestore";

export function useFetch<T = DocumentData>(
  collectionName: string,
  documentId?: string
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (documentId) {
          const docRef = doc(db, collectionName, documentId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setData({
              id: docSnap.id,
              ...docSnap.data(),
            } as T);
          } else {
            setData(null);
          }
        } else {
          const collectionRef = collection(db, collectionName);
          const querySnapshot = await getDocs(collectionRef);

          const documents = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setData(documents as T);
        }
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error("Error de firebase")
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [collectionName, documentId]);

  return { data, loading, error };
}