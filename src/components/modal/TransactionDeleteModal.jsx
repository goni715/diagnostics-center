import {useDispatch, useSelector} from "react-redux";
import {Modal} from "antd";
import {useEffect} from "react";
import {useDeleteTransactionMutation} from "@/redux/features/transaction/transactionApi";
import {SetTransactionDeleteModalOpen} from "@/redux/features/modal/modalSlice";
import {Button, Spinner} from "@material-tailwind/react";


const TransactionDeleteModal = () => {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state)=>state.modal.transactionDeleteModalOpen);
    const {transactionId} = useSelector(state=>state.transaction);
    const [deleteTransaction, {isSuccess,isLoading}] = useDeleteTransactionMutation();


    const handleOk = () => {
        dispatch(SetTransactionDeleteModalOpen(false));
    };
    const handleCancel = () => {
        dispatch(SetTransactionDeleteModalOpen(false));
    };

    useEffect(()=>{
        if(isSuccess){
            dispatch(SetTransactionDeleteModalOpen(false));
        }
    },[isSuccess, dispatch])


    const handleDelete = () => {
        deleteTransaction(transactionId);
    }

    return (
        <>
            <Modal title="Are you sure? You want to delete." open={modalOpen} onOk={handleOk}>
                <div>
                    <div className="flex mt-6 gap-6 pt-5">
                        <button onClick={handleCancel} className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md">
                            Cancel
                        </button>
                        <Button onClick={handleDelete} disabled={isLoading}
                                className={`${isLoading && "capitalize"} w-1/2 flex gap-3 items-center justify-center disabled:cursor-not-allowed`}
                                >
                            {
                                isLoading ? (
                                    <>
                                        <Spinner className="h-4 w-4"/> Processing...
                                    </>
                                ) : (
                                    <>
                                        Yes
                                    </>
                                )
                            }

                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default TransactionDeleteModal;