function Loader() {
    return (
        // <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 opacity-40 h-screen w-screen flex items-center justify-center align-middle">
        //     <div className="text-4xl text-white font-semibold">Loading .. </div>
        // </div>

        <div>
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-900 opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4" />
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
            </div>
        </div>

    )
}

export default Loader
