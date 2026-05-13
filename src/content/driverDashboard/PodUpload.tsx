import { useState } from "react";
import { useUploadPODMutation } from "../../features/api/podApi";

const PODUpload = () => {
  const [loadId, setLoadId] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [notes, setNotes] = useState("");
  const [uploadPOD, { isLoading, isSuccess }] = useUploadPODMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("loadId", loadId);
    formData.append("notes", notes);
    formData.append("pod", file);
    await uploadPOD(formData);
    setLoadId(""); setNotes(""); setFile(null);
  };

  return (
    <div className="td-table-card">
      <h3>Upload Proof of Delivery</h3>
      {isSuccess && <div className="td-alert td-alert--success">✅ POD uploaded successfully!</div>}
      <form onSubmit={handleSubmit} className="dispatch-form">
        <div className="td-field">
          <label>Load ID</label>
          <input value={loadId} onChange={(e) => setLoadId(e.target.value)} placeholder="LD-2026-0001" required />
        </div>
        <div className="td-field">
          <label>POD Image / Document</label>
          <div className="pod-upload-zone" onClick={() => document.getElementById("pod-file")?.click()}>
            {file ? (
              <span>📎 {file.name}</span>
            ) : (
              <span>📤 Click to upload or drag & drop</span>
            )}
            <input
              id="pod-file"
              type="file"
              accept="image/*,.pdf"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
        </div>
        <div className="td-field">
          <label>Notes</label>
          <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Delivery notes..." />
        </div>
        <button type="submit" className="td-btn td-btn--primary" disabled={isLoading || !file}>
          {isLoading ? "Uploading..." : "Upload POD"}
        </button>
      </form>
    </div>
  );
};

export default PODUpload;