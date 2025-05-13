import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = (props) => {
  const { data, onSubmit } = props;
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (type, value) => {
    setEntry({ ...entry, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="div-body-form">
        <div className="floating-back-button">
  <button className="btn-back" onClick={() => router.push("/records/menu")}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="icon-back">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
    Înapoi la Meniu
  </button>
</div>
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">{entry._id ? "Edit Book" : "Add New Book"}</h2>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            value={entry.title}
            onChange={(e) => updateEntry("title", e.target.value)}
            className="form-input"
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            id="author"
            value={entry.author}
            onChange={(e) => updateEntry("author", e.target.value)}
            className="form-input"
            placeholder="Enter the author"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre" className="form-label">Genre</label>
          <input
            type="text"
            id="genre"
            value={entry.genre}
            onChange={(e) => updateEntry("genre", e.target.value)}
            className="form-input"
            placeholder="Enter the genre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="publishedYear" className="form-label">Published Year</label>
          <input
            type="number"
            id="publishedYear"
            value={entry.publishedYear}
            onChange={(e) => updateEntry("publishedYear", parseInt(e.target.value))}
            className="form-input"
            placeholder="Enter the published year"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price" className="form-label">Price</label>
          <input
            type="number"
            step="0.01"
            id="price"
            value={entry.price}
            onChange={(e) => updateEntry("price", parseFloat(e.target.value))}
            className="form-input"
            placeholder="Enter the price"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="currency" className="form-label">Currency</label>
          <input
            type="text"
            id="currency"
            value={entry.currency}
            onChange={(e) => updateEntry("currency", e.target.value)}
            className="form-input"
            placeholder="RON"
            required
          />
        </div>
        <div className="form-buttons">
          <button
            type="button"
            onClick={handleCancel}
            className="btn-cancel"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(entry)}
            className="btn-submit"
          >
            {entry._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RecordForm;
