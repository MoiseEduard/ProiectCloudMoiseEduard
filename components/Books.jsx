import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";
import "@/styles/globals.css";

const Books = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();

      setRecords(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleUpdateRecord = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="div-body-books">
        <div className="floating-back-button">
  <button className="btn-back" onClick={() => router.push("/records/menu")}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="icon-back">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    Înapoi la Meniu
  </button>
</div>
    <div className="books-container">
      {records.map((record) => (
        <div className="book-card" key={record._id}>
          <h5 className="book-title">{record.title}</h5>
          <p className="book-detail">{record.author}</p>
          <p className="book-detail">{record.genre}</p>
          <p className="book-detail">{record.publishedYear}</p>
          <p className="book-detail">{record.price}</p>
          <p className="book-detail">{record.currency}</p>
          <div className="book-actions">
            <button
              type="button"
              className="btn-update"
              onClick={() => handleUpdateRecord(record._id)}
            >
              Update
            </button>
            <button
              type="button"
              className="btn-delete"
              onClick={() => handleDeleteRecord(record._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
  
};

export default Books;