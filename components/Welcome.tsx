import React from "react";

const Welcome = () => {
  return (
    <div className=" " style={{ backgroundColor: "", paddingBlock: "50px" }}>
      <div className="container ">
        <h1 style={{ fontWeight: "700" }}>
          Welcome to University of Development
        </h1>
        <p>
          University of Development, which was established in 2002, offers degree
          programs ranging from undergraduate to PhD level in various
          disciplines. The University of Development constitutes 9 campuses which
          are spread across the Province of Punjab, with the result that
          opportunities of quality higher education are available to the youth
          of even the remotest parts of the province. The constituent campuses
          of the University include century old Institutions for teacher
          education in the sub continent, with good repute and traditions of
          excellence.
        </p>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
        <h2 style={{ fontWeight: "600" }}> Student Enrollments</h2>
          <table className="w-50 mb-5 ">
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Male Enrollment
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  12637
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Female Enrollment
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  17095
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Total Enrollment
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  {" "}
                  29732
                </td>
              </tr>
            </tbody>
          </table>
          <h2 style={{ fontWeight:"600"}}>Number of faculty members</h2>
          <table className="w-100">
            <thead>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                Year
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                Male Faculty Members
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                Female Faculty Members
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                Total Faculty Members
              </th>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  2020
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  231
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  217
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  448
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  2021
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  231
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  217
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  448
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  2022
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  231
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  217
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  448
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  2023
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  231
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  217
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  448
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row pt-5  ">
          <div className="col bg-success px-4 py-5 me-2 d-flex flex-column justify-content-center align-items-center gap-3">
            <h3 className="text-white">Admissions Fall 2023</h3>
            <div
              className="uppercase text-white text-center py-1 "
              style={{ border: "1px solid white", width: "40%" }}
            >
              View more
            </div>
          </div>
          <div className="col bg-warning px-4 py-5 me-2 d-flex flex-column justify-content-center align-items-center gap-3">
            <h3 className="text-white">Central Library</h3>
            <div
              className="uppercase text-white text-center py-1 "
              style={{ border: "1px solid white", width: "40%" }}
            >
              View more
            </div>
          </div>
          <div className="col bg-success px-4  py-5 d-flex flex-column justify-content-center align-items-center gap-3">
            <h3 className="text-white">News and Updates</h3>
            <div
              className="uppercase text-white text-center py-1 "
              style={{ border: "1px solid white", width: "40%" }}
            >
              View more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
