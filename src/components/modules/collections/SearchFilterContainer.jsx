import React from 'react'

//#region MUI Imports
import { Container, Box, TextField, InputAdornment, FilledInput, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
//#endregion

//#region MUI Icons Imports
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
//#endregion

//#region Component Imports
import CustomSection from '../common/CustomSection'
import SectionTitle from '../common/SectionTitle'
//#endregion

//#region Data Imports
import { collections } from '../../../data/products';
//#endregion

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const SearchFilterContainer = ({ onChangeSearch, filter }) => {

    const theme = useTheme();
    const [filterState, setFilterState] = React.useState([]);

    const handleFilterChange = (event) => {
        const {
            target: { value },
        } = event;
        setFilterState(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <CustomSection sx={{pb: 6}}>
            <SectionTitle title='Explore Our Collection' />
            <Container>
                <Box sx={{ pb: theme.spacing(6), display: 'flex', alignItems: 'stretch', gap: 1 }}>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2, backgroundColor: theme.palette.primary.main }}>
                        <SearchRoundedIcon sx={{ color: theme.palette.primary.contrastText }} />
                    </Box> */}
                    <TextField
                        hiddenLabel
                        placeholder='Search...'
                        variant="filled"
                        onChange={onChangeSearch}
                        value={filter.searchText}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchRoundedIcon />
                                </InputAdornment>
                            ),
                        }}
                        fullWidth />
                    <Box>
                        {/* <Select
                            multiple
                            displayEmpty
                            value={filterState}
                            onChange={(event) => handleFilterChange(event)}
                            input={<FilledInput hiddenLabel />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <Typography sx={{ letterSpacing: 1.5, mr: 1 }}>Filter</Typography>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{
                                py: 0,
                                px: 1,
                                maxWidth: theme.spacing(25),
                                height: '100%',
                                backgroundColor: theme.palette.primary.main + "!important",
                                color: theme.palette.primary.contrastText,
                                '.MuiSelect-select': {
                                    py: 0
                                },
                                '>*': {
                                    color: `${theme.palette.primary.contrastText}!important`
                                }
                            }}
                        >
                            {collections.map((collection) => (
                                <MenuItem
                                    key={collection.id}
                                    value={collection.title}
                                    style={getStyles(collection.title, collection.title, theme)}
                                >
                                    {collection.title}
                                </MenuItem>
                            ))}
                        </Select> */}
                    </Box>
                </Box>
            </Container>
        </CustomSection>
    )
}

export default SearchFilterContainer