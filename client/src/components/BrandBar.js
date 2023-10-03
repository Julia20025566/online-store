import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Dropdown, Row} from "react-bootstrap";
import "../oldStyle/old_html/basket.css"
import * as PropTypes from "prop-types";

function DropdownType(props) {
    return null;
}


const BrandBar = observer(() => {
    const {device} = useContext(Context)

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic"  className="brand_bar">
                Brand
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {device.brands.map(brand =>
                <Dropdown.Item key={brand.id}
                               className="p-1"

                               onClick={() => device.setSelectedBrand(brand)}
                               border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Dropdown.Item>
                    )}
            </Dropdown.Menu>

        </Dropdown>
    );
});

export default BrandBar;
