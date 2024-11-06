import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";

const status = ['Accepted', 'Rejected'];

const ApplicantTable = () => {

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
                <tr>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Contact</TableCell>
                    <TableCell>Resume</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell className="text-right">
                        <Popover>
                            <PopoverTrigger>
                                <MoreHorizontal />
                            </PopoverTrigger>
                            <PopoverContent className="w-32 cursor-pointer">
                                {
                                    status.map((status, index) => {
                                        return (
                                            <div key={index} className="flex w-fit items-center my-2">
                                                <span>{status}</span>
                                            </div>
                                        )
                                    })
                                }
                            </PopoverContent>
                        </Popover>

                    </TableCell>
                </tr>
            </TableBody>

        </Table>
    )
}

export default ApplicantTable