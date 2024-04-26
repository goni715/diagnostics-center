

const ListLoading = () => {
    return (
        <>
            <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem] animate-pulse">
                <div
                    className="card-img-top bg-gray-300 h-[280px] rounded-md"
                ></div>
                <div className="card-body space-y-4 mt-2">
                    <p className="card-text w-full h-[30px] text-gray-300 bg-gray-300 rounded">
                        item?.description.substring(0, 60)..
                    </p>
                    <p className="card-text w-full h-[30px] text-gray-300 bg-gray-300 rounded">
                        item?.description.substring(0, 60)..
                    </p>
                </div>
            </div>
        </>
    );
};

export default ListLoading;