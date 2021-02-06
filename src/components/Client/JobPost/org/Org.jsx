import React from 'react'
import { Select, MenuItem } from "@material-ui/core";
import './Org.css'
import { useSelector, useDispatch } from 'react-redux'
import { setOrganisationModal } from '../../../../redux/Actions/ModalActions'

const orgTypes = [
    { value : "NGO"},
    { value : "Private Sector"},
    { value : "Public Sector"},
    { value : "School"},
    { value : "Govt. Organization"}
]

const Org = ({formData, setFormData}) => {
    const dispatch = useDispatch()
    const { organisationModal } = useSelector(state => state.ModalState)
    return (
        <div className='org-container'>
            <p className='org'>Enter Organization Details</p>
            <div className='org-name'>
                <p>Organization Name</p>
                <input 
                    style={{ 
                        width : '100%', 
                        borderRadius : '10px', 
                        padding: '5px' 
                    }}
                    type="text" value={formData.organisationName} onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}/>
            </div>
            <div className='org-type'>
                <p>Type of Organization</p>
                <Select
                    labelId='demo-customized-select-label'
                    id='demo-customized-select'
                    className='bg-light rounded'
                    style={{ width: '100%', padding: '1rem', height: 0 }}
                    value={formData.organisationType}
                    onChange={(e) => setFormData({ ...formData, organisationType: e.target.value })}
                >
                    <MenuItem disabled value="any">
                        Any
                    </MenuItem>
                        {
                            orgTypes.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.value}
                                </MenuItem>
                            ))
                        }
                </Select>
            </div>
            <div className='org-button'>
                <button
                    disabled={
                        formData.organisationName === '' && formData.organisationType === '' ? true : false
                    }
                    onClick={()=> dispatch(setOrganisationModal(false))}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Org
