import {useDispatch, useSelector} from "react-redux";
import {Modal} from "antd";
import {useEffect} from "react";
import {Button, Spinner} from "@material-tailwind/react";
import {useUpdateTransactionMutation} from "@/redux/features/transaction/transactionApi";
import {SetTransactionEditModalOpen} from "@/redux/features/modal/modalSlice";
import {SetEditTransaction} from "@/redux/features/transaction/transactionSlice";


const TransactionEditModal = () => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state)=>state.modal.transactionEditModalOpen);
    const {transactionId,transaction} = useSelector(state=>state.transaction);
    const [updateTransaction, {isSuccess,isLoading}] = useUpdateTransactionMutation();
    const {amount, type, category, date, reference, description} = transaction || {};


    const handleOk = () => {
        dispatch(SetTransactionEditModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetTransactionEditModalOpen(false));
    };


    useEffect(()=>{
        if(isSuccess){
            dispatch(SetTransactionEditModalOpen(false));
        }
    },[isSuccess, dispatch])



    //update receive account
    const handleSubmit = (e) => {
        e.preventDefault();
        updateTransaction({
            id:transactionId,
            data:{
                amount,
                type,
                category,
                date,
                reference,
                description
            }
        })
    }
    
    return (
        <>
            <Modal title="Update Transaction" open={modalOpen} onOk={handleOk}>
                <form onSubmit={handleSubmit}>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="amount">
                            Amount
                        </label>
                        <input onChange={(e)=>dispatch(SetEditTransaction({property:"amount", value:e.target.value}))} value={amount}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="number"
                               id="amount" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="type">
                            Type
                        </label>
                        <select
                            onChange={(e)=>dispatch(SetEditTransaction({property:"type", value:e.target.value}))}
                            value={type}
                            className="w-full outline-none border border-gray-400 bg-white px-4 py-2 rounded-md"
                            id="type" required>
                            <option value="">Select Type</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="category">
                            Category
                        </label>
                        <select
                            onChange={(e)=>dispatch(SetEditTransaction({property:"category", value:e.target.value}))}
                            value={category}
                            className="w-full outline-none border border-gray-400 bg-white px-4 py-2 rounded-md"
                            id="category" required>
                            <option value="">Select Category</option>
                            <option value="salary">Salary</option>
                            <option value="tip">Tip</option>
                            <option value="project">Project</option>
                            <option value="food">Food</option>
                            <option value="movie">Movie</option>
                            <option value="bills">Bills</option>
                            <option value="medical">Medical</option>
                            <option value="fee">Fee</option>
                            <option value="tax">Tax</option>
                        </select>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            onChange={(e)=>dispatch(SetEditTransaction({property:"date", value:e.target.value}))}
                            value={date}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="date"
                               id="date" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="ref">
                            Reference
                        </label>
                        <input
                            onChange={(e)=>dispatch(SetEditTransaction({property:"reference", value:e.target.value}))}
                            value={reference}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="ref" required/>
                    </div>
                    <div className="pt-2">
                        <label className="block pb-2" htmlFor="des">
                            Description
                        </label>
                        <input
                            onChange={(e)=>dispatch(SetEditTransaction({property:"description", value:e.target.value}))}
                            value={description}
                               className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md" type="text"
                               id="des" required/>
                    </div>
                    <div className="flex mt-6 gap-6">
                        <button id="cancel" type="reset" onClick={handleCancel}
                                className="block cursor-pointer w-1/2 bg-red-500 hover:bg-red-700 text-center text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                        <Button disabled={isLoading}
                                className={`${isLoading && "capitalize"} w-1/2 flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                type="submit"
                        >
                            {
                                isLoading ? (
                                    <>
                                        <Spinner className="h-4 w-4"/> Processing...
                                    </>
                                ) : (
                                    <>
                                        Save Changes
                                    </>
                                )
                            }

                        </Button>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default TransactionEditModal;