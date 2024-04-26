import doctor_pic from "../../assets/images/doctor.jpg";
import {useLocation} from "react-router-dom";

const Doctors = ({title}) => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div className="grid grid-cols-1 pt-8 pb-12">
                <div className="container">
                    {
                        path === "/doctors" && (
                            <p className="text-gray-700">Our Consultant Doctors Serial: 01600 338284 </p>
                        )
                    }
                    <h1 className="text-4xl text-center py-8 font-bold text-gray-800">{title}</h1>
                    <div className="flex justify-center flex-wrap gap-4">
                        <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                            <img
                                src={doctor_pic}
                                className="card-img-top w-full h-[300px] rounded-md"
                                alt="product_image"
                            />
                            <div className="card-body">
                                <p className="card-text w-full bg-[#236ca2] text-white py-2 text-center">
                                    DR. MD SHOHIDUL ISLAM ARJU
                                </p>
                                <p className="card-text w-full bg-[#236ca2cc] text-white text-sm text-center py-2">
                                    MBBS, BCS, (Health),PGT(ANT), DLO , serial: Call Our Number Time:2 pm - 5 pm ( Mon,
                                    Tue)
                                </p>
                            </div>
                        </div>
                        <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                            <img
                                src={doctor_pic}
                                className="card-img-top w-full h-[300px] rounded-md"
                                alt="product_image"
                            />
                            <div className="card-body">
                                <p className="card-text w-full bg-[#236ca2] text-white py-2 text-center">
                                    DR. MD SHOHIDUL ISLAM ARJU
                                </p>
                                <p className="card-text w-full bg-[#236ca2cc] text-white text-sm text-center py-2">
                                    MBBS, BCS, (Health),PGT(ANT), DLO , serial: Call Our Number Time:2 pm - 5 pm ( Mon,
                                    Tue)
                                </p>
                            </div>
                        </div>
                        <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                            <img
                                src={doctor_pic}
                                className="card-img-top w-full h-[300px] rounded-md"
                                alt="product_image"
                            />
                            <div className="card-body">
                                <p className="card-text w-full bg-[#236ca2] text-white py-2 text-center">
                                    DR. MD SHOHIDUL ISLAM ARJU
                                </p>
                                <p className="card-text w-full bg-[#236ca2cc] text-white text-sm text-center py-2">
                                    MBBS, BCS, (Health),PGT(ANT), DLO , serial: Call Our Number Time:2 pm - 5 pm ( Mon,
                                    Tue)
                                </p>
                            </div>
                        </div>
                        <div className="card px-4 py-4 rounded-lg shadow-lg w-[18rem]">
                            <img
                                src={doctor_pic}
                                className="card-img-top w-full h-[300px] rounded-md"
                                alt="product_image"
                            />
                            <div className="card-body">
                                <p className="card-text w-full bg-[#236ca2] text-white py-2 text-center">
                                    DR. MD SHOHIDUL ISLAM ARJU
                                </p>
                                <p className="card-text w-full bg-[#236ca2cc] text-white text-sm text-center py-2">
                                    MBBS, BCS, (Health),PGT(ANT), DLO , serial: Call Our Number Time:2 pm - 5 pm ( Mon,
                                    Tue)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Doctors;