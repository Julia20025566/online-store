import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form} from "react-bootstrap";
import {createBrand, createType, fetchBrands, fetchTypes, updateBrand, updateType} from "../../http/deviceAPI";
import {Context} from "../../index";

const CreateBrand = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])


    const upBrand = () => {
        const formData = new FormData()
        updateBrand(name, device.selectedBrand.id).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Обновить бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form mt-2 mb-2>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бренд"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={"Введите обновленное название бренда"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={upBrand}>Изменить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
