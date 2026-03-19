export default function SAML() {
  return (
    <>
      <div className="mx-auto p-6 flex flex-col gap-6">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-100 mb-4">SAML Utility</h1>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col">
            <label className="text-gray-400 mb-1">Input SAML Response / XML</label>
            <textarea
              placeholder="Paste SAMLResponse or XML here..."
              className="flex-1 bg-gray-800 text-gray-100 p-3 rounded-md resize-none min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Buttons moved below the textarea */}
            <div className="flex gap-2 mt-4 justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                Decode SAML
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                Encode XML
              </button>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex flex-col">
          <label className="text-gray-400 mb-1">Output</label>
          <textarea
            readOnly
            placeholder="Decoded XML or encoded SAMLResponse will appear here..."
            className="flex-1 bg-gray-800 text-gray-100 p-3 rounded-md resize-none min-h-[200px] focus:outline-none"
          />
        </div>
      </div>
    </>
  );
}