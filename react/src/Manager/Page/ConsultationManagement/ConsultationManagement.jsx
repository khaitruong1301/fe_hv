import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetFranchiseRegistrationConsultActionAsync,
  UpdateFranchiseRegistrationConsultActionAsync,
} from "../../../Redux/ReducerAPI/ConsultationReducer";
import { Modal, Select, Pagination } from 'antd';

const ConsultationManagement = () => {
  const { franchiseConsult, totalPagesCount } = useSelector(
    (state) => state.ConsultationReducer
  );
  const dispatch = useDispatch();
  const [status, setStatus] = useState("Consulted");
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize] = useState(6);

  useEffect(() => {
    dispatch(GetFranchiseRegistrationConsultActionAsync(status, pageIndex, pageSize));
  }, [status, pageIndex]);

  useEffect(() => {
    // Reset the page index to 1 whenever the status changes
    setPageIndex(1);
  }, [status]);

  const handleApproveFranchiseRegisById = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete this post?",
      onOk: () => {
        dispatch(UpdateFranchiseRegistrationConsultActionAsync(id, status, pageIndex, pageSize));
      },
    });
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const handlePageChange = (page) => {
    setPageIndex(page);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="card-title">Pending approval consult</h5>
            <Select 
              defaultValue={status} 
              style={{ width: 150 }} 
              onChange={handleStatusChange}
            >
              <Select.Option value="Consulted">Consulted</Select.Option>
              <Select.Option value="NotConsulted">Not Consulted</Select.Option>
              {/* Add more options as needed */}
            </Select>
          </div>

          <div className="table-responsive">
            <table className="table text-nowrap align-middle mb-0">
              <thead>
                <tr className="border-2 border-bottom border-primary border-0">
                  <th scope="col" className="ps-0">No</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col" className="text-center">Email</th>
                  <th scope="col" className="text-center">Phone Number</th>
                  <th scope="col" className="text-center">Status</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {franchiseConsult && franchiseConsult.length > 0 ? (
                  franchiseConsult.map((consult, index) => (
                    <tr key={consult.id}>
                      <th scope="row" className="ps-0 fw-medium">
                        <span className="table-link1 text-truncate d-block">{(pageIndex - 1) * pageSize + index + 1}</span>
                      </th>
                      <td>
                        <a href="javascript:void(0)" className="link-primary text-dark fw-medium d-block">
                          {consult.cusomterName}
                        </a>
                      </td>
                      <td className="text-center fw-medium">{consult.email}</td>
                      <td className="text-center fw-medium">{consult.phoneNumber}</td>
                      <td className="text-center fw-medium">{consult.status}</td>
                      <td className="text-center fw-medium">
                        <button className="btn btn-sm btn-success me-2" onClick={() => handleApproveFranchiseRegisById(consult.id)}>Approve</button>
                        <button className="btn btn-sm btn-danger">Reject</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center">
                      No franchise consultations available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-end mt-3">
            <Pagination 
              current={pageIndex} 
              pageSize={pageSize} 
              total={totalPagesCount * pageSize} 
              onChange={handlePageChange} 
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationManagement;