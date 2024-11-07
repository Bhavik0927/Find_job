import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";

const status = ['Accepted', 'Rejected'];

const ApplicantTable = () => {
    const { applicants } = useSelector(store => store.application);

    const statusHandler = async (status,id) =>{
        try {
            axios.defaults.withCredentials = true;
            const res =await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status});
            console.log(res.data);
            if(res.data.success){
                toast.success(res.data.message);    
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <Table>
            <TableCaption>A list of your recent applied user</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>FullName</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {
                    applicants && applicants?.applications?.map((item) => (
                        <tr key={item._id}>
                            <TableCell>{item?.applicant?.fullName}</TableCell>
                            <TableCell>{item?.applicant?.email}</TableCell>
                            <TableCell>{item?.applicant?.phoneNumber}</TableCell>
                            <TableCell >
                                {
                                    item.applicant?.profile?.resume ? <a className="text-blue-600 underline" href={item?.applicant?.profile?.resume} target="__blank"> {item?.applicant?.profile?.resumeOriginalName} </a> : <span>NA</span>
                                }
                            </TableCell>
                            <TableCell>{item?.applicant?.createdAt.split("T")[0]}</TableCell>
                            <TableCell className="text-right">
                                <Popover>
                                    <PopoverTrigger>
                                        <MoreHorizontal />
                                    </PopoverTrigger>
                                    <PopoverContent className="w-32 cursor-pointer">
                                        {
                                            status.map((status, index) => {
                                                return (
                                                    <div onClick={() => statusHandler(status,item._id)} key={index} className="flex w-fit items-center my-2">
                                                        <span>{status}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </PopoverContent>
                                </Popover>

                            </TableCell>
                        </tr>
                    ))
                }

            </TableBody>

        </Table>
    )
}

export default ApplicantTable