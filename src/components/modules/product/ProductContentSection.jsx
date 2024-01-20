import React from 'react'

//#region MUI Imports
import { Grid, Box, Container } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useTheme, styled } from '@mui/material/styles'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import FadeRevealAnimation from '../common/FadeRevealAnimation'
//#endregion

//#region Helper Functions
import { getProductById } from '../../../utils/helper/productCollectionHelper'
//#endregion

//#region Style Customization
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
//#endregion


const ProductContentSection = ({ productId }) => {

    const theme = useTheme();
    const product = getProductById(productId)

    return (
        <CustomSection>
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ width: '100%', height: '100%', minHeight: 10, display: 'flex', alignItems: 'center' }}>
                            <FadeRevealAnimation>
                                <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain', border: '8px solid transparent' }} />
                            </FadeRevealAnimation>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell align="center">C</StyledTableCell>
                                        <StyledTableCell align="center">L</StyledTableCell>
                                        <StyledTableCell align="center">W</StyledTableCell>
                                        <StyledTableCell align="center">H</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {product.table.map((row) => (
                                        <StyledTableRow
                                            key={row.C}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <StyledTableCell align="center">{row.C}</StyledTableCell>
                                            <StyledTableCell align="center">{row.L}</StyledTableCell>
                                            <StyledTableCell align="center">{row.W}</StyledTableCell>
                                            <StyledTableCell align="center">{row.H}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </CustomSection>
    )
}

export default ProductContentSection