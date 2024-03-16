import { deleteOccasion } from "@/actions/delete-occasion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default function OccasionsTable({
  occasions,
}: {
  occasions: unknown[];
}) {
  async function onDelete(id: string) {
    "use server";

    await deleteOccasion(id);
    revalidatePath("/occasions");
  }

  return (
    <Table>
      <TableCaption>A list of your occasions.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Receiver Email</TableHead>
          <TableHead>Delivery Method</TableHead>
          <TableHead>Delivery Date and Time</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {occasions.map((occasion) => (
          <TableRow key={occasion?.id}>
            <TableCell>{occasion?.title}</TableCell>
            <TableCell>{occasion?.receiverEmail}</TableCell>
            <TableCell>{occasion?.deliveryMethod}</TableCell>
            <TableCell>{occasion?.deliveryDateAndTime.toString()}</TableCell>
            <TableCell>{occasion?.status}</TableCell>
            <TableCell>{occasion?.createdAt.toString()}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <DotsHorizontalIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <Link href={`/occasions/${occasion?.id}/edit`}>
                    <DropdownMenuItem>Edit Occasion</DropdownMenuItem>
                  </Link>
                  <form action={onDelete.bind(null, occasion?.id)}>
                    <button type="submit">
                      <DropdownMenuItem>Delete Occasion</DropdownMenuItem>
                    </button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6}>Total</TableCell>
          <TableCell className="text-right">{occasions.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
