import { Avatar, AvatarImage } from "../ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { CiEdit } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";

const CompaniesTable = () => {
    return (
        <div className="my-2">
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableCell>
                        <Avatar>
                            <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" />


                        </Avatar>
                    </TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>18-07-2024</TableCell>
                    <TableCell className="text-right cursor-pointer">
                        <Popover>
                            <PopoverTrigger><IoIosMore /></PopoverTrigger>
                            <PopoverContent className="w-32">
                                <div className="flex items-center gap-4 w-fit cursor-pointer">
                                    <CiEdit className="text-xl" />
                                    <span>Edit</span>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </TableCell>
                </TableBody>
            </Table>
        </div>
    )
}

export default CompaniesTable