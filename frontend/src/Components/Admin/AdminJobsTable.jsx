import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { CiEdit } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const AdminJobsTable = () => {

    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);

    const [filterJobs, setFilterJobs] = useState(allAdminJobs);

    useEffect(() => {
        const filteredJobs = allAdminJobs?.length >= 0 && allAdminJobs?.filter((job) => {
            if (!searchJobByText) {
                return true
            }
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
        })
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText]);

    const navigate = useNavigate();

    return (
        <div className="my-2">
            <Table>
                <TableCaption>A list of your recent posted jobs</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {

                        filterJobs?.map((job) => (

                            <tr key={job._id}>
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><IoIosMore /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={() => navigate(`/admin/companies/${job._id}`)} className="flex items-center gap-4 w-fit cursor-pointer">
                                                <CiEdit className="text-xl" />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>


                        ))

                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable;

