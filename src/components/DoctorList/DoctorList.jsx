import doctor_pic from "../../assets/images/doctor.jpg";
import {Button} from "@material-tailwind/react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {SetBookingModalOpen} from "../../redux/features/modal/modalSlice.js";
import BookingModal from "../modal/BookingModal.jsx";


const DoctorList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
            <div className="grid grid-cols-1 pt-8 pb-12">
                <div className="container">
                    <div className="flex justify-center flex-wrap gap-4">
                        <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                            <img
                                src={doctor_pic}
                                className="card-img-top w-full h-[260px] rounded-md"
                                alt="product_image"
                            />
                            <div className="card-body">
                                <p className="card-text w-full bg-[#236ca2] text-white py-2 text-center">
                                    DR. MD SHOHIDUL ISLAM ARJU
                                </p>
                                <p className="card-text w-full bg-[#236ca2cc] text-white text-sm text-center py-2">
                                   Neurologist
                                </p>
                                <div className="flex">
                                    <Button onClick={()=>navigate("/doctor-details")} className="w-full rounded-none bg-green-500">View</Button>
                                    <Button onClick={()=>dispatch(SetBookingModalOpen(true))} className="w-full rounded-none">Book</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BookingModal/>
        </>
    );
};

export default DoctorList;