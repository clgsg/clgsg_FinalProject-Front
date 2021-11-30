// import * as React from "react";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import TableSortLabel from "@mui/material/TableSortLabel";
// import Paper from "@mui/material/Paper";
// import { visuallyHidden } from "@mui/utils";
// import Button from "components/Button";

// //! Función para introducir los datos de la query/service getDataByUsersPreferences
// function createData(
// 	sport,
// 	game_date,
// 	game_time,
// 	adapted,
// 	game_gender,
// 	game_venue
// ) {
// 	return { sport, game_date, game_time, adapted, game_gender, game_venue };
// }

// const rows = [createData()];

// function descendingComparator(a, b, orderBy) {
// 	if (b[orderBy] < a[orderBy]) {
// 		return -1;
// 	}
// 	if (b[orderBy] > a[orderBy]) {
// 		return 1;
// 	}
// 	return 0;
// }

// function getComparator(order, orderBy) {
// 	return order === "desc"
// 		? (a, b) => descendingComparator(a, b, orderBy)
// 		: (a, b) => -descendingComparator(a, b, orderBy);
// }

// // This method is created for cross-browser compatibility, if you don't
// // need to support IE11, you can use Array.prototype.sort() directly
// function stableSort(array, comparator) {
// 	const stabilizedThis = array.map((el, index) => [el, index]);
// 	stabilizedThis.sort((a, b) => {
// 		const order = comparator(a[0], b[0]);
// 		if (order !== 0) {
// 			return order;
// 		}
// 		return a[1] - b[1];
// 	});
// 	return stabilizedThis.map((el) => el[0]);
// }

// const headCells = [
// 	{
// 		id: "sport",
// 		numeric: false,
// 		label: "Deporte",
// 	},
// 	{
// 		id: "game_date",
// 		numeric: false,
// 		label: "Fecha",
// 	},
// 	{
// 		id: "game_time",
// 		numeric: false,
// 		label: "Hora",
// 	},
// 	{
// 		id: "adapted",
// 		numeric: false,
// 		label: "Adaptado",
// 	},
// 	{
// 		id: "game_gender",
// 		numeric: false,
// 		label: "Masc./Fem.",
// 	},
// 	{
// 		id: "game_venue",
// 		numeric: false,
// 		label: "Lugar",
// 	},
// 	{
// 		id: "action",
// 		numeric: false,
// 		label: "",
// 	},
// ];

// function EnhancedTableHead(props) {
// 	const { order, orderBy, onRequestSort } = props;
// 	const createSortHandler = (property) => (event) => {
// 		onRequestSort(event, property);
// 	};

// 	return (
// 		<TableHead>
// 			<TableRow>
// 				{headCells.map((headCell) => (
// 					<TableCell
// 						key={headCell.id}
// 						align={headCell.numeric ? "right" : "left"}
// 						padding={headCell.disablePadding ? "none" : "normal"}
// 						sortDirection={orderBy === headCell.id ? order : false}
// 					>
// 						<TableSortLabel
// 							active={orderBy === headCell.id}
// 							direction={orderBy === headCell.id ? order : "asc"}
// 							onClick={createSortHandler(headCell.id)}
// 						>
// 							{headCell.label}
// 							{orderBy === headCell.id ? (
// 								<Box component="span" sx={visuallyHidden}>
// 									{order === "desc"
// 										? "sorted descending"
// 										: "sorted ascending"}
// 								</Box>
// 							) : null}
// 						</TableSortLabel>
// 					</TableCell>
// 				))}
// 			</TableRow>
// 		</TableHead>
// 	);
// }

// EnhancedTableHead.propTypes = {
// 	numSelected: PropTypes.number.isRequired,
// 	onRequestSort: PropTypes.func.isRequired,
// 	onSelectAllClick: PropTypes.func.isRequired,
// 	order: PropTypes.oneOf(["asc", "desc"]).isRequired,
// 	orderBy: PropTypes.string.isRequired,
// 	rowCount: PropTypes.number.isRequired,
// };

