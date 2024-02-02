import React from 'react';
import {
	Button,
	Card,
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
	Input,
} from '@/components/ui';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {FaMoneyBill1Wave, FaUserGroup} from 'react-icons/fa6';
import {CustomTable} from '../../../components/table';
import {cn} from '@/lib/utils';
import {ChevronDownIcon} from '@radix-ui/react-icons';
// @ts-ignore
export const IconWrapper = ({children, className}) => (
	<div
		className={cn(
			className,
			'flex items-center rounded-full justify-center w-25 p-8 h-25 '
		)}
	>
		{children}
	</div>
);

export default function Dashboard() {
	return (
		<div className="flex  flex-col flex-grow">
			<div className="grid dashboard-cards  grid-cols-3 gap-4 ">
				<Card className="p-5 bg-white/10 backdrop-blur-lg cursor-pointer shadow">
					<div className="grid justify-between grid-cols-2">
						<div className="col-span-1 w-full h-full flex items-center justify-start">
							<IconWrapper
								className="bg-blue-300/70 text-blue-800
                            border-blue-500 border-2"
							>
								<FaUserGroup size={30} />
							</IconWrapper>
						</div>
						<div className="col-span-1 flex flex-col justify-center items-end">
							<p className="text-sm text-left text-gray-400">
								Enrolled Students
							</p>
							<h1 className="text-2xl text-gray-500">1000</h1>
						</div>
					</div>
				</Card>
				<Card className="p-5 bg-white/10 backdrop-blur-lg cursor-pointer shadow">
					<div className="grid justify-between grid-cols-2">
						<div className="col-span-1 w-full h-full flex items-center justify-start">
							<IconWrapper
								className="bg-green-300/70 text-green-500
                            border-green-500 border-2"
							>
								<FaChalkboardTeacher size={30} />
							</IconWrapper>
						</div>
						<div className="col-span-1 flex flex-col justify-center items-end">
							<p className="text-sm text-left text-gray-400">Total Courses</p>
							<h1 className="text-2xl text-gray-500">56</h1>
						</div>
					</div>
				</Card>
				<Card className="p-5 bg-white/10 backdrop-blur-lg cursor-pointer shadow">
					<div className="grid justify-between grid-cols-2">
						<div className="col-span-1 w-full h-full flex items-center justify-start">
							<IconWrapper
								className="bg-pink-100 text-pink-500
                            border-pink-200 border-2"
							>
								<FaMoneyBill1Wave size={30} />
							</IconWrapper>
						</div>
						<div className="col-span-1 flex flex-col justify-center items-end">
							<p className="text-sm text-left text-gray-400">Total Balance</p>
							<h1 className="text-2xl text-gray-500">$402</h1>
						</div>
					</div>
				</Card>
			</div>
			<div className="dashboard-table mt-5">
				<div className="flex items-center py-4">
					<Input
						placeholder="Filter emails..."
						// value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
						// onChange={(event) =>
						// 	table.getColumn('email')?.setFilterValue(event.target.value)
						// }
						className="max-w-sm"
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" className="ml-auto">
								Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						{/* <DropdownMenuContent align="end">
						{table
							.getAllColumns()
							.filter((column) => column.getCanHide())
							.map((column) => {
								return (
									<DropdownMenuCheckboxItem
										key={column.id}
										className="capitalize"
										checked={column.getIsVisible()}
										onCheckedChange={(value) =>
											column.toggleVisibility(!!value)
										}
									>
										{column.id}
									</DropdownMenuCheckboxItem>
								);
							})}
					</DropdownMenuContent> */}
					</DropdownMenu>
				</div>
				<div className="w-full rounded-md no-scrollbar max-h-[calc(100vh-440px)] overflow-scroll border">
					<CustomTable />
				</div>
				<div className="flex items-center justify-end space-x-2 py-4">
					<div className="flex-1 text-sm text-muted-foreground">
						{/* {table.getFilteredSelectedRowModel().rows.length} of{' '}
					{table.getFilteredRowModel().rows.length} row(s) selected. */}
					</div>
					<div className="space-x-2">
						<Button
							variant="outline"
							size="sm"
							// onClick={() => table.previousPage()}
							// disabled={!table.getCanPreviousPage()}
						>
							Previous
						</Button>
						<Button
							variant="outline"
							size="sm"
							// onClick={() => table.nextPage()}
							// disabled={!table.getCanNextPage()}
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}