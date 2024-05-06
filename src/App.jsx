import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactUs from "./pages/ContactUs";

const Home = React.lazy(() => import("./pages/Home"));
const ChangeManagement = React.lazy(() => import("./pages/ChangeManagement"));
const LeanSixSigma = React.lazy(() => import("./pages/LeanSixSigma"));
const OperationalExcellence = React.lazy(() =>
  import("./pages/OperationalExcellence")
);
const SupplyChainOptimization = React.lazy(() =>
  import("./pages/SupplyChainOptimization")
);
const WarehouseDesign = React.lazy(() => import("./pages/WarehouseDesign"));
const WMSImplementation = React.lazy(() => import("./pages/WMSImplementation"));
const Automation = React.lazy(() => import("./pages/Automation"));
const BigDataManagement = React.lazy(() => import("./pages/BigDataManagement"));
const InterimITSupport = React.lazy(() => import("./pages/InterimITSupport"));
const CloudTransformation = React.lazy(() =>
  import("./pages/CloudTransformation")
);
const CloudDataAI = React.lazy(() => import("./pages/CloudDataAI"));
const CloudManagedService = React.lazy(() =>
  import("./pages/CloudManagedService")
);
const Desinging = React.lazy(() => import("./pages/Desinging"));
const Development = React.lazy(() => import("./pages/Development"));
const About = React.lazy(() => import("./pages/AboutUs"));
const Career = React.lazy(() => import("./pages/Career"));
const ApplyJob = React.lazy(() => import("./pages/ApplyJob"));
const DigitalMarketing = React.lazy(() => import("./pages/DigitalMarketing"));
const SCM = React.lazy(() => import("./pages/SCM"));
const OrcaleFusion = React.lazy(() => import("./pages/OrcaleFusion"));
const BusinessProcess = React.lazy(() => import("./pages/BusinessProcess"));
const SeniorLogistics = React.lazy(() => import("./pages/SeniorLogistics"));
const BlueYonder = React.lazy(() => import("./pages/BlueYonder"));
const Backoffice = React.lazy(() => import("./pages/Backoffice"));
const ITSupport = React.lazy(() => import("./pages/ITSupport"));
const WebDeveloper = React.lazy(() => import("./pages/WebDeveloper"));
const OracleFunctionalConsultant = React.lazy(() =>
  import("./pages/OracleFunctionalConsultant")
);
const Odoofunctionalconsultant = React.lazy(() =>
  import("./pages/Odoofunctionalconsultant")
);
const OdooDeveloper = React.lazy(() => import("./pages/OdooDeveloper"));
const ERPConsultant = React.lazy(() => import("./pages/ERPConsultant"));
const ContentWriter = React.lazy(() => import("./pages/ContentWriter"));
const SocialMediaManager = React.lazy(() =>
  import("./pages/SocialMediaManager")
);
const DataEntryOperator = React.lazy(() => import("./pages/DataEntryOperator"));
const DataAna = React.lazy(() => import("./pages/DataAna"));
const SAPBIConsultant = React.lazy(() => import("./pages/SAPBIConsultant"));
const SEOContentWriter = React.lazy(() => import("./pages/SEOContentWriter"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <div className="flex justify-center items-center h-screen">
                <div className="flex flex-row gap-2">
                  <div
                    className="w-4 h-4 rounded-full bg-[#278083] animate-bounce"
                    style={{ animationDelay: "0.7s" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full bg-[#278083] animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full bg-[#278083] animate-bounce"
                    style={{ animationDelay: "0.7s" }}
                  ></div>
                </div>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Change_Management" element={<ChangeManagement />} />
            <Route path="/Lean_&_six_sigma" element={<LeanSixSigma />} />
            <Route
              path="/Operational_Excellence"
              element={<OperationalExcellence />}
            />
            <Route
              path="/Supply_Chain_Optimization_Study"
              element={<SupplyChainOptimization />}
            />
            <Route path="/Warehouse_Design" element={<WarehouseDesign />} />
            <Route path="/WMSImplementation" element={<WMSImplementation />} />
            <Route path="/Automation" element={<Automation />} />
            <Route
              path="/Big_Data_Management"
              element={<BigDataManagement />}
            />
            <Route path="/Interim_IT_Support" element={<InterimITSupport />} />
            <Route
              path="/Cloud_Transformation"
              element={<CloudTransformation />}
            />
            <Route path="/Cloud_Data_&_AI" element={<CloudDataAI />} />
            <Route
              path="/Cloud_Management_Services"
              element={<CloudManagedService />}
            />
            <Route path="/About_Us" element={<About />} />
            <Route path="/Contact_Us" element={<ContactUs />} />
            <Route path="/Career" element={<Career />} />
            <Route path="/Desinging" element={<Desinging />} />
            <Route path="/Development" element={<Development />} />
            <Route path="/Digital_Marketing" element={<DigitalMarketing />} />
            <Route path="/ApplyJob" element={<ApplyJob />} />
            <Route path="/SCM" element={<SCM />} />
            <Route path="/OrcaleFusion" element={<OrcaleFusion />} />
            <Route path="/BusinessProcess" element={<BusinessProcess />} />
            <Route path="/SeniorLogistics" element={<SeniorLogistics />} />
            <Route path="/BlueYonder" element={<BlueYonder />} />
            <Route path="/Backoffice" element={<Backoffice />} />
            <Route path="/ITSupport" element={<ITSupport />} />
            <Route path="/WebDeveloper" element={<WebDeveloper />} />
            <Route
              path="/OracleFunctionalConsultant"
              element={<OracleFunctionalConsultant />}
            />
            <Route
              path="/Odoofunctionalconsultant"
              element={<Odoofunctionalconsultant />}
            />
            <Route path="/OdooDeveloper" element={<OdooDeveloper />} />
            <Route path="/ERPConsultant" element={<ERPConsultant />} />
            <Route path="/ContentWriter" element={<ContentWriter />} />
            <Route
              path="/SocialMediaManager"
              element={<SocialMediaManager />}
            />
            <Route path="/DataEntryOperator" element={<DataEntryOperator />} />
            <Route path="/DataAna" element={<DataAna />} />
            <Route path="/SAPBIConsultant" element={<SAPBIConsultant />} />
            <Route path="/SEOContentWriter" element={<SEOContentWriter />} />
            <Route path="/Not_Found" element={<NotFound />} />
          </Routes>
          <Layout />
        </Suspense>
      </BrowserRouter>
    </>
  );
}