// export default function EnhancedTable() {
// 	const [order, setOrder] = React.useState("asc");
// 	const [orderBy, setOrderBy] = React.useState("game_date");
// 	const [selected, setSelected] = React.useState([]);
// 	const [page, setPage] = React.useState(0);
// 	const [rowsPerPage, setRowsPerPage] = React.useState(5);

// 	const handleRequestSort = (event, property) => {
// 		const isAsc = orderBy === property && order === "asc";
// 		setOrder(isAsc ? "desc" : "asc");
// 		setOrderBy(property);
// 	};

// 	const handleClick = (event, name) => {
// 		const selectedIndex = selected.indexOf(name);
// 		let newSelected = [];

// 		if (selectedIndex === -1) {
// 			newSelected = newSelected.concat(selected, name);
// 		} else if (selectedIndex === 0) {
// 			newSelected = newSelected.concat(selected.slice(1));
// 		} else if (selectedIndex === selected.length - 1) {
// 			newSelected = newSelected.concat(selected.slice(0, -1));
// 		} else if (selectedIndex > 0) {
// 			newSelected = newSelected.concat(
// 				selected.slice(0, selectedIndex),
// 				selected.slice(selectedIndex + 1)
// 			);
// 		}

// 		setSelected(newSelected);
// 	};

// 	const handleChangePage = (event, newPage) => {
// 		setPage(newPage);
// 	};

// 	const handleChangeRowsPerPage = (event) => {
// 		setRowsPerPage(parseInt(event.target.value, 10));
// 		setPage(0);
// 	};

// 	const emptyRows =
// 		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

// 	return (
// 		<Box sx={{ width: "100%" }}>
// 			<Paper sx={{ width: "100%", mb: 2 }}>
// 				<TableContainer>
// 					<Table
// 						sx={{ minWidth: 750 }}
// 						aria-labelledby="tableTitle"
// 						size={"small"}
// 					>
// 						<EnhancedTableHead
// 							order={order}
// 							orderBy={orderBy}
// 							onRequestSort={handleRequestSort}
// 							rowCount={rows.length}
// 						/>
// 						<TableBody>
// 							{/* if you don't need to support IE11, you can replace the `stableSort` call with:
//                  rows.slice().sort(getComparator(order, orderBy)) */}
// 							{stableSort(rows, getComparator(order, orderBy))
// 								.slice(
// 									page * rowsPerPage,
// 									page * rowsPerPage + rowsPerPage
// 								)
// 								.map((row, index) => {
// 									const labelId = `enhanced-table-checkbox-${index}`;

// 									return (
// 										<TableRow
// 											hover
// 											onClick={(event) =>
// 												handleClick(event, row.name)
// 											}
// 											role="checkbox"
// 											tabIndex={-1}
// 											key={row.name}
// 										>
// 											<TableCell
// 												component="th"
// 												id={labelId}
// 												scope="row"
// 												padding="none"
// 											>
// 												{row.sport}
// 											</TableCell>
// 											<TableCell align="right">
// 												{row.game_date}
// 											</TableCell>
// 											<TableCell align="right">
// 												{row.game_time}
// 											</TableCell>
// 											<TableCell align="right">
// 												{row.adapted}
// 											</TableCell>
// 											<TableCell align="right">
// 												{row.game_gender}
// 											</TableCell>
// 											<TableCell align="right">
// 												{row.game_venue}
// 											</TableCell>
// 											<TableCell align="center">
// 												{row.action}
// 												<Button text="+info" />
// 												<Button text="Apuntarme" />
// 											</TableCell>
// 										</TableRow>
// 									);
// 								})}
// 							{emptyRows > 0 && (
// 								<TableRow
// 									style={{
// 										height: 33 * emptyRows,
// 									}}
// 								>
// 									<TableCell colSpan={6} />
// 								</TableRow>
// 							)}
// 						</TableBody>
// 					</Table>
// 				</TableContainer>
// 				<TablePagination
// 					rowsPerPageOptions={[5, 10, 25]}
// 					component="div"
// 					count={rows.length}
// 					rowsPerPage={rowsPerPage}
// 					page={page}
// 					onPageChange={handleChangePage}
// 					onRowsPerPageChange={handleChangeRowsPerPage}
// 				/>
// 			</Paper>
// 		</Box>
// 	);
// }