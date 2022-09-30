import axiosInstance from "../../Utilitis/axios";

// get (R)
export const getTransactions = async () => {
    const response = await axiosInstance.get("/transactions");
    return response.data;
};

//post (C)
export const addTransactions = async (data) => {
    const response = await axiosInstance.post("/transactions", data);
    return response.data;
};


//edit (U)
export const editTransactions = async (id, data) => {
    const response = await axiosInstance.put(`/transactions${id}`, data);
    return response.data;
};

//delete (D)
export const deleteTransactions = async (id) => {
    const response = await axiosInstance.delete(`/transactions${id}`);
    return response.data;
};




// part two of API create.