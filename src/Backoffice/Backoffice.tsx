import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

// Define the type for a single request item
interface Request {
  id: string; // Firestore document ID
  Name: string; // Name field
  Contact: string; // Contact field
  Text: string; // Text field
}

const Backoffice = () => {

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top-left corner
    }, []);
    
  const [ReqList, setReqList] = useState<Request[]>([]);

  // Reference to the "Requests" collection in Firestore
  const RequestCollectionRef = collection(db, "Requests");

  // Function to fetch the request list
  const getReqList = async () => {
    try {
      const data = await getDocs(RequestCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Request[]; // Cast the result to the `Request` type
      setReqList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  // Function to delete a request
  const handleDelete = async (id: string) => {
    try {
      const requestDoc = doc(db, "Requests", id); // Reference the document by ID
      await deleteDoc(requestDoc);
      alert("Request deleted successfully!");
      setReqList((prev) => prev.filter((req) => req.id !== id)); // Update the list locally
    } catch (err) {
      console.error("Error deleting request: ", err);
      alert("An error occurred while deleting.");
    }
  };

  // Fetch requests when the component mounts
  useEffect(() => {
    getReqList();
  }, []);

  return (
    <div>
      <div className="w-full h-full bg-gradient-to-b from-[#001a1a] from-10% via-[#032125] via-50% to-[#0c3b45] to-90% ">
        {ReqList.map((req) => (
          <div key={req.id}>
            <div className="flex flex-wrap justify-center py-5 gap-12 font-rounded">
              <div className="flex flex-wrap justify-center items-baseline w-20">
                <img src="user.png" className="h-20 w-20" alt="User" />
                <p className="text-white font-rounded">{req.Name}</p>
              </div>
              <div className="bg-white w-[592px] h-28 rounded-full overflow-hidden">
                <p className="px-5 py-3 text-center">{req.Text}</p>
              </div>
              <div className="bg-white w-[300px] h-28 rounded-full overflow-hidden">
                <p className="px-5 py-3 text-center">{req.Contact}</p>
              </div>
              <div
                className="text-white flex items-center hover:text-red-600 cursor-pointer"
                onClick={() => handleDelete(req.id)}
              >
                <i className="ri-file-reduce-fill text-2xl"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Backoffice;
