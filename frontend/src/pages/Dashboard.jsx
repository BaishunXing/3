import React, { useRef, useState } from 'react'

const Dashboard = () => {
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    setSelectedFile(file)

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('http://localhost:8080/api/upload-csv', {
        method: 'POST',
        body: formData
      })

      const data = await res.json()
      console.log('Backend response:', data)
    } catch (err) {
      console.error('Upload failed:', err)
    }
  }

  return (
    <div style={{ padding: '24px' }}>
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,text/csv"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      <button
        type="button"
        onClick={handleUploadClick}
        className="csvUploadBtn"
        style={{
          position: 'fixed',
          top: '20px',
          right: '24px',
          zIndex: 1000,
          padding: '10px 16px',
          border: 'none',
          borderRadius: '8px',
          backgroundColor: '#2563eb',
          color: '#fff',
          cursor: 'pointer',
          marginTop: 0
        }}
      >
        Upload CSV
      </button>

      {selectedFile && (
        <p style={{ marginTop: '12px' }}>chosen file: {selectedFile.name}</p>
      )}
    </div>
  )
}

export default Dashboard