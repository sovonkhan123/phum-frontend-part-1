import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/AcademicSemesterApi";


const AcademicSemester = () => {
    const {data} = useGetAllSemesterQuery(undefined);
    console.log(data)
    return (
        <div>
            jlyhpio
        </div>
    );
};

export default AcademicSemester;