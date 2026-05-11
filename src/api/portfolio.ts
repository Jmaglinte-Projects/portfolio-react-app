import { db, doc, getDoc } from "@/config/firebase";
import { Portfolio } from "@/entities/Portfolio";
import { APIResponse } from "@/types/Response";

export const fetchPortfolio = async (
  id: string
): Promise<APIResponse<Portfolio>> => {
  const ref = doc(db, "portfolios", id);
  const snapshot = await getDoc(ref);
  const data = snapshot.data();

  return {
    data: {
      id: snapshot.id,
      ...data,
    } as Portfolio,
  };
};
