function EnumType() {
    enum Messages {
        "CREATE" = "Created Successfully",
        "UPDATE" = "Updated Successfully",
        "DELETE" = "Deleted Successfully",
        "SEARCH" = "Found the result",
        "ERROR" = "An error occurred",
    }

    type Type = "Create" | "Update" | "Delete" | "Search" | "Error";

    console.log(Messages.CREATE);

    const handleAction = (action: Type): void => {
        if (action === "Create") {
            console.log(Messages.CREATE);
        } else if (action === "Update") {
            console.log(Messages.UPDATE);
        } else if (action === "Delete") {
            console.log(Messages.DELETE);
        } else if (action === "Search") {
            console.log(Messages.SEARCH);
        } else if (action === "Error") {
            console.log(Messages.ERROR);
        }
    };

    return (
        <div className="p-2 space-x-3 ">
            <button
                className="p-2 px-3 bg-gray-100 border rounded-md hover:bg-gray-300"
                onClick={() => handleAction("Create")}
            >
                Create
            </button>
            <button
                className="p-2 px-3 bg-gray-100 border rounded-md hover:bg-gray-300"
                onClick={() => handleAction("Update")}
            >
                Update
            </button>
            <button
                className="p-2 px-3 bg-gray-100 border rounded-md hover:bg-gray-300"
                onClick={() => handleAction("Delete")}
            >
                Delete
            </button>
            <button
                className="p-2 px-3 bg-gray-100 border rounded-md hover:bg-gray-300"
                onClick={() => handleAction("Search")}
            >
                Search
            </button>
            <button
                className="p-2 px-3 bg-gray-100 border rounded-md hover:bg-gray-300"
                onClick={() => handleAction("Error")}
            >
                Error
            </button>
        </div>
    );
}

export default EnumType;
