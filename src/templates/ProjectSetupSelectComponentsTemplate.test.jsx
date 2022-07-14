import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProjectSetupSelectComponentsTemplate from "./ProjectSetupSelectComponentsTemplate";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "12",
  }),
}));

const projectData = {
  title: "Test Project",
  acronym: "TP",
  id: 12,
  impact_level: "low",
};
localStorage.setItem("project", JSON.stringify(projectData));
const componentList = [
  {
    id: 60,
    title: "active-directory",
    description: "Active Directory",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "ced875ac-c5e5-44a8-b34c-8ac4f8ab87e6",
        metadata: {
          title: "Active Directory",
          version: "unknown",
          published: "2021-09-04T02:25:34.558932+00:00",
          "last-modified": "2021-09-04T02:25:34.558936+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "e35accd9-0cc3-4a02-8557-01764c7cbe0b",
            title: "Active Directory",
            description: "Active Directory",
            "control-implementations": [
              {
                uuid: "f94a7f03-6ac5-4386-98eb-fa0392f26a1c",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "6698d762-5cdc-452e-9f9e-3074df5292c6",
                    "control-id": "ac-2.1",
                    description:
                      "Active Directory records all GSS account information and performs authentication, authorization, and management services.",
                  },
                  {
                    uuid: "73dd3c2e-54eb-43c6-a488-dfb7c79d9413",
                    "control-id": "ac-2.2",
                    description:
                      "The Expiration Date attribute of Active Directory temporary or emergency accounts is set to 24 hours (emergency accounts) or 60 days (temporary accounts).",
                  },
                  {
                    uuid: "9b3456e6-fb01-49ee-aa2e-34f4b1a75fca",
                    "control-id": "ac-2.3",
                    description:
                      "A monthly script is run to disable Active Directory accounts inactive for 60 days. Accounts are removed after 120 days of inactivity.",
                  },
                  {
                    uuid: "04567a1f-a655-446f-999b-f8418f818d79",
                    "control-id": "ac-2.4",
                    description:
                      "Active Directory automatically audits account creation, modification, enabling, disabling, and removal actions with logs forwarded to Splunk.",
                  },
                  {
                    uuid: "9e83487a-3c15-4206-8cc7-892faba7e9b8",
                    "control-id": "ac-6",
                    description:
                      "Active Directory access administration tools provide automated role based access. Access is granted to information systems based on “least privilege” in conjunction with a need-to-know basis.",
                  },
                  {
                    uuid: "1829d764-f0fb-4d57-af90-f0804cc4c98b",
                    "control-id": "ac-6.1",
                    description:
                      "Active Directory is used to grant personnel access to designated and restricted security groups that prescribe which components a user can access.",
                  },
                  {
                    uuid: "114154a4-3f02-4db6-ae77-df44fdc2f306",
                    "control-id": "ac-6.2",
                    description:
                      "All user functions are conducted with application specific accounts or domain accounts managed by Active Directory.\n\nOnly individuals in the Active Directory admin groups are granted access to security, system configuration and IAM related functions.\n\nActive Directory workflow is used to grant Splunk personnel access to the audit system.",
                  },
                  {
                    uuid: "0c438a53-a333-4487-b964-c41a57e274c2",
                    "control-id": "ac-6.3",
                    description:
                      "Active Directory restricts permissions for network access and communications based on role.",
                  },
                  {
                    uuid: "d5040a69-072e-4830-a985-e591fc641512",
                    "control-id": "ac-6.5",
                    description:
                      "Users who require privileged access based on their job duty are added to the appropriate Active Directory role to allow elevated and privileged access.\n\nPrivileged access to GSS systems are enforced through Active Directory and defined roles. All privileged users are required to submit a security access request to gain any role or permission change. Roles are defined in the SSP. Privileged users accounts are maintained and reviewed for need to know.",
                  },
                  {
                    uuid: "c6d238a1-6425-442f-96e1-246896acfe88",
                    "control-id": "ac-6.9",
                    description:
                      "Auditing is performed on all login attempts by the Active Directory server. Any requests that a maintenance or clearance user makes is recorded in the system with a date and time stamp, along with the User ID. AWS actions are logged to Cloudtrail and sent to Splunk for review.",
                  },
                  {
                    uuid: "4d9a7373-2219-4a86-974c-506f0df4cc72",
                    "control-id": "ac-6.10",
                    description:
                      "Active Directory is set up to enforce Role Based functions. If a user account is not a member of an Organizational Unit or Security Group that allows privileged functions, the user will be denied access to that function.",
                  },
                  {
                    uuid: "011f5c00-41bc-4186-b736-262de98130cb",
                    "control-id": "ac-8",
                    description:
                      "CMS Cloud provisions Active Directory settings that display the approved CMS system notification upon logging into the system until the user exits the notification.\n\nApplication teams are responsible for ensuring their Windows instances are joined to the CMS Cloud Active Directory.\n\nThis service displays a CMS standard system use notification prior to accessing CMS applications. The CMS approved banner must be agreed upon prior to access to the infrastructure or application. Additionally the application displays a warning message once the user has been authenticated.\n\nThe AWS user notification/ warning banner is displayed prior to VPC access and must be acknowledged before accessing the environment.",
                  },
                  {
                    uuid: "ba65ecf0-65d7-4e89-b5bd-4fda3d02f728",
                    "control-id": "ac-11",
                    description:
                      "CMS Cloud provisions Active Directory settings that implement inactivity session locks of not more than 15 minutes\n\nApplication teams are responsible for ensuring their Windows instances are joined to the CMS Cloud Active Directory.",
                  },
                  {
                    uuid: "3f09c645-b68d-4703-874e-6ad0d978212b",
                    "control-id": "ac-12",
                    description:
                      "CMS Cloud provisions Active Directory settings that implement inactivity session locks of not more than 15 minutes\n\nApplication teams are responsible for ensuring their Windows instances are joined to the CMS Cloud Active Directory.",
                  },
                  {
                    uuid: "06178a32-e817-45b4-bba6-cd9095433685",
                    "control-id": "ac-17.4",
                    description:
                      "The GSS production environment is only available from management zone virtual machines. In order to access the management zone, an elevated access Active Directory account must be used. Management zone access is permitted for service and application administrators to perform regular maintenance.",
                  },
                  {
                    uuid: "2e49b375-ce72-47b4-b2df-6a90ac244f6e",
                    "control-id": "au-6.1",
                    description:
                      "Active Directory reports are generated daily and weekly to be reviewed by security.",
                  },
                  {
                    uuid: "f7d3b5dd-2c44-4b2f-8536-c8b7016ced72",
                    "control-id": "sc-2",
                    description:
                      "RBAC is defined within Active Directory and AWS security groups. Based on the role of the privileged user (e.g. System Administrators, etc.) only these users can access system management functionality.\n\nThe system logically partitions GSS applications and data (including PII and PHI) using Access Control Lists (ACLs) and Active Directory access groups.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 17,
  },
  {
    id: 61,
    title: "aws",
    description: "Amazon Web Services",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "1c506cea-7d8c-4c9f-b300-bce1e3b1341c",
        metadata: {
          title: "aws",
          version: "unknown",
          published: "2022-04-13T01:22:58.146983+00:00",
          "last-modified": "2022-04-13T01:22:58.146990+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "3415c6e8-4f65-41a5-bf72-3b139fc69069",
            title: "Amazon Web Services",
            description: "Amazon Web Services",
            "control-implementations": [
              {
                uuid: "26ad64be-15b3-4e09-903a-e32f1921a462",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "1371c4f9-407c-416d-9196-15602ee36fb0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fc4700fe-2f46-47a8-aa62-ab121d75c2d8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d5a2585d-b2f6-4d9b-8f7b-79430f6d8a97",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-1",
                    description:
                      "CMS Cloud is responsible for an Access Control Policy covering GSS Accounts.\n\nApplication teams are responsible for an Access Control Policy covering all application related accounts.",
                  },
                  {
                    uuid: "8a93bcc4-d9c3-4466-b630-1f6ea3bf932b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "62d48a57-deec-4d9a-b0f9-97523a20d604",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9028a66e-5760-47ca-8a8e-faaf80bdac61",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "d0ae18c2-9458-4b71-9e73-729b87300b29",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "04522c50-cc7f-427f-8930-6abf20cbb708",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7e7ad5dd-1e07-4993-b2d8-c185f91b5576",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.1",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "cea210d8-178e-4532-9fef-5d4a03c91682",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e0d7b8b8-d1e3-4638-ab76-16af62ceae35",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a36b0df5-1354-46f0-a48e-7bd94a1cf39d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.2",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "01cdf9b0-c030-453b-a063-f8d142c995cc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c9353c46-9144-49e7-bba9-7a802dc05862",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "bd073749-609c-4772-af57-14e7881d2eb1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.3",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "9c9d3f6b-a9d1-40f1-97a5-37a643667391",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0d78ec38-5911-4278-afe9-e474ca5c9f52",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a0315f19-1f81-4986-b95b-84a6ac36f08a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.4",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "eb4d6c22-20eb-409c-b52e-44acfcbe1fbd",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2b70d228-ec19-43e8-ad95-88a4fb3c57cf",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "6742bc97-8d24-4b28-a2b7-6652de74b38d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.9",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "a3aa047b-6eea-4242-9d05-61974eeea395",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9185e8bb-5dd3-4ad9-9066-3f65b9cf75cc",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "1cae4952-f990-4757-b282-b1bbb1f8b810",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-3",
                    description:
                      "CMS Cloud is responsible for enforcement of GSS Service Account and GSS System Account access mechanisms.\n\nApplication teams are responsible for enforcement of application access mechanisms.",
                  },
                  {
                    uuid: "2696b2c4-398b-4ed1-be69-daecb7e98bab",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "602e342d-7712-45e7-8eb1-5052768c261d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5fc4e84b-23c8-42ba-acf9-a508ea385f28",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-3.9",
                    description:
                      "CMS Cloud is responsible for enforcement of GSS Service Account and GSS System Account access mechanisms.\n\nApplication teams are responsible for enforcement of application access mechanisms.",
                  },
                  {
                    uuid: "9872de6d-fbbb-4f4e-9bfc-dce543402e42",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "042956b7-daee-4fd1-9017-61e5b32482c6",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "32e10e76-cbd4-495f-8be7-2ced841afbba",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-4",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products.\n\nApplication teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "bdaeae69-d36e-4bae-b227-f5e4652ad151",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d4e5de14-9ebb-42b0-a518-c3ba1fd183a3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fd463c0f-32bc-4a88-abe2-61ee8b00f547",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-4.8",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products.\n\nApplication teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "323b5b5c-ceef-4bc7-afb1-5be3a56c7594",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e2b1eecb-0398-4e95-9513-a69cade06319",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0f2a3e72-f721-4a23-81f4-3956693a0b76",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-4.12",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products.\n\nApplication teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "2f4bfa6a-eb04-4ccb-9d52-33e0869ac521",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "12363273-2a99-4ca7-bdbc-cc68a8eafda1",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "34e19d23-ec16-4339-a238-a06466b38b5d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-4.15",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products.\n\nApplication teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "a3ee5746-77f0-4c24-b20a-993f905dc96c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fa9309b1-9a19-4207-9188-67316c646dbc",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2133c064-6b02-42da-8594-e845026a09c9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-4.17",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products.\n\nApplication teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "308633d3-6db9-4916-a927-d983fcca9ee2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fa12166b-6f7a-44fd-ab8f-1e873aaabef7",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "87c0d481-c1fd-49a3-9026-bda37abf5dfa",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-4.18",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products.\n\nApplication teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "44208753-7838-48b9-8952-0d3779a9967b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "681c6d4c-44d4-45a2-8891-c8d2687f378c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5d7a4b0d-40c4-4156-b247-35a6e92528e3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-5",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "3090ec05-fe8d-4601-8747-013539290616",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f3584a50-5974-441b-8df9-b19847d2efb9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "e51f85cc-fc1d-4221-999d-90ebc0aeac79",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "e7f7a2f6-b836-44f0-90a1-6fa0a63b4d07",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "cbc0bca9-c399-4232-ab9c-d169fbf3c663",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "aacda2cc-dcbc-4b6a-9f8f-aa2c7be1300a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.1",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "264494d9-4d52-419a-8904-6fec2419bf75",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1c40b389-396f-47c0-a26e-31030fd526f0",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "aa865a78-23ef-43f9-87b4-6a27eecafe0c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.2",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "6bcd1715-b8e6-48c1-987f-554acf2eef0a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a259961f-1ae4-4ec7-b88d-8a258f5cf670",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4721dc75-7881-4ec0-8be0-4bb9b28952dc",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.5",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "27534c1a-b695-403f-b65a-055f44fd3d9a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "075d1bcb-8c4c-4b49-80fa-aa2bd14bd5f3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "35c25c68-a464-4bcb-b3d8-080cebb0fe43",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.7",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "6fb09f93-ebed-418b-949c-985a9e6fd113",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "87c281b4-b54b-46b1-b63c-b6232b156402",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "bcc9fca6-04b2-4185-a185-d8cd472752de",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.9",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "d33aeaac-fe48-4406-b961-4053adbf1ab8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fdd642e1-03ff-497b-8eec-723798d10730",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b46c5720-bd2e-4060-8d33-0c875f286536",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.10",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "766254dd-ace7-48d8-838f-6e7914cac271",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "af07eb4c-3683-439b-93a7-871770478bb0",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "869cc805-4f2b-4752-a7ef-9d6ab9cc8598",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-7",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "2f895e82-9f4f-4485-83d0-b419eaac3b41",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "dbd0d5d5-5dfa-40e3-a31b-051fb8754e66",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "77aaa7df-fb04-4485-a708-e1b2113c4bf2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-8",
                    description:
                      "CMS Cloud provisions Active Directory settings that display the approved CMS system notification upon logging into the system until the user exits the notification.\n\nApplication teams are responsible for ensuring their Windows instances are joined to the CMS Cloud Active Directory.\nCMS Cloud provisions Gold Images that display the approved CMS system notification upon logging into the system until the user exits the notification.\n\nApplication teams are responsible for not modifying that setting.\nCMS Cloud provides a check in the Inspec profile to ensure that systems are configured to display the approved CMS system notification.\n\nApplication teams are responsible for ensuring any findings from this check are remediated.",
                  },
                  {
                    uuid: "45893848-a2b6-4777-930d-ec5bad0f3696",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5c6b2fc2-76ee-4f05-b605-b1ee47f16b0c",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "93d6c438-a9ce-4da1-acb8-c63d8fcf1c6e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-9",
                    description:
                      "CMS Cloud provides a check in the Inspec profile to ensure that systems are configured to display the approved CMS system notification.\n\nApplication teams are responsible for ensuring any findings from this check are remediated.\nCMS Cloud is responsible for notification of last Operating System logon if Application is using Gold Images.\nCMS Cloud is responsible for implementing a compliance check for notification of last Operating System logon",
                  },
                  {
                    uuid: "bd7389d7-49a6-4e24-8e87-d8b6bac77307",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6d371321-eabf-46ba-9df5-f52f72672b93",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "f64d3270-b39f-4c19-98af-ee8eae667acc",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-9.1",
                    description:
                      "CMS Cloud is responsible for implementing a compliance check for notification of last Operating System logon\nCMS Cloud is responsible for notification of failed logon attempts if Application is using Gold Images.\nCMS Cloud is responsible for implementing a compliance check for notification of failed logon attempts",
                  },
                  {
                    uuid: "217e18c3-7d7c-4439-ac4a-0beeee8b5bec",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c2c9e2a9-9b37-4492-b54e-90365de99b42",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "37747ae4-dfc1-42aa-88bf-109a13940798",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-11",
                    description:
                      "CMS Cloud provisions Active Directory settings that implement inactivity session locks of not more than 15 minutes\n\nApplication teams are responsible for ensuring their Windows instances are joined to the CMS Cloud Active Directory.\nCMS Cloud is responsible for GSS Service sessions and GSS System sessions.\n\nApplication teams are responsible for all application related sessions.\nCMS Cloud provides a check in the Inspec profile to ensure systems are configured to lock a session after no more than 15 minutes of inactivity.\n\nApplication teams are responsible for remediation of findings.",
                  },
                  {
                    uuid: "88719c50-7b90-45f0-b8e8-e60a9a9f0f30",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4af5fe02-88db-48c4-944a-3eafaccda888",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0f9937d3-d93c-4f3b-84f3-8669e3bd8c0f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-11.1",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions.\n\nApplication teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "538e4bd0-0820-4bf3-bae7-0cad38a212a9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b851257e-84b1-4e18-9454-0768626c051c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "179e5daf-89ae-44b1-8677-2d1e06a2e907",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-12",
                    description:
                      "CMS Cloud provisions Active Directory settings that implement inactivity session locks of not more than 15 minutes\n\nApplication teams are responsible for ensuring their Windows instances are joined to the CMS Cloud Active Directory.\nCMS Cloud provisions Gold Images for Linux and Windows to initiate session lock after 15 minutes.\n\nApplication teams are responsible for not modifying that setting.\nCMS Cloud provides a check in the Inspec profile to ensure systems are configured to lock a session after no more than 15 minutes of inactivity.\n\nApplication teams are responsible for remediating any findings on their systems.",
                  },
                  {
                    uuid: "27d90fca-44bf-44b0-8722-bc0d6154e42f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6df0c23f-6cdb-4b5d-8cea-26c9717e0d2c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ad497df6-e0bb-4046-9f95-9f19d5b2d094",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-14",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions.\n\nApplication teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "7a3356a1-a7aa-4363-becf-a0c98fdfc69a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3db66d17-a38b-4a71-80c6-c0bb88b68f52",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a6329b86-80d4-404d-8774-f7527011c702",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-16",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions.\n\nApplication teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "35a995a2-5f1c-48b4-ae0b-72f4896b7bd8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "01322740-ef2d-41fa-b677-7bf7e4b92b95",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c3c91260-9284-4cb1-85e3-9bab0b3a5c56",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-16.3",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions.\n\nApplication teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "5b5a691f-3ce5-410c-833f-0b20221974e6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ecb301d1-e5a5-4ca4-8931-e8b6125b184c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "772ad1da-f2f9-4a06-862a-0025a7183592",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-17",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. All VPN access is authorized through EUA job codes which are approved by CMS authorized approvers.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud provided Cisco Umbrella DNS-layer Security is enabled on the Cisco ASA instances to protect CMS remote users from visiting compromised/malicious sites and helps keep CMS Cloud resources secure.\n\nApplication teams are responsible for all application related sessions.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "5b3f5c8e-8d8a-4391-8c83-f1fe7fcf2445",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fbd0ef48-ee0f-4b10-94ee-b02a82af4f05",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d7d59c05-6bdb-47ec-8bc1-69b50352684f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-17.1",
                    description:
                      "CMS Cloud is responsible for real-time monitoring of GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.\nCMS Cloud is responsible for GSS Service Accounts and GSS System Accounts.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "3e178859-e1e6-4761-a62a-2edc0da92668",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5d3d71f0-f7dc-4a6b-9c61-97e71dd49c9d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "97331ee9-8558-4908-bf85-0993deb88c46",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-17.2",
                    description:
                      "CMS Cloud is responsible for the Cloud VPN.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "674de264-8811-42aa-be31-8332e411e0d8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0af2b330-7789-4fe1-8cdb-3a8d96058cc9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7a20b714-f0e6-45f0-b201-3087ca7f2bc1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-17.3",
                    description:
                      "CMS Cloud is responsible for management and control of the Cloud VPN.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "f043a59f-b487-45c2-ad89-0d3f1b2864e9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6d84bd2c-6eb5-4fcc-9cb9-446b49a0e72a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "97fe0e37-e4fa-4d7d-814c-33b54140c65a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-17.4",
                    description:
                      "CMS Cloud is responsible for management and control of the Cloud VPN.\n\nApplication teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "f08118c0-cecd-4fe1-8202-09c72f5aef74",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "dc66a9a4-474d-4cfb-a0be-a068fddd7adb",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "050c85cb-1631-4b49-a50f-5282ffdafb7a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-22",
                    description:
                      "CMS Cloud is responsible for displaying a warning banner that is publicly accessible.\n\nApplication teams are responsible for all other publicly accessible content.",
                  },
                  {
                    uuid: "0c01c665-04fa-4fb8-800f-7a6f21693180",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c7056b33-6bce-4730-852f-44556cd508f5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a9f38932-e418-4c47-998f-a16055e8b6fa",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-1",
                    description:
                      "CMS Cloud is responsible for an Audit and Accountability Policy covering GSS Accounts.\n\nApplication teams are responsible for an Audit and Accountability Policy covering all application related accounts.",
                  },
                  {
                    uuid: "584c3dcf-c899-4bfb-bc85-7e31e3daf046",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4f44e764-8034-4629-8097-e1dee1e8a47f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "41fd5929-b9bd-41ba-8a7e-a3e036461e72",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-2",
                    description:
                      "CMS Cloud is responsible for determining GSS Service and GSS System events to be logged.\n\nApplication teams are responsible for determining Application events to be logged.",
                  },
                  {
                    uuid: "284dc095-2909-492a-b364-a1d6e3602df6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9b7f1cbe-e861-4962-93c3-d39a808089ab",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "de0fa462-455f-4abc-aecf-003ebe638d91",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-2.3",
                    description:
                      "CMS Cloud is responsible for reviewing GSS Service and GSS System events.\n\nApplication teams are responsible for reviewing Application events.",
                  },
                  {
                    uuid: "a00d4f62-e636-4223-82ff-fbb4f4fa74b8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fb3ac3bc-1a09-4f51-a43f-10f0ace278bf",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "12768f60-b39a-4dea-98ce-7e6b1c4918c1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-3",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "d205f06c-3f35-4805-8612-229d93f6f5c6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "376119a8-0661-4690-ba73-ea4c0083ab37",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8d29b5d2-81c2-4a4c-add0-4737db3a68b6",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-3.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "4f136a03-1677-4e39-b987-3e3bdeafd695",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1c78c5a1-e8b2-43bf-9750-44c9d9cdf20f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f8060e40-9039-4fdf-96d4-0ada205cdb7c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-4",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Services and GSS Systems have the records have sufficient storage capacity.\n\nApplication Teams are responsible ensuring Application events have the records have sufficient storage capacity.",
                  },
                  {
                    uuid: "222f0fac-c26b-46db-a1d0-f28adc98b68c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "25b23d74-937b-450d-bbbb-fd478cf8126b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "85ccc0d1-403e-4ad6-9a02-c3f071dd1213",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-5",
                    description:
                      "CMS Cloud is responsible for responding to failures from GSS Services and GSS Systems.\n\nApplication teams are responsible for responding to failures from the Applications.\nCMS Cloud is responsible for responding to failures from GSS Services and GSS Systems.\n\nApplication teams are responsible for responding to failures from the Applications.",
                  },
                  {
                    uuid: "90f28062-d0ef-46b3-8fda-13666001ad01",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "51dbb8c2-10b3-4d75-b925-5fa2fbf793de",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "36170158-7cf3-41e0-8809-1274f561e8af",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-6",
                    description:
                      "CMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such as Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment.\n\nApplication teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.\nCMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such as Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment.\n\nApplication teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.\nCMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such as Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment.\n\nApplication teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.\nCMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such as Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment.\n\nApplication teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.\nCMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such as Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment.\n\nApplication teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.\nCMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such as Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment.\n\nApplication teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.",
                  },
                  {
                    uuid: "fe356ea7-c112-4ae4-bc62-f6f86971fce7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5527e67f-66be-4760-9ece-3c43e46d1b9c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "51c22c7b-4d4d-4417-a6b9-7589a2d8d1cc",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-6.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\nCMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "28e0e672-eed0-4f25-bdba-0e85e747e8b4",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ce4d96ad-d8b0-4c95-9f8e-d613bf9db35a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c2715556-a6c7-42ea-9669-7fbd146bc331",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-6.3",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "60fc994c-d8d0-4124-aa50-e48966857dc7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7dfa5a79-ec79-4c76-b28a-39fdda22865a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "1f346360-3e46-4645-84ae-66e235e2ccc5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-6.10",
                    description:
                      "CMS Cloud is responsible for adjusting audit processes from GSS Services and GSS Systems when there is a change in risk based on law enforcement or intelligence information.\n\nApplication teams are responsible for adjusting audit processes from applications when there is a change in risk based on law enforcement or intelligence information",
                  },
                  {
                    uuid: "30c99ddf-3aed-4d67-aef0-94d6a826d9ae",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1e12c34a-3850-4750-9171-1bf0d3a8e9ff",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "1b9d27e5-3dc0-4526-82a0-4601cc8910fb",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-7",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\nCMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "9724a7ca-fcd4-4611-8643-02f4883d62ff",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e0ab875a-7c1f-47d6-9585-13204f6004b0",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fd1a77f4-bf19-426e-90dc-7b7da8e0da0f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-7.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\nCMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "aad29937-60af-437e-81e1-4d7fa6aef649",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "37ff3480-9bee-4996-8cac-4fc20ccc48f5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "308eadc1-880c-4dea-b88b-53edcd746c3e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-7.2",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "aceb6bbf-c799-41c8-a796-7e2ee3d346fd",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "aef3fe4d-a807-4671-bee8-2e726b5f9f8b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "01d3eaf9-c9da-484d-b064-ca66954306c6",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-8",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\n\nApplication Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.\nCMS Cloud is responsible for ensuring GSS Service and GSS System logs are set up with time stamps.\n\nApplication Teams are responsible for ensuring Application logs are set up with time stamps.\nCMS Cloud is responsible for ensuring GSS Service and GSS System logs are set up with time stamps.\n\nApplication Teams are responsible for ensuring Application logs are set up with time stamps.",
                  },
                  {
                    uuid: "507dad12-b29e-481a-9cbd-ea4e62b3e8e2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a360087b-763d-4554-b1ad-eb0346cd8071",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "9be4ddc2-f530-48dd-a4b3-dd588788b66f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-8.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System logs are set up with time stamps.\n\nApplication Teams are responsible for ensuring Application logs are set up with time stamps.\nCMS Cloud is responsible for ensuring that the network time protocol is configured to approved time servers.\nCMS Cloud is responsible for ensuring that the network time protocol is configured to approved time servers.",
                  },
                  {
                    uuid: "452993d0-15ad-4419-bfd2-e7513dd4df79",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6278a2d1-8e2b-4c2f-92db-3c6986f21192",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "092e658a-e1a8-4d2d-9b3a-501ba5a399f0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-9",
                    description:
                      "CMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. This prevents unauthorized access and prevents modification or deletion of the log data.",
                  },
                  {
                    uuid: "1dd19916-cb2a-4612-9193-fce10a64986a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "149d3659-3318-4d1e-b0d1-0f2db167aced",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3ae645ec-4f5f-4f06-88ee-65c8ba3e9f83",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-9.4",
                    description:
                      "CMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. This prevents unauthorized access and prevents modification or deletion of the log data.\nCMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. This prevents unauthorized access and prevents modification or deletion of the log data.\nCMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. This prevents unauthorized access and prevents modification or deletion of the log data.\nCMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. This prevents unauthorized access and prevents modification or deletion of the log data.",
                  },
                  {
                    uuid: "a595612b-1862-431e-a6ab-9d7e06d7a220",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9f2fa23d-5892-4de7-85b1-72269f21b39a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c2c7b931-20bb-4fc8-bf71-a77721b409db",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-10",
                    description:
                      "CMS Cloud is responsible for ensuring that events from GSS Services and GSS Systems have means of confidently addressing an action to a user. This is accomplished with a combination of EUA, AD/LDAP, or local auth and/or combination of multi-factor technology. The account activity for this action is tied to the event in audit logs.\n\nApplication Teams are responsible for ensuring any activity with applications follow the same level of non-repudiation so that user activity can be confidently tied to a user.\nCMS Cloud is responsible for ensuring that events from GSS Services and GSS Systems have means of confidently addressing an action to a user. This is accomplished with a combination of EUA, AD/LDAP, or local auth and/or combination of multi-factor technology. The account activity for this action is tied to the event in audit logs.\n\nApplication Teams are responsible for ensuring any activity with applications follow the same level of non-repudiation so that user activity can be confidently tied to a user.",
                  },
                  {
                    uuid: "9960f588-8773-4e86-a12b-8ffc68f4e34f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0c1e2fda-52e5-4e58-9fed-190d9e5df89d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "6e3cda11-ba26-4283-a062-89f698b728c9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-10.1",
                    description:
                      "CMS Cloud is responsible for ensuring that events from GSS Services and GSS Systems have means of confidently addressing an action to a user. This is accomplished with a combination of EUA, AD/LDAP, or local auth and/or combination of multi-factor technology. The account activity for this action is tied to the event in audit logs.\n\nApplication Teams are responsible for ensuring any activity with applications follow the same level of non-repudiation so that user activity can be confidently tied to a user.\nCMS Cloud is responsible for ensuring that events from GSS Services and GSS Systems have means of confidently addressing an action to a user. This is accomplished with a combination of EUA, AD/LDAP, or local auth and/or combination of multi-factor technology. The account activity for this action is tied to the event in audit logs.\n\nApplication Teams are responsible for ensuring any activity with applications follow the same level of non-repudiation so that user activity can be confidently tied to a user.",
                  },
                  {
                    uuid: "d6cb8295-3a12-4a73-8c82-bf970107e2e5",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5459bb46-ddb3-4e4e-92c7-0cdcc92f4bcc",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "94b1e63e-4cb6-4063-8728-2f108fe023b6",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-11",
                    description:
                      "CMS Cloud is responsible for retaining the log information within Splunk for no less than 1 year.\nCMS Cloud is responsible for retaining the log information within Splunk for no less than 1 year.",
                  },
                  {
                    uuid: "a81af5d7-fb70-4885-b68a-d3da1112a0a0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4b95fd97-f001-4839-861b-f1839a692b1d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "60c8c999-3ec6-422b-8a38-6cec162dde5b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-12",
                    description:
                      "CMS Cloud is responsible for ensuring  GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.\nCMS Cloud is responsible for ensuring  GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.\nCMS Cloud is responsible for ensuring  GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.\nCMS Cloud is responsible for ensuring  GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "579d96f6-a78b-4b0f-9327-4b124772b481",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6b92d8b7-753b-420f-993d-a6d77b3db212",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "75d17fd5-7261-4b02-8fe5-cd60abaca02d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-16",
                    description:
                      "CMS Cloud is responsible for ensuring  GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "9c2d1887-f110-4cad-b147-07f9634322b8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "66f2003e-ca29-4f74-8caf-635819cf6318",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4875339d-9337-467d-8421-e3b8e1f7e78f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-16.2",
                    description:
                      "CMS Cloud is responsible for ensuring  GSS Service and GSS System events have the record components logged.\n\nApplication Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "cd004c52-347e-4436-bdf4-6c980a9098ac",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "89519a29-d84d-4dba-afa3-7d498ba65e8e",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "17a1fe29-4f84-42b5-be35-a53171e0d19d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-1",
                    description:
                      "Application teams are responsible for Security Assessment an Authorization policy covering all application related accounts.",
                  },
                  {
                    uuid: "bef07570-afe0-4de6-afcf-8cad5c1d7855",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0b792b79-7b17-491f-9adc-6f55ed6d7905",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9afd2eed-11b7-4405-a54c-8c9621036c25",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-2",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and GSS Systems.\n\nApplication Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "402c6dc1-788e-4955-8a91-727ef767df49",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8068e62b-bb28-493b-9e02-ad3f0a94914c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a85ca848-dce3-4480-8a2e-31a10f89d435",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-2.1",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and GSS Systems.\n\nApplication Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "3b6b4e09-86a7-4e20-b365-e942b7b09c26",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3b96f1f0-68fa-4f9b-9af8-ced88a401b74",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7656a74c-62cf-4e62-a16f-a7e91beb23a5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-3",
                    description:
                      "CMS Cloud is responsible for authorizing interconnections supporting GSS Services and GSS Systems. \n\nApplication Teams are responsible for authorizing connections supporting applications.",
                  },
                  {
                    uuid: "c3da3381-c506-4919-91f6-664e1027dc77",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "19e00e48-620f-405d-8a29-f339968f737d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4c3ae2ec-f983-4399-8f16-7061750bdebf",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-3.3",
                    description:
                      "CMS Cloud is responsible for authorizing interconnections supporting GSS Services and GSS Systems. \n\nApplication Teams are responsible for authorizing connections supporting applications.",
                  },
                  {
                    uuid: "407f097c-a98a-4235-9c72-e50e1861039d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7049e317-bc31-4c4c-82a4-588e76afa1d3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "1773ae67-523d-4bda-8075-fd14210b134b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-3.5",
                    description:
                      "CMS Cloud is responsible for authorizing interconnections supporting GSS Services and GSS Systems. \n\nApplication Teams are responsible for authorizing connections supporting applications.",
                  },
                  {
                    uuid: "27ee9922-203b-42e8-a0bb-728abcdf8011",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9ed9fc72-55e0-4f93-a15f-653bfe96be96",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "bdc23db4-3b73-489e-82f7-3caa4b895be3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-5",
                    description:
                      "CMS Cloud is responsible for maintaining POA&Ms attached to their FISMA boundary.\n\nApplication Teams are responsible for maintaining POA&Ms attached to their FISMA boundary.",
                  },
                  {
                    uuid: "21d4e679-21e6-4fe3-a1f3-db7af99492d0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fa2a940a-1d19-4ede-85ad-53e669926a20",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0a493005-3cbe-42ea-955f-c80b457cc167",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-5.1",
                    description:
                      "CMS Cloud is responsible for maintaining POA&Ms attached to their FISMA boundary.\n\nApplication Teams are responsible for maintaining POA&Ms attached to their FISMA boundary.",
                  },
                  {
                    uuid: "97fdba90-40cc-4377-8287-be9b27edfd8d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ff569e00-d080-4177-89f5-dbff49e5d016",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3558dd9b-89e2-4ad3-b474-4e38a3217883",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-6",
                    description:
                      "CMS Cloud is responsible for obtaining and maintaining an Authority to Operate for GSS Services and GSS Systems. \n\nApplication Teams are responsible for obtaining and maintaining an Authority to Operate for the Application.",
                  },
                  {
                    uuid: "7f01783c-fea5-407b-90d5-b0d3ece7edc5",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c2585c48-f446-4aae-835f-d05284c44371",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a45f9606-193f-4958-a20f-81535e05748c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-7",
                    description:
                      "CMS Cloud is responsible for developing and implementing a continuous monitoring strategy for GSS Services and Systems.\n\nApplication Teams are responsible for developing and implementing a continuous monitoring strategy for the Application.",
                  },
                  {
                    uuid: "e002f826-f1ec-4af1-af7d-0cb742afa141",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "eb620a50-7014-43e2-8cee-5ffc1ea0806b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d1455a96-04c6-4eb7-9e89-d9cae7504943",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-7.1",
                    description:
                      "CMS Cloud is responsible for developing and implementing a continuous monitoring strategy for GSS Services and Systems.\n\nApplication Teams are responsible for developing and implementing a continuous monitoring strategy for the Application.",
                  },
                  {
                    uuid: "58134deb-a193-4252-bdea-4f17ab758f47",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8d422c2d-6886-4050-bb13-37a3f4635080",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8b5b073b-ebea-4821-b114-ef16a5abe1aa",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-8",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and Systems.\n\nApplication Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "d8d90adf-1406-46fd-affa-5fdc5c8716b2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "861e783a-1e2b-4d9c-a601-78dd7cedcdbe",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9c5af94a-b014-4129-b374-65cb45e37685",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-8.1",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and Systems.\n\nApplication Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "afbd8654-5503-4dd8-8191-8e47b1d2b4cf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0f3c4cca-332a-4822-9376-2469606b2aa0",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3cc3ea9c-70c2-454b-a474-2b898262d733",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-9",
                    description:
                      "CMS Cloud is responsible for defining components for GSS Services and GSS Systems. \n\nApplication Teams are responsible for defining components of the Application.",
                  },
                  {
                    uuid: "f6a1b063-bbe3-462d-a9c9-6dbb9ebe7e13",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "11d800a7-d81a-4934-be08-8a7c1dbd497b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2ea67617-57a2-4107-b7f0-567f93a7800d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-9.1",
                    description:
                      "CMS Cloud is responsible for conducting compliance checks for GSS Services and GSS Systems. Application Teams are responsible for conducting compliance checks for the Application.",
                  },
                  {
                    uuid: "01c1bbd4-1b3f-4c0a-95f9-d09f03da5793",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "654aee15-1f66-488e-8dda-b2507f100b91",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "38f5b721-bde8-4c9a-b80d-2088d972133e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-1",
                    description:
                      "CMS Cloud is responsible for a Configuration Management policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Configuration Management policy covering all application related accounts.",
                  },
                  {
                    uuid: "bad4f28e-6eaf-4396-8085-e03830df5677",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b15a6757-a4ae-41a5-892b-f7457e758445",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "cf310c2d-fdf5-409a-9856-0306b498c785",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-2",
                    description:
                      "CMS Cloud is responsible for the baseline configuration of GSS Services and GSS Systems\n\nApplication Teams are responsible for the baseline of Applications.",
                  },
                  {
                    uuid: "0a9637b4-ca35-4893-9ce0-727ee779e4b2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c05e2d91-4afb-4e1e-ab10-0d54a78a14d8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7964ae1a-9ecd-428f-81fd-76cb8713ad30",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-2.1",
                    description:
                      "CMS Cloud is responsible for updating the baseline configuration of GSS Services and GSS Systems\n\nApplication Teams are responsible for updating the baseline of Applications.",
                  },
                  {
                    uuid: "cca0ff3b-c7de-4657-9dad-c67114048ece",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c2e9c1c1-2181-41ca-8839-2e9e66e51ce2",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f2d2e150-eb70-4cba-b9e8-0b25fabbd304",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-2.3",
                    description:
                      "CMS Cloud is responsible for the baseline retention of GSS Services and GSS System configurations. \n\nApplication Teams are responsible for the baseline retention of Applications.",
                  },
                  {
                    uuid: "53d36923-ff2d-4bd7-acb4-0b3a3f7df76e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "91d5f46f-f7a8-43f0-8f57-802e4453d4c7",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a4db0d88-8e41-4664-9676-9e960acab3d7",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-2.6",
                    description:
                      "CMS Cloud is responsible for the maintaining baseline configurations of lower (DEV/TEST) environments separate from upper (PROD) environments of GSS Services and GSS Systems. \n\nApplication Teams are responsible for the maintaining baseline configurations of lower (DEV/TEST) environments separate from upper (PROD) environments of Applications.",
                  },
                  {
                    uuid: "d6d57673-46f1-4002-8ac5-3ce8527e3841",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3b8fd70d-b8e5-47e6-be75-d881e9543098",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "98278eb0-14d7-4a6a-bffe-c20bc8b47713",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-2.7",
                    description:
                      "CMS Cloud is responsible for the maintaining baseline configurations of lower (DEV/TEST) environments separate from upper (PROD) environments of GSS Services and GSS Systems. \n\nApplication Teams are responsible for the maintaining baseline configurations of lower (DEV/TEST) environments separate from upper (PROD) environments of Applications.",
                  },
                  {
                    uuid: "5c0cd2ef-ca48-4654-9696-60fe12a31175",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6baba59d-e783-44e0-94d9-3a342d22b712",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b41468b7-586d-47eb-881e-00e5a9a9c9e1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-3",
                    description:
                      "CMS Cloud is responsible for change control processes for GSS Services and GSS Systems.\n\nApplication Teams are responsible for change control processes for Application changes.",
                  },
                  {
                    uuid: "d0fe196c-cf94-44ad-9005-c2f6acdd3c3a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "782f1320-b83b-464e-b6b5-610f0b9e15af",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b539dd59-d22d-44de-9701-6a6b2af28862",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-3.2",
                    description:
                      "CMS Cloud is responsible for change control processes for GSS Services and GSS Systems.\n\nApplication Teams are responsible for change control processes for Application changes.",
                  },
                  {
                    uuid: "4f05000a-1ebd-4b28-8654-b41e5f9cc487",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "50483948-16f6-45e2-a30a-9c8f576492b1",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3842eca7-f26a-46af-a271-965525dedd22",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-3.6",
                    description:
                      "CMS Cloud is responsible for change control processes for GSS Services and GSS Systems.\n\nApplication Teams are responsible for change control processes for Application changes.",
                  },
                  {
                    uuid: "0a88cf2b-f2c8-4160-b4e1-f5937bd0cd98",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e71b4c3f-63f6-41b7-8e4c-6cad47528c81",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "144b2550-f0b4-45f2-9184-802336b5b902",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-4",
                    description:
                      "CMS Cloud is responsible for performing a Security Impact Analysis for GSS Services and GSS Systems changes.\n\nApplication Teams are responsible for performing a Security Impact Analysis for Application changes.",
                  },
                  {
                    uuid: "cc22a0d9-476e-4cbb-a81f-e970c34b5db1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fc41fb13-4f45-4222-97d1-38fa2910df03",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "79bc5ccc-27d4-48be-af0d-284eed14a24b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-4.2",
                    description:
                      "CMS Cloud is responsible for validating security functions supporting changes are implementing and functioning as intended for GSS Services and GSS System changes.\n\nApplication Teams are responsible for validating security functions supporting changes are implementing and functioning as intended forApplication changes.\nCMS Cloud is responsible for validating security functions supporting changes are implementing and functioning as intended for GSS Services and GSS System changes.\n\nApplication Teams are responsible for validating security functions supporting changes are implementing and functioning as intended forApplication changes.",
                  },
                  {
                    uuid: "70956aa8-e1dc-4eb6-99fe-25999c23de1e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "edefe4cb-cf43-483f-8d95-4235e7e84045",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "31672456-f67c-4a57-a917-6407b6e70ce3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-5",
                    description:
                      "CMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods.\n\nApplication Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.\nCMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods.\n\nApplication Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.",
                  },
                  {
                    uuid: "05df56c8-9a9c-44bb-96db-3f8656dc133e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "17be62fb-30ff-4100-96a9-f0efdc25fec4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8cffcc82-3adf-4674-a6f6-fe353d475ab7",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-6",
                    description:
                      "CMS Cloud is responsible for the baseline configuration of GSS Services and GSS Systems\n\nApplication Teams are responsible for the baseline of Applications.\nCMS Cloud is responsible for the baseline configuration of GSS Services and GSS Systems\n\nApplication Teams are responsible for the baseline of Applications.\nCMS Cloud is responsible for the baseline configuration of GSS Services and GSS Systems\n\nApplication Teams are responsible for the baseline of Applications.\nCMS Cloud is responsible for the baseline configuration of GSS Services and GSS Systems\n\nApplication Teams are responsible for the baseline of Applications.",
                  },
                  {
                    uuid: "f9b2febe-2066-4a95-bdea-6961c5107ff1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ff7e8037-3d64-4ecd-9a48-0e21fe885edf",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "6daf7b41-387a-4538-9a89-4ae4ef43eaf9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-7",
                    description:
                      "CMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods.\n\nApplication Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.\nCMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods.\n\nApplication Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.\nCMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods.\n\nApplication Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.\nCMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods.\n\nApplication Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.\nCMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods.\n\nApplication Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.",
                  },
                  {
                    uuid: "dad4874e-1088-466a-9da1-6d656ea89192",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b186cab0-b8d0-4ddd-9c9f-ac3122ee8257",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "6da5d3a7-e550-48fc-ad09-90d8b510bf3a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-7.1",
                    description:
                      "CMS Cloud is responsible for review of GSS Services and GSS Systems to be configured to least privileged methods.\n\nApplication Teams are responsible for review of applications to be configured to least privileged methods.\nCMS Cloud is responsible for review of GSS Services and GSS Systems to be configured to least privileged methods.\n\nApplication Teams are responsible for review of applications to be configured to least privileged methods.",
                  },
                  {
                    uuid: "6365e9a1-ea9e-4fce-a9df-bf243b0f4a57",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b3b4b847-2420-4f30-b4ea-72905e808f5a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b5284c31-e9b4-4688-ada2-f722876f149f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-7.2",
                    description:
                      "CMS Cloud is responsible for configuring software associated with GSS Services and GSS systems that prevents unapproved usage.\n\nApplication Teams are responsible for configuring software associated with the application that prevents unapproved usage.",
                  },
                  {
                    uuid: "bca9b187-e6c8-4d0d-b5bd-c695bfaeb3c9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f331c82e-ae7d-43a2-9600-2d3204567a96",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "bac373b0-273f-4053-b03b-2684f6215c78",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-7.4",
                    description:
                      "CMS Cloud is responsible for restricting/allowing software by the use of whitelisting and blacklisting to GSS Services and GSS Systems.\n\nApplication Teams are responsible for restricting/allowing software by the use of whitelisting and blacklisting for the Application.",
                  },
                  {
                    uuid: "3ee13d57-ef24-472f-90ea-62071ad63ce2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2a0eceec-9966-4b11-837b-fc49b8c3be4d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "43240808-b0f5-4535-9018-791269f8ba51",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-7.5",
                    description:
                      "CMS Cloud is responsible for restricting/allowing software by the use of whitelisting and blacklisting to GSS Services and GSS Systems.\n\nApplication Teams are responsible for restricting/allowing software by the use of whitelisting and blacklisting for the Application.",
                  },
                  {
                    uuid: "1058f851-9dd1-4c6d-82d0-1eaaca2dd56b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d4ab3689-6806-4f9b-b116-cc186c748000",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "e0c9fa0a-2633-49c2-81cb-2b7eff2cef75",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-8",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories.\n\nApplication Teams are responsible for maintaining application component inventories.\nCMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories.\n\nApplication Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "be24385b-3341-422f-9f1f-b2ced63bd204",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7ddf9aec-cb8a-40f0-bcc7-49dab29a43e6",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "37a4b61f-34bb-4cfb-9454-271b7a2f8769",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-8.1",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories.\n\nApplication Teams are responsible for maintaining application component inventories.\nCMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories.\n\nApplication Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "093d49d3-67df-427b-b22d-60209987227c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b9208db5-f9c7-4d8c-92f8-731b05044d07",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3f55462d-deb6-45c2-a36c-22418a75be56",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-8.3",
                    description:
                      "CMS Cloud utilizes tools and monitoring to detect unauthorized components within the environment.\nCMS Cloud utilizes tools and monitoring to detect unauthorized components within the environment.",
                  },
                  {
                    uuid: "0a603c4a-4198-4549-8cf8-71050d9d678b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "21c617eb-929c-49de-b92b-779006a05cfe",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8c32a320-3558-4468-a835-466bb1fc3c4b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-8.5",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories.\n\nApplication Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "19841092-8aa0-493e-b30f-6234827c60b8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3af54d4f-ab89-46a7-b821-cc9761e27886",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "27046ab5-f7e6-4338-b54c-5a4ab4731ff0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-9",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service an GSS System configuration management.\n\nApplication Teams are responsible for application configuration management.",
                  },
                  {
                    uuid: "ea967bf3-2d42-4c02-9e25-811ae54239dc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "caec8b50-b299-46bd-af44-16e3eab215c8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "922df119-c678-4113-b4b0-f644567b7c5e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-10",
                    description:
                      "CMS Cloud is responsible for restricting/allowing software by the use of whitelisting and blacklisting to Operating System.\n\nApplication Teams are responsible for restricting/allowing software by the use of whitelisting and blacklisting for the Application.",
                  },
                  {
                    uuid: "7d5b7391-b858-4508-8e50-9a0928007c6e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bcc540e0-e10a-4809-816d-ab569233ce4d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "cb27a9d7-cef6-4895-b6eb-101751aeab01",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-11",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System software.\n\nApplication Teams are responsible for software relating to the applications\nCMS Cloud is responsible for maintaining GSS Service and GSS System software.\n\nApplication Teams are responsible for software relating to the applications",
                  },
                  {
                    uuid: "563e7b5b-7893-47db-a33b-ad1779bc195d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "24564ba7-e261-4705-99dc-8dc967038677",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "305708f6-6e7c-4fa0-b4f0-7bc4b487c9f9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-1",
                    description:
                      "CMS Cloud is responsible for a Continuity Plan policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Continuity plan policy covering all application related accounts.",
                  },
                  {
                    uuid: "677a076c-9ce0-4d7c-8ff1-655dacc6f807",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8de0b93b-9235-4d0b-8c85-3fd30a126645",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "83ce36ba-9337-43de-aaf6-99cc22f761d2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-2",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "b73b8db6-a8c3-40d1-ae6b-65b7a62092cc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "54e13e46-abff-45bf-89b6-c249cd359c1c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "40d191a5-fcf2-4ec7-84dc-626292c0e1b7",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-2.1",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "d508f45b-be61-46d3-bd8a-9c044c941ca2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b2d54f95-821e-4e4c-992c-136d4d54b724",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d25da3da-f456-41d4-8d34-452ed878d45a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-2.3",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "982152fd-1652-4314-95a2-02abe0baed0b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "01ab1f50-019b-4879-9e4b-2ca92db16938",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f6054fb6-0ff0-48b8-8bdd-4a119c819076",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-2.8",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "618c5466-1d25-45d6-951f-ec373b243d49",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "645a8eda-6abf-438f-ba1b-4b8bf983c495",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d819645f-896b-466a-81e6-0f5cbeb58262",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-3",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "1b6f4093-c4b8-49a3-ad97-ce15e82ad4fa",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "139f62b8-9c06-4876-bb67-cdbad1e83830",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d4b07e74-45a1-47cc-8bc5-8578909c828c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-4",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "e84698d1-b0ab-4b61-a04a-f61349b5d823",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "912e88d8-62ea-4cd5-9d85-49cda0ff8aa5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "23aac8e2-c28d-4782-b65a-7382f126238c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-4.1",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "5809889c-aa33-436f-8f93-2d3f1314b7eb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4c3ea47c-ef70-4253-b980-a4dd1f5604b2",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5170def7-b19c-4111-9425-b6b7d5ad8409",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-4.4",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "eb2b31ab-b52b-4f7c-962a-8146faf8fda6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3a3eb874-2a9c-4a03-8850-7e17cdcdbc52",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "611b9cb1-5be4-40c3-80ba-85f56d804786",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-6",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "7e76b146-4864-48ad-955c-ee828b710acc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b974a2b0-29a9-4775-acad-a341aa49b2e6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "562afaf5-04e3-469d-9b05-88f963142c2a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-6.1",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "af04eccb-5a8b-4b40-8112-a25151744bcd",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "622c4fc4-1728-4cf8-b787-a85a968d1914",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d1c7b8fa-fb3e-43ad-9ce6-d784fa04ef93",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-6.3",
                    description:
                      "CMS Cloud makes alternate sites accessible in the event of a disruption or disaster.",
                  },
                  {
                    uuid: "0fccc377-1c04-4a33-a874-3265bd71a385",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d6570ffd-6c6f-4e6c-a009-d6920abaac91",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "42730d52-d08a-445b-be29-ee71c22fcb0e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-7",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "d889c8cf-7ace-45b8-a79b-e91f5bdd27b0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b03d449a-ac4d-4f80-a367-af8ed6941b83",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "1cc4b8d9-6524-4b06-b32f-7b7442626d5e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-7.1",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "7d7f0800-d4e1-461b-aa1d-1353d2341046",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8b027fa9-bc56-43b9-868a-7e1cf008fb4f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "bf53d44b-f96f-440d-8bf4-cb6889552d1f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-7.2",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "11c47fb4-be06-4fea-b3f5-a2c19a510aeb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4c6c0f5c-d89e-4c31-a002-d225ff45154c",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "077c6483-fc11-4c87-ace0-873e58b34c8c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-7.3",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "f3747c4f-dd8b-402e-a9a3-8b351d8f766d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0ea8ef53-f14d-429b-b72b-3837842299c1",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "f9fdf86c-6d1e-4274-869f-c55648652714",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-8",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "b7b4ed6c-c76a-4300-a507-f1b40e3979c0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6cfdabd2-a7b4-47a3-a17b-e80c267f9f4d",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "93050b1c-0d71-44ff-b0a4-499b16c3564e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-8.1",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "59364e96-e87a-4391-835f-ef0e5d820276",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "05cf7c6e-6e3d-488d-9e40-fea3b2c0eff5",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "ba3821ec-fd84-4b04-8d40-206bdd12009a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-8.2",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.\nCMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "5b99d145-894d-4afa-ac98-bc94aac33ce5",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c8132f68-5763-496f-a451-e3c62bcd4dd9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d7ef7d1c-528a-44a2-b7a8-e0e180e99f18",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-9",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.\nCMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "b810d03e-12ce-4e7c-b274-8bf2cd4fb709",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6262a3f3-5432-4cb6-af0c-a09c43a66dee",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "e6996649-14b7-4e7a-994e-baa6d34d095e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-9.1",
                    description:
                      "CMS Cloud is responsible for testing GSS Service and GSS System information and accounts.\n\nApplication Teams are responsible for testing application information and accounts.",
                  },
                  {
                    uuid: "4de24699-da19-499c-bd4b-85959852c27e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6da56ce4-1f02-4ea4-814c-7cf4806837cc",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "549fb5e6-a960-4644-9c39-34cf55e5e31d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-10",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "36688ec7-bc52-40b8-8595-6f6a192fd111",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1f496ecb-c5d1-4d1b-803a-3a7b8ccaa2b4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a0d9c53d-7ace-4bfd-9b15-f136e4db1f23",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-10.2",
                    description:
                      "CMS Cloud is responsible for maintaining  GSS Service and GSS System continuity.\n\nApplication Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "23915fcb-524a-4acc-b281-0797ca3342ea",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fc3a735e-84c0-433e-92dd-ba226e3d1bfc",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "857aaf73-efc9-4688-b74a-4be2e49c9230",
                        value: "Yes",
                      },
                    ],
                    "control-id": "di-1",
                    description:
                      "CMS Cloud is responsible for a Data Quality policy covering GSS Services and GSS Systems. Application teams are responsible for a Data Quality policy covering all application related accounts.",
                  },
                  {
                    uuid: "f1741f19-30e1-4968-a16f-413d5e18e4a1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "983c4208-951d-4be8-ab32-99154c8fa8c0",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f70fdae7-1df4-43e9-a62c-cf132be9b6b9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "dm-1",
                    description:
                      "CMS Cloud is responsible for a Data Minimization and Retention policy covering GSS Services and GSS Systems. Application teams are responsible for a Data Minimization and Retention policy covering all application related accounts.",
                  },
                  {
                    uuid: "0e6f0511-002d-4224-9198-da917802ea9f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e0309e1b-ce94-40f8-8dd6-5a8edbaa30ac",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ac076031-0f27-40ce-a4d1-9408d5f002c9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "dm-1.1",
                    description:
                      "CSS identifies and removes PII or PHI that has been stored on GSS Services and GSS Systems in error. For example, accidental ingestion into Splunk.\n\nApplication teams are responsible for the location, removal, and reaction of PII and PHI within the application.",
                  },
                  {
                    uuid: "f94f24b2-e502-40f9-b0e8-8c01375f93f3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b3127742-220e-4bf1-8714-0adf6010b818",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "af0075f1-98e4-41fc-b0bc-e1a493361637",
                        value: "Yes",
                      },
                    ],
                    "control-id": "dm-cms-01",
                    description:
                      "CMS Cloud is responsible for a Data Minimization and Retention policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Data Minimization and Retention policy covering all application related accounts.",
                  },
                  {
                    uuid: "9c04827e-9387-4dc4-9ee9-a3d8d058fb74",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8db61824-b6ba-41ad-a5b6-812dd071b6a1",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c9c99661-ff25-4740-bc59-f169431ce884",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-1",
                    description:
                      "CMS Cloud is responsible for a Identification and Authorization policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Identification and Authorization policy covering all application related accounts.",
                  },
                  {
                    uuid: "3adcf494-c5bc-4c0a-a957-9d00bdd54922",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5d05ab61-7737-44c8-9d42-038926cebbcb",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4fc2ca90-102f-45bb-91ca-07cf460dadaa",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2",
                    description:
                      "CMS Enterprise User Authentication (EUA) is used to manage user IDs and other user profile information with credentials replicated to CMS Cloud Identity and Access (IAM) or local maintained user directories such as Active Directory. EUA User information is maintained until the person leaves CMS employment or no longer requires access to the the GSS.  Application owners are responsible for either incorporating EUA into their application or to fully implement a solution for this control in order to satisfy the requirements.",
                  },
                  {
                    uuid: "1b447afd-cc9c-422a-aa69-41e82ba64b3f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1ddbbd0c-e21d-49d0-b104-5e471dc3db84",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f9e18ee6-39da-4697-85ca-7b1b4fc7fe6b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.1",
                    description:
                      "CMS Cloud utilizes software-based authenticators that implement two-step verification using the Time-based One-time Password algorithm. End users are free to use any industry accepted software-based authenticator such as Google Authenticator, Microsoft Authenticator, Authy, 1Password, etc, as long as the authenticator is on a separate device from the device accessing the network. The CMS Cloud Cisco ASA VPN requires the use of Time-based One-time Passwords for all access.  Application Teams are responsible for implementing multifactor authentication mechanisms for privileged application accounts if needed outside of the Cisco ASA VPN.",
                  },
                  {
                    uuid: "a13302ca-58ce-4ba9-8f07-c49c78c08eae",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "049b8205-af2f-4d1e-9c85-1ea012e4815b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2e527bd6-871b-4560-b701-98e50d56f4d6",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.2",
                    description:
                      "Cloud utilizes software-based authenticators that implement two-step verification using the Time-based One-time Password algorithm. End users are free to use any industry accepted software-based authenticator such as Google Authenticator, Microsoft Authenticator, Authy, 1Password, etc, as long as the authenticator is on a separate device from the device accessing the network. The CMS Cloud Cisco ASA VPN requires the use of Time-based One-time Passwords for all access.  Application Teams are responsible for implementing multifactor authentication mechanisms for non-privileged application accounts if needed outside of the Cisco ASA VPN.",
                  },
                  {
                    uuid: "cd012f87-0231-45d7-bc6a-03194ad54048",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6c21a498-a4b9-4b3b-bd62-3e7b8fcbdb7f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a49b8239-944a-41bf-a198-0c6c52d81c57",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.3",
                    description:
                      "All CMS Cloud systems operate within a CSP and cannot be accessed locally. Virtual console access requires network access which is protected by multifactor authentication.",
                  },
                  {
                    uuid: "221f467d-f533-4ec3-9ecc-2e41783c2495",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bb9a0744-1808-4281-9f59-1a7410a05096",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8cfbbed1-8961-4ff0-8031-3c17ae2b0e86",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.6",
                    description:
                      "The CMS Cloud Identity and Authentication Policy requires that Time-based One-Time Passwords are generated on a device separate from the system gaining access to CMS Cloud systems. Application owners are responsible for enforcing device separation for any multifactor authentication mechanism that they operate for their application.",
                  },
                  {
                    uuid: "8fc3b4f8-3b5b-4507-bb09-65f976562b64",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7b1e8ea7-cbfd-4807-8180-c40edbc5fdf3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "89992fd3-8688-4073-bb8c-addf7c8652cf",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.7",
                    description:
                      "The CMS Cloud Identity and Authentication Policy requires that Time-based One-Time Passwords are generated on a device separate from the system gaining access to CMS Cloud systems. Application owners are responsible for enforcing device separation for any multifactor authentication mechanism that they operate for their application.",
                  },
                  {
                    uuid: "cc868e4b-8947-49bc-abe2-aaf9f564d1c7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "369fa827-4a54-4690-8ee6-4f9d5b94c407",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "19f5af86-e267-4c53-b643-6a0881c3f1b3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.8",
                    description:
                      "The CMS Cloud Cisco ASA VPN enforces the use of Time-based One-time Passwords for all access.  Application Teams are responsible for replay resistant mechanisms for network access to application-specific privileged accounts",
                  },
                  {
                    uuid: "8f7e197d-6659-41c7-b216-c2ceda6f7118",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d47e3155-9aae-4615-a8a9-f044ff102eb8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f05749e9-9013-48b4-8e69-e2dbd3cc773d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.11",
                    description:
                      "The CMS Cloud Identity and Authentication Policy requires that Time-based One-Time Passwords are generated on a device separate from the system gaining access to CMS Cloud systems. Application teams are responsible for enforcing this policy for any application-specific accounts.",
                  },
                  {
                    uuid: "14bd259a-b072-402b-be67-778d2489279f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ffad459d-183d-4967-90a6-12ab6570dfb4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fa81887c-6dff-4882-a573-c17733230162",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.12",
                    description:
                      "CMS Cloud systems do not support PIV credentials. Mitigating controls exist, including the MFA described in the IA-2(01). Application Teams are responsible for application-specific PIV credential use if implementing logical access control systems (LACS) and/or physical access control systems (PACS).",
                  },
                  {
                    uuid: "ed12707b-837e-4bbe-a852-16c56b22db0c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6c3504f7-e660-4b91-a466-3cf35dbe0afa",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "dec3362a-0d67-4348-9caa-9e1bebaad740",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-3",
                    description:
                      "Cisco AnyConnect Mobility (VPN) Client is used access to resources within the GSS network. Device authentication is implemented at the network access level. Application owners are responsible for any further device authentication mechanisms for connecting to their application if needed.",
                  },
                  {
                    uuid: "b2143b80-7e64-44fa-a5ff-7b6990aedae2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c023f9c1-3a7c-4c5c-ad2c-68b61b42b305",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "1c6708dd-cf64-4c30-8269-dc7903fa757f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-4",
                    description:
                      "Application Teams are responsible for identifier management for their application.",
                  },
                  {
                    uuid: "ebaabf9d-3d2f-4bfa-9cf8-9cb0bddd4f04",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4f0d4c94-4ad3-40cb-8a29-20bc7c135003",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7cd60cb0-b703-45cf-b1c9-f1f91e25ac9f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-4.3",
                    description:
                      "The CMS EUA registration process includes identity proofing mechanisms which are validated by business units via attestations or other mechanisms. A user's social security number is used to uniquely associate a user with an account in EUA. Applications which make use of CMS EUA for account management may inherit this control. Otherwise, Application teams must document identity proofing mechanisms for their application. The submission of documentation is the responsibility of the business unit, and the commensurate access granted to those individuals is the responsibility of the business unit. Reference: https://www.hhs.gov/sites/default/files/cms-enterpriseusersdministration.pdf",
                  },
                  {
                    uuid: "258b3659-3c09-46dd-94d8-344a14c4a4e6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "249147ed-3eb5-4295-8e11-4124b1290c1c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "baae1ff7-f1fe-4088-a2b4-be42097a0f8e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System identities.\n\nApplication Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "0cf99d55-5ca6-4010-84ca-2aee5061695a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2a09e3d2-ac9d-4008-a943-172393ac174f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c6101e69-e1ff-496b-b938-7236ef434b99",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.1",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System identities. Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "da4be3da-a99b-4726-ba15-2aabffae2132",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a4899093-1243-4f0f-bba0-76ffa02c5cb2",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f3c154ca-de84-4898-956f-ae72d14db7d4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.2",
                    description:
                      "CMS Cloud is responsible for the certificate management of GSS Service and GSS System components (e.g. ELBs).\n\nApplication Teams are responsible for the certificate management of application components (e.g. Web)",
                  },
                  {
                    uuid: "94a93221-54dd-4b82-bb13-ac8040908218",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b382deae-68a3-4cd3-98a0-a45cb0c84864",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "dda4f237-ec88-4a56-a904-2b9516cbfe34",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.3",
                    description:
                      "CMS Cloud is responsible for of GSS Services and GSS System multi-factor registration.\n\nApplication Teams are responsible for application multi-factor registration.",
                  },
                  {
                    uuid: "e5e907c0-9b70-4e08-bc10-721f8287d60f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0ce350c5-2ef4-4e3b-9f9d-c7b75e1cb8c1",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9569b633-bb94-428b-b463-0d7a0ae9f9a2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.11",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System identities.\n\nApplication Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "080bfcca-3331-439d-8ffb-20cf84b78c22",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0fc83c22-466b-408c-bbdc-1e092caeae6b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2bc6f870-d2e5-46b7-a18c-e617c55f0e33",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-6",
                    description:
                      "CMS Cloud is responsible for obscuring authentication of GSS Service and GSS System identities. Application Teams are responsible for obscuring authentication of application identities.",
                  },
                  {
                    uuid: "4a8934a0-7459-4c79-8dc5-776300cdab0f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1a872cb2-4a1e-44e5-968e-6ec6744cd843",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b4902f12-c59d-4d0c-bda9-13739eab3fd1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-7",
                    description:
                      "CMS Cloud is responsible for implementing secure and compliant cryptography (e.g. FIPS 140-2) within GSS Services and GSS Systems.\n\nApplication Teams are responsible for implementing secure and compliant cryptography (e.g. FIPS 140-2) within the Application.",
                  },
                  {
                    uuid: "ffd8b094-934c-48b8-97bd-315bb9120c34",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f8e61836-86ac-467c-b650-f6770554185c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "daca7453-8de2-42b9-b948-22e42efc476a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ip-cms-01",
                    description:
                      "CMS Cloud is responsible for a Individual Participation and Redress Control Family policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Individual Participation and Redress Control Family policy covering all application related accounts.",
                  },
                  {
                    uuid: "9a7736e8-1239-4a33-a634-ccfa708698d3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5c459f59-344d-41d5-a0f6-d491515dac3f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ecd0b541-0295-44bd-803c-5163bba81b3c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-1",
                    description:
                      "CMS Cloud is responsible for a Individual Participation and Redress Control Family policy covering GSS Services and GSS Systems. Application teams are responsible for a Individual Participation and Redress Control Family policy covering all application related accounts. CMS Cloud is responsible for a Individual Participation and Redress Control Family policy covering GSS Services and GSS Systems. Application teams are responsible for a Individual Participation and Redress Control Family policy covering all application related accounts.",
                  },
                  {
                    uuid: "cbcdd481-89ac-497d-9bc6-6a2e89582ef3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2eb08665-ddb7-459e-a233-176c0af3f4e8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "39b780a2-076d-4d3c-aaf1-46fd83704454",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-4",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "cf8ac703-dbc6-45b6-9fc7-bc3b1861f3c4",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fb194fab-31b3-41f0-8fbe-d047d7560c8c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "643fe89e-4ab1-4833-8f6d-20595bd97ffc",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-4.1",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "e3520fb7-7574-4d80-b983-d0071b53fe6f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "212ce654-1ded-4d77-8a86-c3946780a753",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b2352bc9-5882-472e-8a69-8ec7337cb250",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-4.3",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "8bbe64ff-fd61-4779-adb6-264c5026dfb9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "070d4d8a-e588-4528-8bac-b0969e8e2e10",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "e48ba46c-397e-4309-bd3a-ed83e5702e33",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-4.6",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "7edfd8ba-ae7f-4ccb-b6b8-4401563caef3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7ff78e62-085f-4066-b027-9fb4751f0c7d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9b615469-f1df-4fd9-8470-6e66542deb2c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-5",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.\nCMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.\nCMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "4b8691a7-63ec-4525-acb7-a0fe0667ddbf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "208a12bd-c2dd-4e91-bde8-333a2a160700",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0d5c5b23-a1df-42dd-9921-7f3cc5c56d91",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-6",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "fa4737fa-2958-471d-b892-6d347a1fef96",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9d87ca99-ff3d-408d-a5db-bfe6f79ac507",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f6809409-07aa-41c0-b350-a38830822c98",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-6.1",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.\nCMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.\nCMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "f5f9bdc5-e8b3-441c-9528-91261bda4a9d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "dcdf7958-e5b4-41fa-952b-91654b369a8c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9d7f537e-9274-4cf8-9fdb-4f9e8e83402e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-7",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "44d4f9e0-54c7-48c0-b9e5-27bc7a0c3a63",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8a6543e6-53de-4479-a8ac-3ea955f9bc05",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "21e2253b-c9ee-4152-ad88-1e21cd084f9d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-7.1",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.\nCMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.\nCMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "76b0967b-27e0-495a-b017-bd7f31425d04",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "427f7dd5-b9a2-4cab-9998-5b39eef2b660",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "af88b2b6-f040-4ac6-9d14-f6fd82b82fcd",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-7.2",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "75bb54fa-2966-4eb0-a60d-1de824291bc7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e5388b2c-e03e-49a5-801d-d6611661d716",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3c9af8ad-18cd-440b-a13a-c9f9c6bb9056",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-8",
                    description:
                      "CMS Cloud is responsible for a Incident Response plan covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Incident Response plan covering all application related accounts.",
                  },
                  {
                    uuid: "671e8119-a70b-4d80-85e9-f0cfeab0fdca",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4b1af6e0-a397-4694-930f-cbe54c825bc9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3724db64-ad5a-4a71-9789-90f6d81f93e3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-9",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "6174cefe-36b9-4010-880a-14ff01856bd0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1539f781-b01b-4703-8083-187036800d8d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8eac8781-7323-4f5a-9948-771dbd6aea8f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-9.3",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "49c7e23c-1a46-4284-ad87-b8cca79186db",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "795441b8-439e-4b60-8c22-0df28ae9e1ff",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "e435ac34-2d76-4d7a-a65d-545d3860ceb0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-9.4",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "8ac973f6-035e-4aa2-a1de-bdebd5542ad6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d2105591-33d4-4b71-ba75-fbe203631e2b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "825057d3-c986-4bc1-a903-c691a93de901",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-10",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems.\n\nApplication teams are responsible for handling incidents when the incident involves the application.\nCMS Cloud is responsible for handling forensics of GSS Services and GSS Systems.\n\nApplication teams are responsible for handling forensics of the application.",
                  },
                  {
                    uuid: "078ec4e1-f36b-4584-bc9e-b645cf1904c2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "18668951-4da3-4ba9-82f7-c856ab2ce144",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "84b7ba69-a7a0-4a9f-89cd-08a2020ea2a6",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-2",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "fdf2140f-1795-4bbb-b79f-450035980296",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "26ad6501-f35f-45e9-8d22-248cb7bb704f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "b22ce139-2e95-4d6f-b669-68fad0708026",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-3",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "64d78083-67d0-467b-be8f-31f661cc9ae3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9afef4f2-8c06-4e17-8a9f-9d012e4f068e",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "6a0ace67-065c-4af5-b353-7f31c1e9f16e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-3.1",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "e97d8ec2-d302-4332-ab6a-7c9ab2590d8e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b58de503-5a55-462e-8f07-9f0629795bad",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "6741ac9f-5dd5-4a35-baaf-aaf8203eedd6",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-3.2",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "b9e94fab-ee42-4d57-8c2e-02a2629edb63",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "829b5611-0ec7-4542-a91e-33e192225906",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "a2aaff6b-17d3-4a43-a5b5-447074ee5a1f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-4",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "9242b990-1e06-44d1-af6f-5d7178a0ab0d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "108282a2-80c8-4b8a-9166-ead6cafe4b2b",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "c11a84ca-5652-421b-89f9-ade9080324bf",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-4.1",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "e5282ed9-10af-491c-bd3f-156463befadb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2aaaa022-c392-4709-9d59-2fa4131d62d6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "4c5891d2-a92b-4203-a692-25d440d4dad9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-4.2",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "b2758784-8b24-4c43-8955-146876c8cae7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d34b982d-f40b-4993-969e-ef7ece8551f6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "176d5f2d-5902-401b-9877-5fc49aef307e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-4.6",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "b5149bb3-e41a-49ac-bbe6-1479c389ad2c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "080f15b2-c127-4c28-8bf4-5b5bf682f7fb",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "e8c67ead-0625-4fdb-b4b0-0570705e2359",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-5",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "9ccd1491-c098-4285-b2b4-31c53dbbe4c7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "02f0a118-a9c2-4658-8942-1898a52bb197",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "ee8362a6-750a-4215-ad39-2975ebd55c76",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-6",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "175b33b6-1c48-4762-bb21-b487b674ebb4",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "df2a07fc-f6c5-4d1e-988a-ec667e6c695a",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d89c37d9-a93a-4e14-9e15-22baec883d71",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-2",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "cc5c9f56-44d9-4163-be9c-e93600a91fad",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "887e84a4-7a63-417e-b419-a586bb804cd5",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "517653d7-1783-410d-92f8-12166bf80320",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-3",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "a7ba3965-7875-4b02-93b9-5cabbc8eb975",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fec89c99-977b-4df4-b346-d7d7945d7cdb",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "8a1a4124-dca7-4a17-b982-518d49558852",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-4",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "ea2245e5-45d6-4a70-bc19-91c2e6c589ed",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7fab8665-8bc9-41bd-80e0-0791809c08bf",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "07ec1638-229a-4cd7-b2b5-f97eac5d94d4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-5",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "7bec4560-e34c-4844-ba3f-e06e898fd95e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "78fcfbc8-1924-4bd9-9630-bda3343532f9",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "5b4f4783-8715-4e9d-888c-bb657123fd8a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-5.3",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "6ca833ae-8fd9-4483-abbd-5b701f0c56eb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "642e3fcf-50db-4993-b0a3-32bca5dce5a9",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "7a2ade8f-7b3a-418f-8e17-d16e69022241",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-5.4",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "f4bf0b53-8558-4887-a917-c5a3fd21110a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fe567260-415d-4311-9b97-91aaf98249cb",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "e6ad665e-1454-417b-a7a8-6dc347b00c3c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-6",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "0e38ea87-a78e-4678-8747-5a715c3d24eb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "23c41a3b-5e6a-4c70-bfbe-830fb601698d",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d6012ab5-6ed5-4c38-864c-a8e65bc4af6f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-6.8",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "4fee3033-b3ac-483b-95f4-0f5b0c243730",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ad816ba5-c4db-46a2-b84c-8cad6e57524e",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "2ec743ee-7828-411c-ace0-113f52438453",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-7",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.\nCMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "899688a8-97b7-496e-b405-c5288f037c19",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "33ef5e57-af49-4494-a100-debd24df650d",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "415948b3-a06f-4ccd-b9d5-34c9492ece43",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-7.1",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.\nCMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "1449cf7b-a8b6-4f2e-9f65-69f145f06f1d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d4fd60cf-18b4-4f3b-b76f-3e3107dbab52",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "13895a74-2426-428b-b25e-84923123b1e4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-8",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "8820d751-8bcb-47ad-acf9-620953353234",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f44299ea-c3ef-402f-baa9-c553bb506f16",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d112b253-0109-4ceb-8f36-e25b44456908",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-8.3",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "0212cca2-f7f1-45c4-9cf0-b4be040df788",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "eb068d06-8f20-4537-ad02-b771d1c856f3",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "0c025a14-6f05-42df-888f-f2eb2ae04792",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-cms-01",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "1c019ed9-2a9b-4769-b2d0-69db2c4fe23c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8c900576-8c10-46cd-a1d9-cc07b0fd5c23",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "0970a21e-6276-4cf0-871c-11924fdce716",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-1",
                    description:
                      "CMS Cloud is responsible for a Physical and Environment Protection policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "9dbd0ede-9c3c-4ede-b991-9a92a295a242",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e71b82fc-4c7f-4094-b9fb-b2d4e462c087",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "a59ce989-cb05-487c-b831-7626a3a97f19",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-2",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "cb5efd10-5248-40c3-b815-572f7660bbeb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0e81833b-b734-47e1-bb66-be3dd17f78ca",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "340356b4-a2eb-45b1-a101-aa26a48c2da8",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-2.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "811fc871-9f33-4f0a-bd9e-882103f266bf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b0a53dfb-2056-4980-bd36-09b662456df0",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "4c399b9a-28e5-4c20-85bd-83db05f69d1e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-3",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "9e074fe2-ea86-40a5-90e2-99ef1111224a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "26276d29-1d98-4602-a941-74533f4e5fd6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "1d5e4b70-41cb-48c2-8514-b93324be8594",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-4",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "50700fd3-05a2-4bfd-9016-0c1f97106d79",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c3b4a66a-ac5a-4c33-842d-b24b655f6e6f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "5fa91034-89e7-4ca7-a1e7-9fd8156dcb92",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-5",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "786f09cc-98a2-471c-acb4-95813fb28b9c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d78e7516-d489-4c9a-a70c-ecc3020be0fc",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "47efc7d9-104d-4ab8-961c-5f0615316bfe",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-6",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "53c55fb8-0f4a-4a9d-821d-9e6adbb45eca",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d13fa3cf-4569-4b5b-901e-13c99c7595a6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "2d66db6c-b078-482b-aa3a-f73207114f94",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-6.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "f115f366-7e19-4273-b057-f7bd4a07ec80",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "07033b55-c92a-41de-b988-d15cd1f78647",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "2b1e2878-aa41-4829-beb3-15d6b3ec57e3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-8",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "a47a4593-9ffe-46b3-9a37-e11624a18943",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "af5afafc-dc0f-47b6-8810-79889eaff981",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "29f43ae9-a730-46ac-864a-5624009ec41d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-9",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "4e08a853-fc9f-44a2-b909-6bde3f1a62d6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a128accd-0928-4d1e-93f7-4280b2c61655",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "9d8f5d09-4e91-44a5-a293-893763259bf0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-10",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "0dcb5787-0e9a-4e9c-aba6-3b6673f0c34c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b6f32c6a-c132-4194-b318-488b61302bca",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3fb3a37e-4117-4868-98d6-147ab922d938",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-11",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "fcfea547-4b5a-47fb-8a55-a1802eaaaa6b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "31d66350-7735-4ab6-a54a-682691533abb",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "1a073023-3650-475b-9b5c-6c74298419ac",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-12",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "5602e2a2-4ee0-42e8-b423-7a0180fddc4f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2ee0f61f-1880-46f4-bd91-8d237ba3e791",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "133c5f61-8cb4-4545-9397-2a1d1df2db7e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-13",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "fa4126b8-c42f-4992-8497-041158d02e8a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9188694d-caf0-4b66-a379-3cd8d45adf43",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "4caebe92-3421-4ca4-9918-bbadc44df00b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-13.3",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "a9b2d55b-90a0-4de8-b0ce-f7f3161bc39b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f6ee0925-4f39-4447-8bfb-9313725da9a8",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "23a7f370-4bca-4a65-a0d8-ff4afdc547eb",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-14",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "ef260a25-17db-403a-9df1-6a044e2c6402",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9bfd28ee-1943-440d-bf0a-f3c84e6cecb3",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "302e13df-4ef0-4d77-9562-9cae5d5f4158",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-15",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "5e870a60-be91-41cf-a3b6-21881fddad2b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "08529121-e4db-4ab5-b43a-fec128fffcb6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "246f15f3-b980-47b3-a0cd-38c6323eb294",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-16",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "bf771b24-0f7b-4a5a-8799-97bf86fe1de6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "05333df0-e21f-4177-a77f-b9626c94ffb3",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d0ae2498-0bb1-4100-820f-fc2f05b9ca4b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-17",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "5aaa237a-a758-4265-8401-75aafb19131c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "61158780-60a8-4e4d-b8a5-d36b03956bd7",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "523dca3c-5594-4a87-b9cf-35c25f5be3ff",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-18",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "7a5012ee-d688-470c-80cb-e4af52826d69",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4c9d7222-05f1-4017-b8a2-89c87c12368c",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "04fbd23e-0303-4100-ad85-ee3fbb4402bf",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-18.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "2363c352-298f-4b8e-a8d1-d8bf90daf8dc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f14eaf44-3f54-45cc-bcac-aebfe7322d6a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "043b5916-dd16-46a2-a1a5-4755909a1641",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pl-1",
                    description:
                      "CMS Cloud is responsible for a Security Planning policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Security Planning policy covering all application related accounts.",
                  },
                  {
                    uuid: "0d474c54-e023-4e91-b573-1c2f9307e367",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7aea54c8-b5bf-40cf-9d12-10a14c65d22d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3dfb37c3-70b7-4c1e-a39e-5d3e3c19c887",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pm-1",
                    description:
                      "CMS Cloud is responsible for a Information Security Program plan covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Information Security Program plan covering all application related accounts.",
                  },
                  {
                    uuid: "4a66bb79-5712-4300-96da-64855a0818a0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b18a0a67-4b06-427c-9457-aea58048a2da",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "49e0a9e3-c4bc-4cdf-8088-b397cab5b9e7",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ps-1",
                    description:
                      "CMS Cloud is responsible for a Personnel Security policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Personnel Security policy covering all application related accounts.",
                  },
                  {
                    uuid: "cb7b8ed7-bf4a-409b-910a-114623b3f66e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "214ba4c2-987b-49c2-aaa0-dfd7df2601e4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2522502c-46d0-4994-9d56-cb8737eeb5f3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ra-1",
                    description:
                      "CMS Cloud is responsible for a Risk Assessment policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Risk Assessment policy covering all application related accounts.",
                  },
                  {
                    uuid: "19e96290-0c36-407f-86ec-261a6ca3a047",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3a48cbb2-bc9b-4e5c-a17b-02b6143d9fda",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "db6b3136-34ac-495f-baeb-683f691fd32b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ra-5",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "1a3a8d38-643f-43ef-b19e-a84ccf24a9e7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fa25ed9c-6410-40a9-a6d7-0ca49652ab62",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "48875902-7db9-471d-877d-f439ad604449",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ra-5.1",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "f51eea21-16b8-4790-83f1-d8d098926139",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "87de2bab-570a-4193-a2e1-afb6812bb68f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d3d66201-c0a1-443b-9046-742d1744b592",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ra-5.2",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "761ed7d1-fabd-4a1f-880a-f337e58c9c1e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e44c2a21-43d9-4251-be33-388bd5441b56",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "1516cfad-851b-4e92-a854-c68d7fddf727",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ra-5.3",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "644c2fe3-e3d7-4541-a2dd-81aa5f9a7837",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f57f8da7-30da-4f90-b338-dd03b139c2e1",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "1676f458-acca-44ab-95e9-bc18b194d348",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ra-5.5",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.\nCMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "3072528e-237e-48f0-b61d-a3f5c3d949ac",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4f23edd9-49a0-4679-aaa5-021f4f0bd93e",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "aae854dc-a801-440f-8ac5-09872146db07",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-1",
                    description:
                      "CMS Cloud is responsible for a System and Services Acquisition policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a System and Services Acquisition policy covering all application related accounts.",
                  },
                  {
                    uuid: "18f7a572-4525-4ca0-afac-7a3c1d9f499f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bad1362d-7107-4eaf-b579-8024a22a0ebe",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9b611ff6-df7f-4ca7-ac6c-5d70f1969e3b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "6dbccce9-0403-4001-84cc-4440f5b2a124",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f76d68f2-88d6-4a1c-9083-2b6430944a35",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9088c701-37af-43bd-8965-3fd01c74ab5c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-3",
                    description:
                      "Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "76d053db-3d14-44ed-947c-8b2b0ae4911b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f44fd068-3cc3-4109-9cf0-1a44eb958080",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "6347a768-e888-4a82-8ef1-6811e329fded",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-4",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "95fc5eb7-3095-481a-95c8-1bb628570d87",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "100f7912-e20f-4f45-9cd5-6e2663706700",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4aeeb523-f642-4c1c-befa-57cd7685f99f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-4.1",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "ace08d45-fb5a-4076-b7a8-a0d6c92a4cb0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9b5940ac-e32b-49ba-a140-da4594f76fb1",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f9550be0-e6c9-4c7a-abc3-2e35289b4cd5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-4.2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "e81f9794-f091-4466-91da-c1234722f786",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1599ccec-6fb2-4a0c-846f-036f15b1d5bd",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2f8e51d7-f3f7-4969-a6ad-8b846b3004ea",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-4.8",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "ca28619f-b39f-440f-875e-ebaa22bf4c6e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bc5c9c06-c4ca-48ed-bbf6-1f7bdc689186",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "99cbdae5-ee1b-401d-b6aa-cda7783173b1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-4.9",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "6ce91b34-fdba-4c65-9d74-41d4248376a0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ed5262d2-e15b-44e7-ab8e-f3fdc4d44952",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b7eeff66-6860-4bf0-92cf-3eb72b01c7d5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-4.10",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "f16a410e-67c3-46df-be19-22138d916e49",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c14eed66-db3c-45b6-bff8-900e8027aba5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "6f789ccb-fb8e-43a6-98a3-4a31100c4e11",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-5",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "b6d5c5d6-68cd-4e4b-8024-235d3ce3314a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "30d2120b-55d9-4758-b944-010d5243e65b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5e5f377e-2339-4c70-b225-ba674685f156",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-8",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "b79479a1-4618-459d-bf43-e58bb5f41d79",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3ac74123-ff7c-4dc5-a303-9c1d3cb4e0aa",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a3fb0682-9c1d-4dc2-854e-b53ce6222e7d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-9",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "79c8772b-c0f3-436c-9bb1-353521793296",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1b4d773e-fda2-4a82-97c9-60e7c96c54bc",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "afa3e4b2-4da7-4324-a05e-b88e546d8643",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-9.2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "6ac9c5d3-e827-4941-ac74-4344bd15c3ba",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "22424d19-8af1-4007-a839-5f14f4c2da10",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d09f743e-075f-4bca-acd5-e606076430a0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-9.5",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "e2526cbe-6d12-48d2-9ccd-7b654117dc8a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "51dc9318-05ee-4986-92d3-a950a02f851f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b16061aa-a99a-443d-b97e-47352441b302",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-10",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "d4cbebaa-e791-4dad-80ae-f8b4c81513c1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0e04e1e3-2b27-4720-9e68-0ac28cc9dc01",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3cbb5b85-d691-4022-8464-3156fb52272e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-10.1",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "952108b1-0e88-4aed-8156-66d698e56138",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d6fa1db3-ade8-45bf-b3ed-aa889cc50bba",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "107f480f-96bf-48ec-812d-302b9910bd0d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-11",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "f101a454-1efb-45a8-9487-79fddb60089c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "85d425c8-74df-49e1-8bee-1081a5465ae3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f3e60444-fb95-45bd-b9ba-8cbe8e65d10b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-11.2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "c1e862c4-a700-41f6-a7a9-cff7c9a4b0ea",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5ed1e01a-945d-448a-897a-726cc8c0f5bd",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fe357f83-4638-41d9-ae82-c2237dbe5f86",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-11.5",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "97e9c6f9-3902-4891-8d67-c1b88d2450e7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "20327bf6-8aea-4fb6-b2f2-d13fa7a53bf5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d39490af-a546-41b7-9cbf-43819d07098c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-11.8",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "49ad3feb-1370-4560-9b36-b61b9e53cb63",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "987f92d7-f4a9-4685-bbca-cfe407dc9fd8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "83ae18b9-06ff-436e-98d8-1664b1b803ca",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-13",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application",
                  },
                  {
                    uuid: "88b2848e-abbd-4927-b3f1-f7c0b17b945d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "18eaf79e-b455-471d-a18c-53578af6cc4f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2290ee72-19e6-4270-94ba-8b71e2c5e900",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-15",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "1e296745-221a-4e14-a765-a3898435ab3c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4989502a-f799-4b30-b6cc-8591ff95ede4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "115cace2-acfc-4ff4-9a41-021f3ffa7966",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-15.9",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "21d737d5-9307-4980-b33e-2d11873577f7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a10d21c1-ebe4-4245-acdb-4cfa896dc88a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4f570784-839a-413e-8614-adb8be21b593",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-21",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application.\nCMS Cloud is responsible for the security resources of GSS Services and GSS Systems.\n\nApplication teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "ce94bc65-dc51-4a35-84ff-a76000afcb19",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "afa7630f-5e2a-466b-bbbe-b95401ebfa96",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "210d61ff-3580-4863-9d4b-699ce2fe5b5a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-22",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "402f0135-2758-444e-9a2e-ee23138e59ce",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5a48f729-f628-4027-9a8f-6d90e7187e8d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a2501361-302f-45c3-99a4-4f1eb6844c8e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-1",
                    description:
                      "CMS Cloud is responsible for a System and Communications  policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a System and Communications policy covering all application related accounts.",
                  },
                  {
                    uuid: "9428d646-6cc5-4b67-a952-23798a5357c1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "62c69ac9-8146-4b7e-b847-79bab1b706c4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f9973481-fce8-4c38-bb1f-3939bf0b1fee",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-2",
                    description:
                      "CMS Cloud is responsible for a System and Communications  policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a System and Communications policy covering all application related accounts.",
                  },
                  {
                    uuid: "dee75e0f-570e-45e1-8183-d2a4b31606a1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "80f427b1-855f-44c9-a224-1fe4021cba0f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7f95ecf2-1dfd-47eb-a72b-d6837c6b594a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-3",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems.\n\nApplication Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "8347620b-db9e-401a-bb98-5f35231dacf0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e8705cda-5fcb-4883-b720-66946263492b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fb2aa0cc-2e89-4609-95f8-cd5d6a0e6521",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-3.2",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems.\n\nApplication Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "f6d185a4-024d-41dc-b32c-048fe35be419",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "42b0eba9-7209-4e81-8e2f-5e5839c8ca60",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b4164900-5833-4126-bcad-f867f5a4ed38",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-3.3",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems.\n\nApplication Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "add6b866-bf2a-4e23-bc04-0f3c85d08f15",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4bd4ac0e-98fe-4d91-9bfa-5f2ec6347341",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "28416395-773b-4b50-a6a6-82fe168830d1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-3.4",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems.\n\nApplication Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "740f968b-dc1b-4c83-9da6-955b337c7b06",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bb91a825-f9d9-40d7-bcd4-8eabfe9ec78f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4280f042-c1dc-4609-8bd5-a0013afadb62",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-3.5",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems.\n\nApplication Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "f3f9eac8-9390-4e85-b9e5-746cfab41d07",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "247a84e7-62b0-45cf-928c-bcbf922110a8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fdd03d59-dba5-4e34-a71b-fbb0d9216162",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-4",
                    description:
                      "CMS Cloud is responsible for managing shared information from GSS Services and GSS Systems.\n\nApplication teams are responsible for managing shared information of the application.",
                  },
                  {
                    uuid: "4f87f914-0252-4773-b9fc-bcca7bfeb655",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "da814454-c518-4f0a-91c2-ea41fd5121e4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a659eba1-71e0-4eb9-8837-7563fd950e8e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-5",
                    description:
                      "CMS Cloud is responsible for Denial of Service protection at the VPC and infrastructure level.\n\nApplication teams are responsible for Denial of Service protection of the application.\nCMS Cloud is responsible for Denial of Service protection at the VPC and infrastructure level.\n\nApplication teams are responsible for Denial of Service protection of the application.",
                  },
                  {
                    uuid: "58084e7f-a113-41a9-a00b-a0d95226df5f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "74504046-9853-49b1-8494-3f7d1a0b4d33",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b3a1ee42-6e90-40e0-9f28-896b410df280",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-7",
                    description:
                      "CMS Cloud is responsible for Denial of Service protection at the VPC and infrastructure level.\n\nApplication teams are responsible for Denial of Service protection of the application.\nCMS Cloud is responsible for Denial of Service protection at the VPC and infrastructure level.\n\nApplication teams are responsible for Denial of Service protection of the application.\nCMS Cloud is responsible for boundary protection at the VPC and infrastructure level.\n\nApplication teams are responsible for boundary protection of the application within the VPC. For example, Security Group configuration.",
                  },
                  {
                    uuid: "b6b31383-2420-4ef1-8b7a-1a409d2b94d9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "633c4149-1fe5-4995-bc56-b217b09a5bab",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "79acc7e7-063e-4ffe-bd97-04b79d2fff97",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-7.3",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level.\n\nApplication teams are responsible for boundary protection of the application within the VPC. For example, ENI configuration.",
                  },
                  {
                    uuid: "4b7348b9-6c5d-40ae-a604-e67342b918fc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bb6e207a-b69a-4bc5-9e5f-1b727dd0b5ee",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0c13939b-7733-4638-baf6-79e6585be2b7",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-7.4",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level.\n\nApplication teams are responsible for boundary protection of the application within the VPC. For example, ENI configuration.\nCMS Cloud is responsible for boundary protection at the VPC and infrastructure level.\n\nApplication teams are responsible for boundary protection of the application within the VPC. For example, ENI configuration.",
                  },
                  {
                    uuid: "5d446e6b-c529-40cc-894f-75ff52df5e1f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "24a369b2-9642-4d9d-93c6-0919b132c18f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9d5ac6dc-ae01-464f-bd95-93a50c1bd3f0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-7.5",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level.\n\nApplication teams are responsible for boundary protection of the application within the VPC. For example, Security Group configuration.\nCMS Cloud is responsible for boundary protection at the VPC and infrastructure level.\n\nApplication teams are responsible for boundary protection of the application within the VPC. For example, Security Group configuration.",
                  },
                  {
                    uuid: "e9e2dae2-4c0a-47a9-af85-dc70bc6a1dfe",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ee8e2849-d691-4e27-a634-ef4b78742a41",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "6583012d-13f1-492f-aae2-f2c0c3371a5c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-7.7",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level to include VPN protection.",
                  },
                  {
                    uuid: "2adb996d-fec3-4813-8b57-08696f2d3ed6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fa3f59fc-a059-4d6b-9481-eb5d3d9f25f6",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "1281d825-9622-4864-92aa-be51e95d2fbe",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-8",
                    description:
                      "CMS Cloud is responsible for the configuration and maintenance of secure data in transit across GSS Services and GSS Systems.\n\nApplications teams are responsible for the configuration and maintenance of secure data in transit across the Application.\nCMS Cloud is responsible for the configuration and maintenance of secure data in transit across GSS Services and GSS Systems.\n\nApplications teams are responsible for the configuration and maintenance of secure data in transit across the Application.",
                  },
                  {
                    uuid: "c71d7384-c8f4-4c0a-8515-3133441a20a2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1f55e721-bd3a-434e-909e-5ee6ca750cb3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c9aba272-dd04-446e-b0a8-218f3fd7546a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-8.1",
                    description:
                      "CMS Cloud is responsible for utilizing approved cryptographic methods to secure data across GSS Services and GSS Systems.\n\nApplications teams are responsible for utilizing approved cryptographic methods to secure data across the Application.\nCMS Cloud is responsible for utilizing approved cryptographic methods to secure data across GSS Services and GSS Systems.\n\nApplications teams are responsible for utilizing approved cryptographic methods to secure data across the Application.",
                  },
                  {
                    uuid: "ede425bb-f143-468c-ab09-c5c25c79e2d2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "355ce14a-1d5a-461b-aec1-2e76fbf8ee1e",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0da7dafb-a6e0-4391-9b47-2eda41be82c4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-8.2",
                    description:
                      "Applications teams are responsible for maintaining confidentiality and integrity of data prior to and after transmitting the data across the application.",
                  },
                  {
                    uuid: "f1050b1e-b51f-46a8-a39a-f44ebaa116cc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0347310c-24bd-4391-a5ef-d16c86ad5b68",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "6fbb3d22-d5d2-4090-8517-092cf80afe9a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-10",
                    description:
                      "CMS Cloud is responsible for configuring policy for Network Disconnect across the VPN.",
                  },
                  {
                    uuid: "05f45b56-931c-4b74-b4f4-8217e70d43d5",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "420400af-b750-4fa0-a590-5901b4fadad3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2753c966-d77e-4830-985b-5a15fe01b9f0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-12",
                    description:
                      "CMS Cloud is responsible for utilizing approved cryptographic methods to secure data across GSS Services and GSS Systems.\n\nApplications teams are responsible for utilizing approved cryptographic methods to secure data across the Application.",
                  },
                  {
                    uuid: "ffd3b207-a27d-4836-8ee9-b5455f61dab8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7db9e227-3980-4eb6-83fd-90bc2c4517bc",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "85c393d9-5351-4d5b-b261-097bb4f41c49",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-13",
                    description:
                      "CMS Cloud is responsible for utilizing approved cryptographic methods to secure data across GSS Services and GSS Systems.\n\nApplications teams are responsible for utilizing approved cryptographic methods to secure data across the Application.",
                  },
                  {
                    uuid: "ef1b35d2-add2-475c-a925-2e709d386d50",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7ed9cf6d-bbb3-40fb-8013-90605e97f1f5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b0a28d5e-211a-48c6-b401-a7f34ddf8c35",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-17",
                    description:
                      "CMS Cloud is responsible for utilizing certificates to secure data across GSS Services and GSS Systems.\n\nApplications teams are responsible for utilizing certificates to secure data across the Application.",
                  },
                  {
                    uuid: "d69c2ce1-56fb-4fb3-9a39-6dd583b9752b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8f7f2569-e3b8-48cc-92f6-4c8c859efa0e",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "999bd504-55f9-4d61-b5c0-1d5479fa592c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-18",
                    description:
                      "CMS Cloud monitors for mobile code behavior that would be deemed maliciously impacting the GSS Services and GSS Systems.\n\nApplication teams are responsible for the identification of appropriate mobile code for use within the application and monitoring on the application level.",
                  },
                  {
                    uuid: "c5693f42-c82d-4e4a-971b-6c7a71922099",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "475e780a-7afb-4080-8711-6d6697c50f2b",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "675ec4ff-9c95-4459-8d3a-01c49f4a39ad",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-20",
                    description:
                      "CMS Cloud manages and maintains DNS as it relates to GSS Services and GSS Systems.\n\nApplication Teams manage DNS as it relates to the application.",
                  },
                  {
                    uuid: "82f6575a-79e6-4a63-b3aa-7a77b588f76c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f692d96c-16f3-4bce-9dea-7cb673e2cb1f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8e5e77f4-d540-41e8-adb1-76c205faca4f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-21",
                    description:
                      "CMS Cloud manages and maintains DNS as it relates to GSS Services and GSS Systems.\n\nApplication Teams manage DNS as it relates to the application.",
                  },
                  {
                    uuid: "1eb28b62-da65-40d3-abb5-89beda52dbed",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "110d549e-751c-4a3f-9c06-71575311ad48",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "6691a00e-3223-49f6-911a-b9a7c5aabd94",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-22",
                    description:
                      "CMS Cloud is responsible for architecture and provisioning of the infrastructure that DNS runs on.\nCMS Cloud is responsible for architecture and provisioning of the infrastructure that DNS runs on.",
                  },
                  {
                    uuid: "90180d77-a2c5-4149-8e2a-9ef732956161",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "493688ca-29e0-4d1b-a95b-5b614198f8af",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "65d08255-4870-43ba-abbd-d970a4101d6c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-23",
                    description:
                      "CMS Cloud is responsible for the sessions within GSS Systems and GSS Services.\n\nApplication teams are responsible for sessions within the application.\nCMS Cloud is responsible for the sessions within GSS Systems and GSS Services.\n\nApplication teams are responsible for sessions within the application.",
                  },
                  {
                    uuid: "b47d724e-4924-47d2-8e02-b84ec26cd375",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "76a0f184-80be-4d07-a4cb-159dd249d5ff",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "60fab730-4fc4-4c45-8cd9-41720af7230a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-28",
                    description:
                      "CMS Cloud is responsible for data at rest that resides on GSS Services and GSS Systems.\n\nApplications teams are responsible for data at rest within the applications.",
                  },
                  {
                    uuid: "6423b2a3-1dce-4b4a-aa60-a41fa24bda2b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "aed46896-f983-4da9-a650-251fe004573d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "e5928f87-ad5f-46ef-a700-2bd0781dde9b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-28.1",
                    description:
                      "CMS Cloud is responsible for data at rest that resides on GSS Services and GSS Systems. Applications teams are responsible for data at rest within the applications.",
                  },
                  {
                    uuid: "d2439672-e180-4b2c-a510-9d8d5bb072dd",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9139b637-3cbb-48dd-bb3b-c055990dcf08",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "be348b55-a3bf-4697-bc7e-fa6c4fd951f7",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-32",
                    description:
                      "CMS Cloud is responsible for providing separate environments that can be partitioned based on the needs from the associated system security plan.",
                  },
                  {
                    uuid: "f2fffbdf-bc37-4ee8-bf69-b01c85fbea32",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "464cd66b-8b03-4187-bb41-dae7553a604a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "f28ef924-c37c-40ed-bb3f-ef0b6c8c957a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-39",
                    description:
                      "CMS Cloud is responsible for GSS Services and GSS System Process Isolation.\n\nApplication Teams are responsible for the Application Process Isolation.",
                  },
                  {
                    uuid: "4ad7f16d-dd6b-4b37-b1ee-9fb9c6007e24",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "635fecb0-6808-4397-9e7c-27eec383770f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4e5c301d-5ebb-4d25-841f-cb26cf775c60",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-cms-01",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems.\n\nApplication Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "abb5b0e1-415c-4443-b508-ef11802bac3e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2297aa1f-f73d-476a-bc81-7c2e931817e5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7b07ba88-d3b1-4a86-9061-d988c711782e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-cms-02",
                    description:
                      "CMS Cloud is responsible for restricting publicly facing websites supporting GSS Services and GSS Systems.\n\nApplication Teams are responsible for restricting publicly facing websites supporting the application.",
                  },
                  {
                    uuid: "a778f9c3-82a8-4e31-b009-49a26478dfb6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "aa72f2c3-6844-4c9a-91c1-d605be48e944",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "35e2ab50-c934-41d0-9222-2afd46b43c84",
                        value: "Yes",
                      },
                    ],
                    "control-id": "se-2",
                    description:
                      "CMS Cloud is responsible for restricting publicly facing websites supporting GSS Services and GSS Systems.\n\nApplication Teams are responsible for restricting publicly facing websites supporting the application.\nCMS Cloud is responsible for restricting publicly facing websites supporting GSS Services and GSS Systems.\n\nApplication Teams are responsible for restricting publicly facing websites supporting the application.",
                  },
                  {
                    uuid: "783594a1-8e0b-4f42-9c27-2bbc99d5f925",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "dbbd1a80-5730-46c5-a9f1-9c77491c2405",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3fcf2c00-fc6f-4c33-a85a-c9a1ee7f87b9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "se-cms-01",
                    description:
                      "CMS Cloud is responsible for a Security Control policy covering GSS Services and GSS Systems. Application teams are responsible for a Security Control policy covering all application related accounts",
                  },
                  {
                    uuid: "5a0d83eb-6e04-45a6-af2b-de3e02f49bd2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "36c43103-83e0-4187-b540-dae46e6426e4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c318c2dc-2023-40c7-ab25-88daf40a69d5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-1",
                    description:
                      "CMS Cloud is responsible for a System and Information Integrity policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a System and Information Integrity policy covering all application related accounts.",
                  },
                  {
                    uuid: "15b7ca05-6d7c-4c32-8ee6-f6c3adb5a329",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "86b165de-3e40-4a09-9e6b-8f446aafdf6a",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0efa67e0-b7d4-49b9-92d5-1e810578fe8c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-2",
                    description:
                      "CMS Cloud is responsible for flaw remediation within GSS Services and GSS Systems. Application teams are responsible for flaw remediation within the Application and supporting software.",
                  },
                  {
                    uuid: "232419ae-752c-4fc2-9d0e-e0757f202d20",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2c32f527-ae6f-4e19-9561-a0011d9b170e",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "84935b8e-1f68-436b-803c-f3b66b56ec8b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-2.2",
                    description:
                      "CMS Cloud utilizes Amazon Inspector or Tenable Nessus to check the state of information system components at the OS level at least every 72 hours, and at all levels for GSS Services and GSS Systems. Application teams are responsible for administering automated mechanisms to check the state of information system components within the Application and supporting software.",
                  },
                  {
                    uuid: "d6627bfc-0437-48ae-8c2c-76321a66d2ed",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "dba49851-c12b-4345-b26e-64336fc453d0",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b6d7fc9a-1406-40c3-a383-d85172c7d562",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-2.3",
                    description:
                      "CMS Cloud is responsible for flaw remediation within GSS Services and GSS Systems. Application teams are responsible for flaw remediation within the Application and supporting software.",
                  },
                  {
                    uuid: "0bb56ffc-e046-45b1-9333-ef8854149db1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7f146392-a5b4-4267-afc7-7c55b28e8bb1",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "1d82aef3-4ccf-459d-8e4c-151b59ced559",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-3",
                    description:
                      "CMS Cloud is responsible for malicious code protection. Application owners can fully inherit this control as long as they consume the Gold Image and are compliant with Trend Micro operational and connection requirements, which can be found on cloud.cms.gov.",
                  },
                  {
                    uuid: "2ea2ead9-7ed3-48b9-a022-1ea248b5facc",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "195f7ce4-0295-4ba4-8aa2-0dbcf047df46",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "13f003a2-1d37-4482-acd6-02319887c93c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-3.1",
                    description:
                      "CMS Cloud is responsible for centrally managing malicious code protection. Application teams can fully inherit this control as long as they consume the Gold Image and are compliant with Trend Micro operational requirements.",
                  },
                  {
                    uuid: "8ba342e1-bd52-45ce-8197-cad8ad2d3150",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fccd9578-ac90-4d2c-ab41-0e9253657360",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "b7db4b7e-0ffd-4fe1-a38f-fdfb4d9bd66a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-3.2",
                    description:
                      "CMS Cloud is responsible for automatically updating malicious code protection mechanisms. Application teams can fully inherit this control as long as they consume the Gold Image and are compliant with Trend Micro operational requirements.",
                  },
                  {
                    uuid: "bda38f17-57e8-4746-acf5-30e1962e97d4",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8be4bba3-c2e2-435f-adc4-86bc9cf99b66",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "4476e457-005b-4b19-a5b6-4ae2dd2240d9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4",
                    description:
                      "CMS Cloud is responsible for this control for all GSS Systems and Services, and for centrally managing the Trend Micro Deep Security HIPS (Host Intrusion Prevention System) module for any system that consumes the Gold Image. CMS Cloud also utilizes several other monitoring mechanisms such as VPC Flow Logs, VPN logs, etc. for information system monitoring. Application teams are responsible for configuring their applications to send application logs to the CMS Cloud SIEM, as well as supporting CMS Cloud in meeting this control by proactively monitoring their application for anomalies.",
                  },
                  {
                    uuid: "5f3d0348-4254-4b3b-97e2-be6e06e1cee7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "58d12283-34b1-4ea7-9dff-7e1fd9becf2f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "01a8f92c-e3d7-4942-a29a-8729320d81ea",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.1",
                    description:
                      "CMS Cloud is responsible for configuring and administering a centrally managed intrusion detection toolset. Application teams are able to fully inherit this control as long as they consume the Gold Image for their application and comply with Trend Micro Deep Security operational requirements.",
                  },
                  {
                    uuid: "a5d02900-0751-450b-8cca-07049683827a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "29e701ca-7ea8-4e49-a5f2-1454bc1fcff5",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "91565855-c714-4a65-acab-470db9232eeb",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.2",
                    description:
                      "CMS Cloud is responsible for configuring GGS Services and GSS Systems that provide system wide monitoring. CMS Cloud configures the connection and collection of security systems into a system-view view. A SIEM is used to fulfill this. Application teams can fully inherit this control as long as they consume the Gold Image for their applications, they comply with Trend Micro Deep Security operational requirements, and configure their application logs to be ingested by the CMS Cloud SIEM.",
                  },
                  {
                    uuid: "cf932bcc-45b1-4e3a-8280-a79b2e7b6aee",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bf6882f2-3498-4fc1-9ef7-3fbdf2ca4ec9",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "c6d19ab9-8f2a-4dc0-b251-1f0e66acacf2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.3",
                    description:
                      "CMS Cloud configures GSS Services and Systems to automatically integrate with detection intrusion functionality. Application teams can fully inherit this control as long as they consume the Gold Image for their applications, comply with Trend Micro Deep Security operational requirements, and configure application logs for CMS Cloud SIEM ingestion.",
                  },
                  {
                    uuid: "7b2feb04-a40a-4bda-baed-fecea9d4e8c0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4dcdeedc-80ba-45ae-9ab8-bd9c44e065b5",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "bdacc7a5-374f-4fbb-a7f8-b980544eef22",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.4",
                    description:
                      "CMS Cloud configures the connection and collection of network events into a system-view view. A SIEM is used to fulfill this. Application teams can fully inherit this control as long as they consume the Gold Image for their applications, comply with Trend Micro Deep Security operational requirements, and configure application logs for CMS Cloud SIEM ingestion.",
                  },
                  {
                    uuid: "1a1beede-e9b2-4bda-89db-1e2479693ce8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "82bd63d4-7359-49aa-ac85-128f8da6a357",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5c9e5083-f70c-453c-b7d6-a0b513d9cbf3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.5",
                    description:
                      "CMS Cloud configures alerts from security and operational tools for the detection and response to potential threats to GSS Services and GSS Systems. Application teams are responsible for configuring alerts specific to threats to the application that are outside of the scope of CMS Cloud detection. Application teams are responsible for alerting CMS Cloud and CCIC if an indicator of compromise is detected.",
                  },
                  {
                    uuid: "1b2ddaf6-4387-4b71-baa6-9c23e4f5c617",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f8e07421-13d6-484e-aedd-3b388ab68a75",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8c06da18-85b5-4ae9-8619-605511574fb2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.16",
                    description:
                      "CMS Cloud provides a SIEM to Application teams to enable them to build correlation dashboards and queries. Application teams are responsible for building correlations from data in the SIEM related to their application.",
                  },
                  {
                    uuid: "83affe46-8899-48c0-9520-71038bfdda18",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2a730d46-3ac2-4d74-9497-a90bed1e347e",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "54eb1303-dae7-4f65-92a3-72d0f9c77d62",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.23",
                    description:
                      "CMS Cloud configures GSS Services and Systems with host based or cloud based detection functionality. Application teams can fully inherit this control as long as they consume the Gold Image for their applications, comply with Trend Micro Deep Security operational requirements, and configure application logs for CMS Cloud SIEM ingestion.",
                  },
                  {
                    uuid: "6a03876c-1d52-4846-9d22-2619c4b1de5d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "16a8f1e0-c192-4207-946b-0cca66feb4d9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2df23e3f-456c-449c-a00b-89f45f9259f1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-4.24",
                    description:
                      "CMS Cloud configures alerts from security and operational tools for the detection and response to potential threats to GSS Services and GSS Systems. Application teams are responsible for configuring alerts specific to threats to the application.",
                  },
                  {
                    uuid: "12c2673f-fcbe-4d56-bd75-a8997fa41a35",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "df99f789-a7c0-4f97-ab5b-813c0fffc9d5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a27c83c1-478d-4ba5-9d70-a71ea045840c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-5",
                    description:
                      "CMS Cloud receives and responds to security communication relating to GSS Services and GSS Systems. Application teams are responsible for receiving and responding to security communication related to their application.",
                  },
                  {
                    uuid: "155ea710-3f3c-445d-bf8f-800c0756a940",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7b0a72e3-24fd-4596-b0b6-1ba293c49cb4",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "e6620740-a9ec-4607-a31f-7bfb305f0dda",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-6",
                    description:
                      "CMS Cloud is responsible for verifying Security Functions through GSS Services and GSS Systems.\n\nApplication teams are responsible for supporting the capabilities of the security tools.",
                  },
                  {
                    uuid: "77b88027-76c2-4e1b-97f5-ef13e9f4002a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8c7c25dc-8fb8-4bd0-8e70-92d9dd8f091f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "e4e3cb66-4959-445a-8bae-8df5521265a9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-6.2",
                    description:
                      "CMS Cloud is responsible for verifying Security Functions through GSS Services and GSS Systems.\n\nApplication teams are responsible for supporting the capabilities of the security tools.",
                  },
                  {
                    uuid: "3972ed68-b2bf-4da4-bbab-da33889c7721",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "491ac771-e9d7-4fc2-8913-888f7a9a688d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ef9ceada-7fcf-4ad3-b9c4-f45d7bed5bfb",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-7",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application teams can fully inherit this control as long as they consume the Gold Image for their applications and comply with Trend Micro Deep Security operational requirements.",
                  },
                  {
                    uuid: "9e67e0e4-3da3-4ed1-aa18-d28643c93f34",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bf03a0d1-4774-4719-b091-46c9fe67ab43",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "da2ae80b-8e02-4298-a3d4-5911b3e2b8c0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-7.1",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application teams can fully inherit this control as long as they consume the Gold Image for their applications and comply with Trend Micro Deep Security operational requirements.",
                  },
                  {
                    uuid: "26de16a2-4fdf-4cef-8309-16c152ff253e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a31b1a7f-e030-4f43-8d15-aff2a6dcbc11",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3ecb8d0f-f564-4cd3-bf46-fcb1942ccb51",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-7.6",
                    description: "",
                  },
                  {
                    uuid: "6002bd8f-db05-4f2a-8762-aa7784d09261",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "839addd0-be33-47ec-bfe8-74c14c0df36c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b0853cc2-3f20-4728-a518-c34548264993",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-7.7",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems.\n\nApplication teams are responsible for the detection and response to changes in the application",
                  },
                  {
                    uuid: "c7ec76f2-f7e4-4047-a0f7-43d3abcf3e2e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1306a32f-ad60-474c-b5c2-0664e2803709",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "703dd36c-e48f-4fdd-ad61-e3638948d6ad",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-8",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems.\n\nApplication Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "2544a8b1-c91c-45c7-9775-47785b46d06f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f3a04c06-aee8-4ec4-89f0-0eeb063ccf41",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "09ffd001-e511-402e-812d-d1344712e5e4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-8.1",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems.\n\nApplication Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "cc16dd98-6e5d-4965-b484-83482419b4af",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3e39f19f-1310-4468-bf84-165cc44a86b1",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "989591a5-0481-4b67-a845-140c80fd856d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-8.2",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems.\n\nApplication Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "03558666-32b7-455b-83b6-e24a3e9a3073",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0de04b2e-5c0d-49dc-958c-78f176bbbb8c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "51707c0e-4435-4062-9fb0-c09ca8e12565",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-10",
                    description:
                      "CMS Cloud is responsible for input validation within GSS Services and GSS Systems.\n\nApplication teams are responsible for input validation within the application",
                  },
                  {
                    uuid: "9cb9d371-6124-4af8-8946-abb269ee61e6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1638f41d-b3b6-4fa8-a719-67e81e1c01f6",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a181c0b6-dcab-4a38-a15f-b820749d7dc0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-11",
                    description:
                      "CMS Cloud is responsible for error handling within GSS Services and GSS Systems.\n\nApplication teams are responsible for error handling within the application",
                  },
                  {
                    uuid: "dea13ebe-fba6-4b1e-a08f-a866ac343d3a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d78157da-413f-4c07-8c75-af107865edb8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ee2c62e6-b023-4559-970e-4d972eb4229c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-12",
                    description:
                      "CMS Cloud is responsible for the handling of information for GSS Services and GSS Systems.\n\nApplication teams are responsible for the handling information from the application.",
                  },
                  {
                    uuid: "2d7cbb08-60f8-4b7d-b7ed-98440a2312ea",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "65334cbe-6bdb-4a83-88a0-03233119a169",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "53b66cc0-0f69-45ee-803e-a12707e6650d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-16",
                    description:
                      "CMS Cloud is responsible for the handling of memory protection. Application teams can fully inherit this control as long as they consume the Gold Image for their applications and comply with Trend Micro Deep Security operational requirements.",
                  },
                  {
                    uuid: "936cb10c-9250-4a5a-bdd1-153aaf85d781",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "cfd23581-03af-41d6-924c-983c00c58bf5",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5f92a442-1a41-41a3-bd27-845df024e608",
                        value: "Yes",
                      },
                    ],
                    "control-id": "tr-cms-01",
                    description:
                      "CMS Cloud is responsible for a Transparency policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Transparency policy covering all application related accounts.",
                  },
                  {
                    uuid: "f645b38a-a674-4266-acfc-08c03a23a818",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3ff4e827-d800-48bd-ade2-14a71ecabe15",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a5b483a5-bb93-461b-bda5-ec1556d69f03",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ul-cms-01",
                    description:
                      "CMS Cloud is responsible for a Use Limitation policy covering GSS Services and GSS Systems.\n\nApplication teams are responsible for a Use Limitation policy covering all application related accounts.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 311,
  },
  {
    id: 62,
    title: "blueprint",
    description: "Blueprint",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "fd2fb3db-38bf-40be-8697-03482276483c",
        metadata: {
          title: "Blueprint",
          version: "unknown",
          published: "2021-12-08T21:50:22.481817+00:00",
          "last-modified": "2021-12-08T21:50:22.481824+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "1b07da48-ec5c-4e66-8f64-b570adcfa1a2",
            title: "Blueprint",
            description: "Blueprint",
            "control-implementations": [
              {
                uuid: "79ec20b6-1f70-451f-94bc-9e7bc6bbb472",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "67236e2c-cdc0-498a-8276-00f5791cf665",
                    "control-id": "ac-2",
                    statements: [
                      {
                        uuid: "d22c4442-a9e0-4512-bef2-d91d1c179f25",
                        description:
                          "ICAM identifies and selects the information system accounts to support organizational missions/business functions: Individual (Human).  There are no Shared or System accounts.",
                        "statement-id": "ac-2_smt.a",
                      },
                      {
                        uuid: "822ec811-a6c0-4e00-a170-042d3dd21151",
                        description:
                          "ICAM assigns roles and responsibilities for Blueprint",
                        "statement-id": "ac-2_smt.b",
                      },
                      {
                        uuid: "4cf8c6f6-ded0-4522-b40a-14b963b418d4",
                        description:
                          "ICAM establishes conditions and assigns role membership",
                        "statement-id": "ac-2_smt.c",
                      },
                      {
                        uuid: "61dbc115-98e8-43bd-b589-5e546c2d79fa",
                        description:
                          "ICAM specifies authorized users of the information system, group and role membership, and access authorizations (i.e., privileges) and other attributes (as required) for each account;",
                        "statement-id": "ac-2_smt.d",
                      },
                      {
                        uuid: "9a164844-0942-4085-9ec1-ee5a19b87ec8",
                        description:
                          "Requires approvals by the User's direct Supervisor/Manager and then the Blueprint User Access Approver",
                        "statement-id": "ac-2_smt.e",
                      },
                      {
                        uuid: "b20ac589-a286-404c-a99b-2dd5d9a8c23c",
                        description:
                          "ICAM creates, enables, modifies, disables, and removes information system accounts in accordance with creating, modifying, disabling;",
                        "statement-id": "ac-2_smt.f",
                      },
                      {
                        uuid: "81180b48-562d-4ae6-9cc8-25916ff12714",
                        description:
                          "Blueprint application System Administrator monitors system performance and troubleshoots issues to ensure security and efficiency of IT infrastructure.",
                        "statement-id": "ac-2_smt.g",
                      },
                      {
                        uuid: "9a626751-f6ec-4ef4-8c98-70bd0975ba56",
                        description:
                          "System Owner notifies account managers:\n  1. When accounts are no longer required;\n  2. When users are terminated or transferred; and\n  3. When individual information system usage or need-to-know changes;",
                        "statement-id": "ac-2_smt.h",
                      },
                      {
                        uuid: "631f7f57-eb3f-49f6-abb4-49eb22152c73",
                        description:
                          "The User Access Approver approves access to the application on Identity Access and Recertification Portal from the supervisor (project lead, or project/program manager) of the requester; the request must include detailed justification on why the account is needed",
                        "statement-id": "ac-2_smt.i",
                      },
                      {
                        uuid: "b70c3efe-2dfe-40b4-91f5-8bf60cb61f8d",
                        description:
                          "Reviews accounts for compliance with account management requirements annually; This will be part of the account management monitoring process to be determined.",
                        "statement-id": "ac-2_smt.j",
                      },
                      {
                        uuid: "211c9354-f7ef-44ff-9943-a8af762b2d26",
                        description:
                          "There are no shared/group accounts in the Blueprint application.",
                        "statement-id": "ac-2_smt.k",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "48e53cbb-daea-4980-b93e-330f6ece1316",
                    "control-id": "ac-2.1",
                    description:
                      "There are no automated process mechanisms to support the management of information system accounts for Blueprint application.",
                  },
                  {
                    uuid: "366aed0d-9bfa-4cad-bc37-ee8df0db7479",
                    "control-id": "ac-2.2",
                    description:
                      "There are no automated removal processes for any account in Blueprint application.",
                  },
                  {
                    uuid: "e15325aa-6e32-4738-a33d-10b754ebcfb9",
                    "control-id": "ac-2.4",
                    description:
                      "There are currently no automatic audits conducted for Blueprint.  Any audit of account creation, modification, enabling, disabling, and removal actions are done manually per the request of the system owner to ICAM.",
                  },
                  {
                    uuid: "134e72ec-001a-4d63-bb35-9be6228eb669",
                    "control-id": "ac-3",
                    description:
                      "All users of the Blueprint application will be end users plus a small number of Application Super Admin users.  These roles are managed by access control lists in the backend.  Authorization of other logical access is not granted to these users.\n\nThe Application Super Admin user looks after all application management. The application super admin user has the ability to manage the access and level of responsibility of all application users.",
                  },
                  {
                    uuid: "94fdba39-c303-43b0-9fb9-3001547ea697",
                    "control-id": "ac-6",
                    description:
                      "All users of the Blueprint application will be end users plus a small number of Application Super Admin users.  These roles are managed by access control lists in the backend.\n\nThe Application Super Admin user looks after all application management. The application super admin user has the ability to manage the access and level of responsibility of all application users.",
                  },
                  {
                    uuid: "15eabbe1-0c18-4a67-af3b-741043d616b1",
                    "control-id": "ac-6.1",
                    description:
                      "Blueprint Database Administrators (DBA) use specialized software to monitor and manage the application’s data stored in a relational database. This work includes capacity planning, installation, configuration, migration, performance monitoring, security, troubleshooting, as well as backup and data recovery.\n\nBlueprint System Administrators install and configure software, hardware, networks, repositories, the CI/CD pipeline, and deployments. They also monitor system performance and troubleshoot issues to ensure security and efficiency of IT infrastructure.",
                  },
                  {
                    uuid: "c24b781a-a2ec-45c6-95d9-221a05031681",
                    "control-id": "ac-6.2",
                    description:
                      "All users of the Blueprint application will be end users plus a small number of Application Super Admin users.  These roles are managed by access control lists in the backend.  Authorization of other logical access is not granted to these users.\n\nThe Application Super Admin user looks after all application management. The application super admin user has the ability to manage the access and level of responsibility of all application users.\n\nBlueprint Database Administrators (DBA) use specialized software to monitor and manage the application’s data stored in a relational database. This work includes capacity planning, installation, configuration, migration, performance monitoring, security, troubleshooting, as well as backup and data recovery.\n\nBlueprint System Administrators install and configure software, hardware, networks, repositories, the CI/CD pipeline, and deployments. They also monitor system performance and troubleshoot issues to ensure security and efficiency of IT infrastructure.",
                  },
                  {
                    uuid: "1b579a7c-33e6-4fdf-979e-1d1d2eb68dfc",
                    "control-id": "ac-6.5",
                    description:
                      "All users of the Blueprint application will be end users plus a small number of Application Super Admin users.  These roles are managed by access control lists in the backend.  Authorization of other logical access is not granted to these users.\n\nThe privileged accounts (Application Super Admin) user looks after all application management. The application super admin user has the ability to manage the access and level of responsibility of all application users.",
                  },
                  {
                    uuid: "df35ab67-06e7-468d-9262-e1d83c24ca19",
                    "control-id": "ac-6.9",
                    description:
                      "The Blueprint Django/site administration monitors execution of privileged functions within the Blueprint application.",
                  },
                  {
                    uuid: "7006313f-e8ea-44ce-9399-f117d95a6d35",
                    "control-id": "au-2",
                    statements: [
                      {
                        uuid: "025df2fb-7855-49af-bdd0-b7c2b9db2089",
                        description:
                          "The Blueprint System Administrator has access to the audit logs in the Organization's logging tool which monitors successful and unsuccessful account logon events, account management events, object access, policy change, privilege functions, process tracking, and system events.",
                        "statement-id": "au-2_smt.a",
                      },
                      {
                        uuid: "e894c179-ffd4-48be-92d1-dd0781ab88fd",
                        description:
                          "The Blueprint System Owner in coordination with the Blueprint ISSO coordinates the security audit function with other organizational entities requiring audit-related information to enhance mutual support and to help guide the selection of audit-able events;",
                        "statement-id": "au-2_smt.b",
                      },
                      {
                        uuid: "4d3194f8-5c49-475b-a1b7-b3649b4b4240",
                        description:
                          "The Blueprint ISSO will work with Organization security organization to create a Standard Operating Procedure which provides a rationale for why the audit-able events are deemed to be adequate to support after-the-fact investigations of security incidents;",
                        "statement-id": "au-2_smt.c",
                      },
                      {
                        uuid: "f7ec626f-3e3b-4bae-bcdb-7aff0b23b537",
                        description:
                          "The Blueprint System Administrator has access to the audit logs in Kibana which monitors successful and unsuccessful account logon events, account management events, object access, policy change, privilege functions, process tracking, and system events.",
                        "statement-id": "au-2_smt.d",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "9352fb30-5791-4970-8bda-126ed029b8bd",
                    "control-id": "au-3",
                    description:
                      "Blueprint generates a variety of audit records containing information that establishes what type of event occurred, when the event occurred, where the event occurred, the source of the event, the outcome of the event, and where appropriate the identity of any individuals or subjects associated with the event. The logs can vary depending on the deployed configuration but generally include Blueprint application logs that track noteworthy successful and failed user-related events such as login, logout, creation and deletion of content; Gunicorn Web Server Gateway Interface HTTP server logs noting session handling errors and application exceptions, NGINX HTTP server logs noting URL requests and request handling logs; and PostgreSQL Database logs noting database specific events.\n\nBlueprint application log entries include these fields:\n  - timestamp\n  - python script\n  - level\n  - log type\n  - object info dict\n  - user info dict\n  - event name",
                  },
                  {
                    uuid: "7e547d29-6008-4c4f-bbe1-31679054f854",
                    "control-id": "au-6",
                    statements: [
                      {
                        uuid: "ef0634b2-eea3-4ad6-8472-3f5b45fe427a",
                        description:
                          "The Blueprint ISSO will review the Blueprint application related audit logs and provide report findings to the System Owner, Organization CISO and SOC. The Blueprint Application in Single Sign On mode transfers primary account auditing to Organization Single Sign On service.  The Blueprint application in Single Sign On mode provides secondary account auditing to Organization Single Sign On primary auditing.",
                        "statement-id": "au-6_smt.a",
                      },
                      {
                        uuid: "c32eba20-0e06-4237-a3b3-a9faf809e36c",
                        description:
                          "Reports findings to System Owner, Organization CISO and SOC.\n\nThe Blueprint ISSO reviews this control at least annually or whenever there is a significant change.",
                        "statement-id": "au-6_smt.b",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "8518cb1d-9590-4b33-9cf3-27454912284d",
                    "control-id": "au-6.3",
                    statements: [
                      {
                        uuid: "100aaeda-39da-4317-a075-84f27fc5624e",
                        description:
                          "Determines that the following events are to be audited within the information system: organization-defined subset of the auditable events defined in AU-2 a to be audited continually for each identified event.  This is also a document being defined and will be reviewed by the ISSO and CME Team.",
                        "statement-id": "au-6.3_smt.d",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "b670374a-cbbc-41cf-8842-1eb2aee190a0",
                    "control-id": "ca-3",
                    description:
                      "Blueprint provides each user with API credentials that enable information exchanges with the same privileges as the user between Blueprint and other information systems with documented Interconnection Security Agreements. Users have API credentials that control information exchanges to read-only, write-only, or read/write.\n\nBlueprint ISSO will review this control at least annually or whenever there is a change.",
                  },
                  {
                    uuid: "151759ad-9dcd-4d73-a8df-92cf0b7a0d86",
                    "control-id": "ca-5",
                    description:
                      "The ISSO reviews this control at least annually or whenever there is a significant change.",
                  },
                  {
                    uuid: "36b49a2e-56e4-4d28-bdb0-d7ce875abbe1",
                    "control-id": "ca-7",
                    description: "tbd",
                  },
                  {
                    uuid: "3133284a-3d04-40df-b186-451a886a2581",
                    "control-id": "ca-7.1",
                    description: "tbd",
                  },
                  {
                    uuid: "05dbc5de-0399-4541-ae82-de4b1da5935e",
                    "control-id": "cm-2",
                    description:
                      "The Blueprint System Admin in coordination with the release manager maintains configuration controls/baselines for the application.  They ensure that changes are documented and formally reviewed before changes are deployed to each environment (dev, sat, edu and prod).\n\nGit is the source code version control software that is used to maintain configuration control of information systems.\n\nBlueprint application developers employ Git as an automated mechanisms to maintain an up-to-date, complete, accurate, and readily available baseline configuration of the Blueprint application source code.  Git also provides version control for all changes made to baseline configurations.\n\nThe ISSO reviews this control at least annually or whenever there is a significant change.\n\nThe Blueprint System Administrator in coordination with the Organization Release Manager maintains configuration baselines for the Blueprint Application.  They ensure that changes are documented and formally reviewed before changes are deployed to each environment.",
                  },
                  {
                    uuid: "bf9080b6-6973-475e-9528-659b54ddeef3",
                    "control-id": "cm-2.1",
                    description:
                      "The Blueprint System Administrator reviews and updates the configuration of the Blueprint Application:\na. Upon changes in the information system or in the system's environment of operation such as new software or detected vulnerabilities;\nb. When required in accordance with the Blueprint Application Concept of Operations document;\nc. As an integral part of information system component installations and upgrades.",
                  },
                  {
                    uuid: "ba8314af-e78f-435c-834d-44357ac939a8",
                    "control-id": "cm-2.3",
                    description:
                      "The Blueprint System Admin in coordination with the release manager maintains configuration controls/baselines for the application.  They ensure that changes are documented and formally reviewed before changes are deployed to each environment.\n\nThe Blueprint application uses the Django framework for maintaining the configuration of the database schema. The Django framework tracks all modifications to the database schema and supports the rollback of the database structure.",
                  },
                  {
                    uuid: "a0eed4cd-d446-4624-a28d-bae766ba12b1",
                    "control-id": "cm-6",
                    description:
                      "The Blueprint System Admin in coordination with the Organization Release Manager maintains configuration controls/baselines for the application.  They ensure that changes are documented and formally reviewed before changes are deployed to each environment.",
                  },
                  {
                    uuid: "e664055a-ecd0-4df7-b17b-4ead52859ee6",
                    "control-id": "cm-8",
                    statements: [
                      {
                        uuid: "bc67b122-4a5e-431b-a50a-ff6c27046aa1",
                        description:
                          "The Blueprint ISSO develops and documents an inventory of information system components that:",
                        "statement-id": "cm-8_smt.a",
                      },
                      {
                        uuid: "1f9941bd-466a-4824-9493-a3ae5c5f2c1e",
                        description:
                          "Accurately reflects the current Blueprint System Components and information system;",
                        "statement-id": "cm-8_smt.a.1",
                      },
                      {
                        uuid: "1ecae508-5f65-4d99-a6aa-6f98467e52e0",
                        description:
                          "Includes all components within the authorization boundary of the information system;",
                        "statement-id": "cm-8_smt.a.2",
                      },
                      {
                        uuid: "7346d343-c63d-4e43-bb68-44479d3b6a9c",
                        description:
                          "Is at the level of granularity deemed necessary for tracking and reporting; and",
                        "statement-id": "cm-8_smt.a.3",
                      },
                      {
                        uuid: "b449af6b-967e-4c24-9718-3a339873dcf0",
                        description:
                          "Includes information contained in the DHS Inventory methodology; and",
                        "statement-id": "cm-8_smt.a.4",
                      },
                      {
                        uuid: "623ca519-f79a-4fe6-bf35-04634474aaca",
                        description:
                          "The Blueprint ISSO reviews and updates the information system component inventory annually.\n\nThe Blueprint ISSO reviews this control at least annually or whenever there is a significant change.",
                        "statement-id": "cm-8_smt.b",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "df4e1715-42a3-4e9d-a8e4-06e00c5d081e",
                    "control-id": "cm-8.1",
                    description:
                      "The Blueprint System Admin in coordination with the Organization Release Manager updates the inventory of information system components as an integral part of component installations, removals, and information system updates. The Blueprint ISSO works with the Blueprint Application Team to update the system inventory in the System Security Plan when ever a new version of software is installed or removed as part of the configuration management plan.",
                  },
                  {
                    uuid: "ff9abf59-deac-4708-a4af-4abff5923b75",
                    "control-id": "cm-8.3",
                    description:
                      "The Blueprint application has not employed any automated mechanism to detect the presence of unauthorized software and firmware components within the information system at the level of the Application Layer.",
                  },
                  {
                    uuid: "e9f302f3-6a79-46bb-af37-1b6ecd29ac14",
                    "control-id": "ia-2",
                    description:
                      "The Blueprint Application uniquely identifies users via a unique numeric user database record and unique username. All manipulations of information system data via the application or database requires users to be authenticated or via API processes that require a secret key associated with a unique user. Authentication of users varies depending upon deployment configuration. Authentication can be done via username and password or can be delegated to a Single Sign-On service.",
                  },
                  {
                    uuid: "a680309b-ca64-450e-b417-4d01e75e2856",
                    "control-id": "ia-2.8",
                    description:
                      "Authentication in Blueprint application is managed by the built-in Django Authentication library or is delegated the organization Single Sign On mechanism.\n\nAdditionally, the Blueprint application is configured with the replay-resistant Transport Layer Security (TLS) protocol.",
                  },
                  {
                    uuid: "2dc27425-36c9-4cbb-a1f1-bc8b79b94090",
                    "control-id": "ia-2.12",
                    description:
                      "Authentication in Blueprint is managed by the SSO mechanism implemented by ICAM. Users are PIV-challenged when accessing the Blueprint application.\n\nThe Blueprint ISSO reviews this control at least annually or whenever there is a significant change.",
                  },
                  {
                    uuid: "511533b4-1d0a-46ef-8f86-28fd56f9412b",
                    "control-id": "ir-5",
                    description:
                      "The Blueprint Application Team tracks and documents source code and development security incidents at the application level inside GitHub issues and Google docs. GitHub issues is issue tracking software that supports documenting an issue such as a software bug or security issue, the status of the issue, notes about the issue, and attachments about the issue such as forensics.",
                  },
                  {
                    uuid: "f271e4b8-337f-4da1-9db5-4083bac80c25",
                    "control-id": "pl-2.3",
                    description:
                      "Security-related activities affecting the information system are required to go through the change control process before conducting such activities in order to reduce the impact on other organizational entities. Security authorization documentation activities such as annual assessment and contingency plan updates are done by the Blueprint ISSO and reviewed by the Organization SCA.\n\nThe Blueprint ISSO reviews this control at least annually or whenever there is a significant change.",
                  },
                  {
                    uuid: "2c5d4ca8-e9e3-45c4-97d9-89ee073f5706",
                    "control-id": "pl-8",
                    description:
                      "The ISSO reviews this control at least annually or whenever there is a significant change.",
                  },
                  {
                    uuid: "1577e46d-6e5a-48bf-a80d-923a01325fe5",
                    "control-id": "ra-5",
                    statements: [
                      {
                        uuid: "95bfc970-2743-4bbf-bb31-59d806ec8503",
                        description:
                          "TBD is deployed to scan for container image security vulnerabilities.  Blueprint performs Aquasec code scans with each new build of the application code.  Scan results are sent to the Blueprint ISSO on a weekly basis.",
                        "statement-id": "ra-5_smt.a",
                      },
                      {
                        uuid: "5e271d98-f819-499c-aa2c-b2765cc240a1",
                        description:
                          "The Organization SOC uses TBD to manage vulnerability scan results for various scanning tools.",
                        "statement-id": "ra-5_smt.b",
                      },
                      {
                        uuid: "0bcba368-3d6b-4622-8b14-bd8675218f29",
                        description:
                          "The Blueprint ISSO is responsible for reviewing and analyzing scan results for resources defined in their boundary.",
                        "statement-id": "ra-5_smt.c",
                      },
                      {
                        uuid: "b8978aac-d690-4c11-9778-2631ae63d863",
                        description:
                          "The Blueprint ISSO works with systems administrators or development teams to patch vulnerabilities and address configuration changes as necessary to address legitimate vulnerabilities discovered in scans.",
                        "statement-id": "ra-5_smt.d",
                      },
                      {
                        uuid: "a572049b-5254-4c70-ae9e-10f0c8bfafc1",
                        description:
                          "The Blueprint ISSO shares information between teams to address common vulnerabilities.\n\nThe Blueprint ISSO reviews this control at least annually or whenever there is a significant change.",
                        "statement-id": "ra-5_smt.e",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "f021b69b-72af-450b-9e98-1421b6d9c694",
                    "control-id": "sa-9",
                    description:
                      "There are no external information system services that utilized by Blueprint.\n\nThe Blueprint ISSO reviews this control at least annually or whenever there is a significant change",
                  },
                  {
                    uuid: "33ec0e1f-3bef-4e7f-849b-5390e2c1b811",
                    "control-id": "sc-13",
                    description:
                      "Blueprint employs the cryptography as part of the Transport Layer Security (TLS) protocol to encrypt communication between the Blueprint application and end-user's client browser software. Deployments can optionally configure secure transport to the database. Cryptography is also used to encrypt user passwords when authentication is not being delegated to Single Sign-on Service.",
                  },
                  {
                    uuid: "f5e6e6b8-8f64-4603-9687-9d5eb29a7939",
                    "control-id": "si-2",
                    description:
                      "The Blueprint Application Team:\n  \na. Identifies, reports, and corrects any information system flaws including code vulnerability as well as code quality scans and report any flaws using tools such Snyk, Bandit and Fortify. Any flaws discovered during automated and manual quality assurance testing by the Blueprint Application Team, any vulnerabilities detected by Pyup.io's Python vulnerability database Safety DB;\nb. Tests and remediates all code flaws as required by documenting the flaws in Jira and tracking the resolution;\nc. Any update is performed per request of the System Owner;\nd. Document and log all remediation in Jira. The various source code scans are part of the CircleCI pipeline process.\n\nThe Blueprint ISSO reviews this control at least annually or whenever there is a significant change.",
                  },
                  {
                    uuid: "00c8e3cb-8bdf-4f40-b3e0-a9f7a160b27b",
                    "control-id": "si-2.2",
                    description:
                      "Blueprint utilizes monthly scans from the SOC VAT team to identity flaws and ensure patches are applied in accordance with the monthly patch process and ISVM process for formal FISMA reporting.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 36,
  },
  {
    id: 63,
    title: "blueprint gaps",
    description: "Blueprint Gaps Template",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "d72bc61e-6ca8-48f4-82bb-162d088dc755",
        metadata: {
          title: "Blueprint Gaps",
          version: "unknown",
          published: "2022-06-03T19:22:38.901346+00:00",
          "last-modified": "2022-06-03T19:22:38.901353+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "5e22d0ba-f27a-44cb-8902-34281457cc79",
            title: "Blueprint Gaps Template",
            description: "Blueprint Gaps Template",
            "control-implementations": [
              {
                uuid: "3dab72bd-f8c4-4e99-84ae-871a05250d0a",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "3cf50855-2c03-4130-827c-d9689eea8403",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3a59c032-024e-42be-9c3b-7f42d1dd7e69",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "07c55b18-9f76-4c13-ae99-c2d43a1f5a3e",
                        value: "No",
                      },
                    ],
                    "control-id": "ac-17.9",
                    description:
                      "The CMSSYSTEM provides the capability to expeditiously disconnect or disable remote access to the information system within one (1) hour. CMS provides the capability to expeditiously disconnect or disable remote access to the information system within one (1) hour. For CMSSYSTEM application access, the CMSSYSTEM Help Desk will work to disable remote access within 1 hour.",
                  },
                  {
                    uuid: "25a7533f-da84-44ad-ab60-587faaf1ebc5",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fb8cb00a-86bd-4379-b6ed-814afb4b9e9f",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "6e11de23-bbbe-4bc5-a93d-e9817f247369",
                        value: "No",
                      },
                    ],
                    "control-id": "ac-18",
                    description:
                      "If wireless access is authorized, CMS establishes usage restrictions, configuration/connection requirements, and implementation guidance for wireless access; Authorizes wireless access to CMSSYSTEM prior to allowing such connections; CMS ensures that the CMS CIO must approve and distribute the overall wireless plan for his or her respective organization; and Mobile and wireless devices, systems, and networks are not connected to wired HHS/CMS networks except through VPN/DHCP or unless specific authorization from HHS/CMS network management has been received. CMS monitors for unauthorized wireless access to information systems and prohibits the installation of wireless access points (WAP) to information systems unless explicitly authorized, in writing, by the CMS CIO or his/her designated representative. The policy defines the scope, support, configuration, responsibilities of wireless access for authorized and unauthorized access to CMSSYSTEM.",
                  },
                  {
                    uuid: "134dc278-b3ba-4bd6-929c-71be12b76e7a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e706027c-26fe-4dfe-a608-a22ff3f5238b",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "1b82a189-0491-46ef-b5c0-3a488a66af16",
                        value: "No",
                      },
                    ],
                    "control-id": "ac-18.1",
                    description:
                      "The policy defines the scope, support, configuration, responsibilities of wireless access for authorized and unauthorized access to  CMS approved systems such as CMSSYSTEM. There is no wireless access to CMSSYSTEM. If wireless access is explicitly approved, CMSSYSTEM protects wireless access to the system using encryption, and authentication of both users and devices through the seucrity controls implemented by EIDM/Portal.",
                  },
                  {
                    uuid: "515943f2-03b7-440d-88e7-871cfc1d36e3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "97d327ef-41ab-48e3-9ff9-bb889479ba0d",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "e734611d-8f41-4fb6-b4a1-113f7519aa4d",
                        value: "No",
                      },
                    ],
                    "control-id": "ac-19.5",
                    description:
                      "This control is N/A to CMSSYSTEM because the system is not designed to utilize mobile device technologies. There are no approved mobile devices for CMSSYSTEM. CMSSYSTEM does not manage or configure organization-controlled mobile devices.",
                  },
                  {
                    uuid: "c1a380cb-c51b-42c6-a120-23523e515597",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "30ece809-469d-4af4-9f71-57df42ec7375",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "6a60d5b0-e499-41d5-b403-1fe224102973",
                        value: "No",
                      },
                    ],
                    "control-id": "ir-2",
                    description:
                      "CMS provides incident response training to information system users consistent with assigned roles and responsibilities within ninety (90) days of joining. Incident response (contacting the CMS IT Service Desk to open a Service Now ticket) is an integral part of the test, and thus the training. All or a sub-set of end user incident response training is included in CMS’s annual awareness training. The Incident Training is consistent with the assigned roles and responsibilities outlined in the CMSSYSTEM Incident Response Plan (IRP).",
                  },
                  {
                    uuid: "09ad1200-d1e1-4723-95d8-936986670364",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1df12d07-92b4-4966-b87f-afd8df26f86e",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "4a36145c-f8f5-4540-a9ed-2a079864a2d2",
                        value: "No",
                      },
                    ],
                    "control-id": "pl-2",
                    description:
                      "The CMSSYSTEM System Security Plan (SSP) is consistent with the Risk Management Handbook (RMH) Procedures; and:\n\n shows the TRB-approved, layered architecture\n defines the authorization boundary for the application\n describes the operational context of the application in terms of missions and business processes\n provides the security categorization of the application including supporting rationale\n describes the operational environment for the application and relationships with or connections to other information systems\n provides an overview of the security requirements for the application\n does not identify any overlays, because none are used\n contains all the security controls in place\n was reviewed and approved by a Business Owner (BO) Representative prior to plan implementation\n\n  \n This SSP is\n\n distributed to the BO, all BO representatives, the System Owner (SO), DOTS leadership, the ISSO, the Contracting Officer's Representative (COR), and a representative for the Data Center in which the application resides; the document is also stored in CFACTS and on a DCCA folder accessible to all members of the DCCA team\n reviewed at least once every three hundred sixty-five (365) days\n updated minimally every three (3) years, to address current conditions or whenever there are significant changes to the application/environment of operation that affect security; when problems are identified during plan implementation or security control assessments; when the data sensitivity level increases; after a serious security violation due to changes in the threat environment; or before the previous security authorization expires\n\n It can only be modified by the DCCA Technical Writer under instruction of the CMCS DSG DBES ISSO or the CMS CMCS DSG DBES SO. The CMSSYSTEM System Security Plan (SSP) is consistent with the Risk Management Handbook (RMH) Procedures; and:\n\n shows the TRB-approved, layered architecture\n defines the authorization boundary for the application\n describes the operational context of the application in terms of missions and business processes\n provides the security categorization of the application including supporting rationale\n describes the operational environment for the application and relationships with or connections to other information systems\n provides an overview of the security requirements for the application\n does not identify any overlays, because none are used\n contains all the security controls in place\n was reviewed and approved by a Business Owner (BO) Representative prior to plan implementation\n was most recently reviewed by William Holland (DHHS/CMS/OA/DSG/DBES, ISSO) on 9/25/2019\n was most recently updated by Leo Haas (DCCA, Technical Writer and CFACTS ISSO CS) on 9/26/2019 under SR-938\n\n This SSP is:\n\n distributed to the BO, all BO representatives, the System Owner, DIS leadership, the Information System Security Officer (ISSO), the Contracting Officer's Representative (COR), and a representative for the Data Center in which the application resides; the document is also stored in CFACTS and on a DCCA folder accessible to all members of the DCCA team\n reviewed at least once every three hundred sixty-five (365) days\n updated minimally every three (3) years, to address current conditions or whenever there are significant changes to the application/environment of operation that affect security; when problems are identified during plan implementation or security control assessments; when the data sensitivity level increases; after a serious security violation due to changes in the threat environment; or before the previous security authorization expires\n\nIt can only be modified by the DCCA Technical Writer under instruction of the DCCA Project Manager after the CMS CMCS DSG DIS SO has entered an SR for this purpose, and the SR is approved by DIS leadership. CMSSYSTEM develops a System Security Plan (SSP) that is a mail merge of the information that is provided within CFACTS. The CMSSYSTEM System Security Plan (SSP) is consistent with the CMS System Security Plan procedure and includes the bullet points noted above.",
                  },
                  {
                    uuid: "22f51a8c-18c1-4481-8edf-fa9670c885a0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4a22e015-c226-42dc-b455-9061bae0e44c",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "17010422-bd44-458c-b51c-d8b5d187857e",
                        value: "No",
                      },
                    ],
                    "control-id": "pl-4.1",
                    description:
                      "CMSSYSTEM, through CMS, includes in the RoB, explicit restrictions on the use of social media/networking sites and posting organizational information on public websites. CMSSYSTEM restricts the use of social media/networking sites and posting organizational information on public websites. OC CMSSYSTEM: Explicit restrictions on the use of social media/networking sites are included in the CMS RoB.",
                  },
                  {
                    uuid: "a30c533a-f0c6-4f0b-a9d5-8b0db20a0990",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "35b23f2e-0ef1-4249-af9b-6d9e8444f825",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "175650be-7ee9-4ebc-a0f5-a9d0748d9068",
                        value: "No",
                      },
                    ],
                    "control-id": "ps-2",
                    description:
                      "CMS is responsible for initiating and adjudicating background investigations and security clearances commensurate with position sensitivity risk designation for both employees and contractors;\n c. Works with the Program COR and CMS HR to ensure that all individuals with\nsignificant security responsibilities possess, at a minimum, a Level 5 Public Trust;\n d. Works with the Program COR and CMS HR to ensure that individuals are designated\nto position-sensitivity levels that are commensurate with the responsibilities and risks associated with the position; and\n e. Reviews and, if necessary, updates position risk designations at least every\nthree (3) years or whenever a position’s duties are changed/revised/realigned and ensures that these risk designations are consistent with OPM policy and guidance. They also coordinate with the different CMS components to determine position sensitivity risk designations for all employee and contractor personnel receiving access to CMS data and/or facilities. CMS is responsible for initiating and adjudicating background investigations and security clearances commensurate with position sensitivity risk designation for both employees and contractors.",
                  },
                  {
                    uuid: "af23d4cd-953e-4be4-8faa-611c941bc768",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a106f4cd-0a09-4928-a999-3c0bbfc7a56a",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "f98068f6-67ee-403d-9164-4a17c8ee6a3e",
                        value: "No",
                      },
                    ],
                    "control-id": "ps-3",
                    description:
                      "It screens individuals prior to authorizing access to the CMSSYSTEM application; rescreens individuals periodically and anytime they move to a new position with a higher risk designation, in accordance with CMS Personnel Security Policy; conducts background investigations in a manner commensurate with OPM, HHS, and CMS Personnel Security policy and guidance; performs reinvestigations for active national security clearance in accordance with guidance provided by current personnel security policy; and refuses employees and contractors access to information systems until they have: \n 1. Additionally CMSSYSTEM staff undergoes Public Trust Clearances if dictated by CMS. Additionally, CMSSYSTEM staff undergoes Public Trust Clearances as dictated by CMS. c. Conducts background investigations in a manner commensurate with OPM, HHS, and CMS Human Resources (HR) policy and guidance;\n d. Performs reinvestigations in accordance with guidance provided by current personnel security policy; and\n e. Refuses employees and contractors access to information systems until they have: 1.",
                  },
                  {
                    uuid: "3ae59df5-7e5b-4b70-b794-39559e917cdd",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0ecbdc6d-d6a7-4022-bf14-7d1c37a8aec4",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "c5df1037-7519-4038-a4c4-73afd75bcfdc",
                        value: "No",
                      },
                    ],
                    "control-id": "ps-4",
                    description:
                      "Upon termination of individual employment, CMS and all CMSSYSTEM supporting contractors revoke system and physical access, conduct exit interviews, retrieve all security-related CMS information system related property, retains access to CMS information and information systems formally controlled by the terminated individual, and immediately escorts the terminated employee out of the organization. In line with CMS policies and procedures, upon termination of individual employment, CMS disables information system access in accordance with Implementation Standard 1; Terminates/revokes any authenticators/credentials associated with the individual; conducts exit interviews that include a discussion of non-disclosure of non-disclosure of information security and privacy information; Retrieves all security-related organizational information system-related property; Retains access to organizational information and information systems controlled by the terminated individual; Notifies defined personnel or roles (defined in the applicable security plan) within one (1) day calendar day; and immediately escorts employees terminated for cause out of the organization. b. Terminates/revokes any authenticators/credentials associated with the individual;\n c. Conducts exit interviews that include a discussion of non-disclosure of\ninformation security and privacy information;\n d. Retrieves all security-related organizational information system-related\nproperty;\n e. Retains access to organizational information and information systems formerly\ncontrolled by the terminated individual;\n f. Notifies defined personnel or roles (defined in the applicable security\nplan) within one (1) calendar day; and\n g. Immediately escorts employees terminated for cause out of the organization\nif the contractor workplace is a CMS facility.",
                  },
                  {
                    uuid: "74419737-8428-4e5e-a62f-4a53214d8c00",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9225234a-049c-4bb7-8837-a0ba6a5ffadb",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "24d4dfaa-f2b8-4c5a-b8ec-e38d3676458c",
                        value: "No",
                      },
                    ],
                    "control-id": "ps-5",
                    description:
                      "If a member of the CMSSYSTEM Project Team were to transition to a different role in the CMSSYSTEM project, or off of the CMSSYSTEM project to work on another project, DCCA will perform the following tasks: • review and confirm ongoing operational need for current logical and physical access authorizations to information systems/facilities • initiate the following transfer or reassignment actions during the formal transfer process: re-issue appropriate information system-related property such as keys, identification cards, and building passes; notify security management; close obsolete accounts and establishing new accounts; reevaluate logical and physical access controls within 30 days when an employee moves to a new position of trust • modify access authorization as needed to correspond with any changes in operational need due to reassignment or transfer. If a member of the CMSSYSTEM Project Team were to transition to a different role in the CMSSYSTEM project, or off the CMSSYSTEM project to work on another project, DCCA will perform the following tasks:\n\n review and confirm ongoing operational need for current logical and physical\naccess authorizations to information systems/facilities\n initiate the following transfer or reassignment actions during the formal transfer\nprocess: re-issue appropriate information system-related property such as keys, identification cards, and building passes; notify security management; close obsolete accounts and establishing new accounts; reevaluate logical and physical access controls within 30 days when an employee moves to a new position of trust\n modify access authorization as needed to correspond with any changes in operational\nneed due to reassignment or transfer. If a member of the CMSSYSTEM Project Team were to transition to a different role in the CMSSYSTEM project, or off of the CMSSYSTEM project to work on another project, DCCA will perform the following tasks:\n\n review and confirm ongoing operational need for current logical and physical\naccess authorizations to information systems/facilities\n initiate the following transfer or reassignment actions during the formal transfer\nprocess: re-issue appropriate information system-related property such as keys, identification cards, and building passes; notify security management; close obsolete accounts and establishing new accounts; reevaluate logical and physical access controls within 30 days when an employee moves to a new position of trust; modify access authorization as needed to correspond with any changes in operational need due to reassignment or transfer.",
                  },
                  {
                    uuid: "6d525ce2-adca-46c2-80a9-dcb5f6e4d686",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8eca83b7-b458-4b17-8ab8-c20cae7dc8af",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "dd65e262-7de5-4058-80c6-d13d7a0cb162",
                        value: "No",
                      },
                    ],
                    "control-id": "ps-6",
                    description:
                      "CMSSYSTEM management and CMS review and update access agreements as part of the system security authorization or whenever support contracts are renewed or extended. CMS requires users to execute access agreements appropriate to their system access prior to granting access, and no less frequently than annually thereafter. CMSSYSTEM Contracting Officer Reprentative (B. Blunt) and ISSO (W. Holland) develops and documents access agreements for CMSSYSTEM and supportin systems;b  Reviews and updates the access agreements as part of the system security authorization or when a contract is renewed or extended, but minimally within every three hundred sixty-five (365) days, whichever occurs first; andc.",
                  },
                  {
                    uuid: "b875bafc-e4b5-4a32-801e-6d18696933e9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fc99f691-0a81-466e-8866-3c21d9429f0b",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "b561e68a-9401-445c-987d-d5c864491061",
                        value: "No",
                      },
                    ],
                    "control-id": "ps-7",
                    description:
                      "OC CMSSYSTEM:  In Place\n Part a Application [The CMS OC organizatoin: a. Establishes personnel security\nrequirements including security roles and responsibilities for third-party providers ; b. Requires third-party providers to comply with personnel security policies and procedures established by the organization; c. Documents personnel security requirements; d. Requires third-party providers to notify Contracting Officers or Contracting Officer Representatives (via the roster of contractor personnel) of any personnel transfers or terminations of third-party personnel who possess organizational credentials and/or badges, or who have information system privileges within seven (7) calendar days; and e. Monitors provider compliance.] CMSSYSTEM staff who are contractors must adhere to the CMS third-party personnel security policies and procedures. Contractors are provided with minimal system and physical access, and agree to and support the CMS information security requirements.",
                  },
                  {
                    uuid: "ee6f8f84-0170-446c-80d3-d1009e41723f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4c0f1f27-9a20-49f0-b591-36d8edef0bbe",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "f009dd7d-7d15-4eaf-b5e9-84537fa5c03a",
                        value: "No",
                      },
                    ],
                    "control-id": "ps-8",
                    description:
                      "CMS employs a formal sanctions process for individuals failing to comply with established information security policies and procedures; and\n b. Notifies defined personnel or roles (defined in the applicable security\nplan) within defined time period (defined in the applicable security plan), not to exceed three calendar days for systems designated as High impact; seven calendar days for systems designated as Moderate impact; and thirty calendar days for systems designated as Low impact when a formal employee sanctions process is initiated, identifying the individual sanctioned and the reason for the sanction. c. Depending on the severity of failing to comply with established information security policies and procedures; The CMSSYSTEM application team managers may impose additional sanctions up to termination. CMS developed security policies and procedures with disciplinary actions for possible policy violations.",
                  },
                  {
                    uuid: "60ce233e-123c-4436-80d6-847198602b89",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "81bce2a3-c41e-4f01-b7f1-2893ac21428f",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "fce13e2d-55c7-4b3d-91e3-8218b1c39a34",
                        value: "No",
                      },
                    ],
                    "control-id": "ra-2",
                    description:
                      "Security categorization is documented in this CMSSYSTEM System Security Plan, which has been approved by CMS. b. Documentation of CMSSYSTEM categorization with supporting rationale is contained in the Information Types and Information System Categorization Sections of the System Security Plan; and\n c. CMSSYSTEM security categorization decision is reviewed and approved by the\nBusiness Owner, System Maintainer and ISSO as part of the continuous monitoring and annual assessment process of CMSSYSTEM. CMSSYSTEM *Response*  CMS OC CMSSYSTEM:  In Place:\n a. The OC CMSSYSTEM team categorized the OC CMSSYSTEM system with an overall\nsecurity categorization of MODERATE using the CMS Security Categorization Worksheet Tool with guidance from the CMS Risk Management Handbook Volume II, Categorizing an Information System, based on FIPS PUB 199 and NIST SP 800-60 Rev. 1 Volumes I and II.",
                  },
                  {
                    uuid: "61406b0a-2f77-4744-bd80-be6fa59c9e5e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e36e0a5a-5e54-4f9c-ad88-f7c135f46cb0",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "0814f106-249c-4bc5-8230-848c9e91a749",
                        value: "No",
                      },
                    ],
                    "control-id": "ra-3",
                    description:
                      "CMS conducts an assessment of risk, including the likelihood and magnitude of harm, from the unauthorized access, use, disclosure, disruption, modification, or destruction of the information system and the information it processes, stores, or transmits; conducts an E-Authentication Risk Assessment (ERA), as required, on systems and determines e-authentication assurance levels; documents risk assessment results in the applicable security plan; reviews risk assessment results within every 365 days; disseminates risk assessment results to affected stakeholders, Business Owner(s), and the CMS ISSO; and updates the risk assessment before issuing a new authority to operate (ATO) package or within every 3 years, or whenever there are significant changes to the information system or environment of operation authorization state of the system. CMSSYSTEM technical staff conducts risk assessments, including the likelihood and magnitude of harm, from the unauthorized access, use, disclosure, disruption, modification, or destruction of the information system and the information it processes, stores, or transmits; documents risk assessment results in CFACTS; reviews risk assessment results monthly; disseminates risk assessment results to technical and security staff; and the ISSO or designee updates the risk assessment whenever there are significant changes to the information system or environment of operation (including the identification of new threats and vulnerabilities), or other conditions that may impact the security state of the system. The Risk Assessment is reviewed and updated at least annually or whenever significant changes occur that may affect the security or accreditation of CMSSYSTEM. CMSSYSTEM security personnel performs Risk Assessment prior to authorization documented in CMSSYSTEM ISRA.",
                  },
                  {
                    uuid: "c3273b3a-762e-4649-9327-09eee8131319",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0a68a8c7-3155-4abf-bab4-e311b3c74fc1",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "66643cc6-7431-4e9b-a2b1-548e9143fd6a",
                        value: "No",
                      },
                    ],
                    "control-id": "sc-15",
                    description:
                      "The CMSSYSTEM application does not use collaborative computing devices, according to our understanding of how the term is used in this context. CMSSYSTEM does not implement collaborative computing devices. CMSSYSTEM System prohibits remote activation of collaborative computing devices with no exceptions.",
                  },
                  {
                    uuid: "9b0fbef2-32fe-46cf-acfd-419b814d3881",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "409e7396-c137-4df3-ac2b-87eae5a464a6",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "8eef3ed3-a57b-47d2-8416-9295bdafdd11",
                        value: "No",
                      },
                    ],
                    "control-id": "sc-15.1",
                    description:
                      "The CMSSYSTEM application does not use collaborative computing devices, according to our understanding of how the term is used in this context. CMSSYSTEM does not utilize any collaborative computing devices. N/A – CMSSYSTEM does not utilize collaborative computing.",
                  },
                  {
                    uuid: "e747ee87-5016-44b9-87df-ce97677be3fa",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "abc5f99f-752f-453f-a59b-b1871359834a",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "9cf218a0-3838-44c3-bcc1-644fb2c58614",
                        value: "No",
                      },
                    ],
                    "control-id": "sc-19",
                    description:
                      "Voice over Internet Protocol (VoIP) technologies are not currently utilized in the CMSSYSTEM system and their use has not been authorized. CMS prohibits the use of VoIP technologies, unless explicitly authorized, in writing, by the CIO  or his/her designated representative. The organization prohibits the use of Voice over Internet Protocol (VoIP) technologies, unless explicitly authorized, in writing, by the CMS CIO or his/her designated representative.",
                  },
                  {
                    uuid: "85d98116-ff84-4d25-a8ad-b20fa39f51cf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5199b100-06a3-4ab7-a817-9f5cb181c4bf",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "df35effa-dc39-47a3-b3d1-ca953606326e",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-3",
                    description:
                      "The CMSSYSTEM team:\n a. Ensures that all capital planning and investment requests include the resources\nneeded to implement the Security for all CMS systems to include the CMSSYSTEM system and documents all exceptions to this requirement;\n  b. Leverages CMS’ ability to employ a business case/Exhibit 300/Exhibit 53\nto record the resources required; and\n  c. Ensures that Information Security resources are available for expenditure\nas planned which is under the oversight of multiple governance boards to include: Strategic Planning Management Council (SPMC); IT Investment Review Board (ITIRB); Technical Review Board (TRB); and Data Governance Board (DGB). CMS and CMSSYSTEM Management ensures that all capital planning and investment requests include the resources needed to implement the information security program and documents all exceptions to this requirement, employs a business case/Exhibit 300/Exhibit 53 to record the resources required; and ensures that information security resources are available for expenditure as planned CMSSYSTEM Business owner is responsible for ensuring that capital planning and investment requests include the resources needed to implement the information security components within the CMSSYSTEM system",
                  },
                  {
                    uuid: "27a5731b-9ac3-40e3-a37d-0183968093ae",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a8b5f14a-5919-487d-a695-6601908bae91",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "4126e8ac-e122-4185-9590-39a3c947e793",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-5",
                    description:
                      "CMSSYSTEM System Inventory is maintained by AWS/CCS and reported to the CMSSYSTEM Program Manager and OCISO as a function of the Cloud Computing Systems Service Agreement. CMSSYSTEM System Inventory is maintained by AWS/GDIT and reported to the CMSSYSTEM Application Team Lead, ISSO and OCISO as a function of the Cloud Service Agreement. CMSSYSTEM maintains it's own inventory.",
                  },
                  {
                    uuid: "f51d18dc-7834-4cc2-96c1-c91e21d52ddb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f1c75f52-9e30-4d09-bed8-4f55c4361fe4",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "3b7b9825-10ca-475c-80a9-b363719d6610",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-8",
                    description:
                      "CMSSYSTEM maintain the System Security Plan, System Design Document, hardware software inventory and contingency plan which describe critical infrastructure and key resources protection plan. The CMSSYSTEM team works with CMS and our industry partners to address information security issues in the development, documentation, and updating of the critical infrastructure and key resources protection plan. Control Implementation Status:\n Planned\n This item is a CMS centric control.",
                  },
                  {
                    uuid: "029d18f2-b6e9-49b4-97aa-3eb399cd71c0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "26d27c0a-5f25-4722-98e2-90b0e128c912",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "0508bce4-0b8f-478a-bcf4-7823a750f9b4",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-9",
                    description:
                      "The strategy to manage risk is documented in the CMS Risk Management Handbook (RMH). OC CMSSYSTEM:\n In Place: The CMS OC organization: a. Develops a comprehensive strategy to\nmanage risk to organizational operations and assets, individuals, other organizations, and the Nation associated with the operation and use of information systems; b. Implements the risk management strategy consistently across the organization; and c. Reviews and updates the risk management strategy as required, to address organizational changes\n The CMS risk management strategy and related procedures are contained in the\ninformation security library (http://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html). b. Implements the risk management strategy consistently across the organization; and\n  c. Reviews and updates the ISRA at least every three hundred and sixty-five\n(365) days or as required, to address relevant changes within the CMSSYSTEM system.",
                  },
                  {
                    uuid: "5dc8f8c4-5816-483f-bcf0-772c88382713",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fa2b18f3-7b87-4f58-9110-97378de108ad",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "b776baf7-f903-4767-97f5-7daecedba0c2",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-10",
                    description:
                      "The CMSSYSTEM team:\n  a. Manages (i.e., documents, tracks, and reports) the security state of the\nsystem through CMS security authorization processes and the FedRAMP process for the AWS infrastructure in accordance with the CMS ARS Manual;\n  b. Section 3 of the CMSSYSTEM Security Plan (SSP) designates individuals to\nfulfill specific roles and responsibilities within the organizational risk management process and is fully integrated into the organization-wide risk management program and security authorization processes. In addition to the inherited common control, security authorization of CMSSYSTEM is conducted by CMS in accordance with the CMS Information Security Certification and Accreditation (C&A) Program Procedure and CMS IS Authorization to Operate Package Guide. OC CMSSYSTEM\n In Place: The CMS OC organization: a. Manages (i.e., documents, tracks, and\nreports) the security state of organizational information systems and the environments in which those systems operate through security authorization processes; b. Designates individuals to fulfill specific roles and responsibilities within the organizational risk management process; and c. Fully integrates the security authorization processes into an organization-wide risk management program.",
                  },
                  {
                    uuid: "314882cb-1029-467c-8fac-cfade6e92ae5",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "72dab645-58ac-4ee8-a7d5-9044970344b8",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "28b29113-81b5-4dd7-8966-c428a946eabf",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-11",
                    description:
                      "CMSSYSTEM: CMS defines mission/business processes with consideration for information security and the resulting risk to organizational operations, organizational assets, individuals, other organizations, and the Nation; and determines information protection needs arising from the defined mission/business processes and revises the processes as necessary, until achievable protection needs are obtained. CMS works to define their mission/business processes with consideration for information security and the resulting risk to organizational operations, organizational assets, individuals, other organizations, and the Nation; and determines information protection needs arising from the defined mission/business processes and revises the processes as necessary, until achievable protection needs are obtained. The CMSSYSTEM team leverages the business process definition of CMS who:  \n a. Defines its mission/business processes with consideration for information security and the resulting risk to organizational operations, organizational assets, individuals, other organizations and the Nation; and \n b. Determines information protection needs arising from the defined mission/business processes and revises the processes as necessary, until achievable protection needs are obtained.",
                  },
                  {
                    uuid: "7a7eee6d-03d0-42bc-8936-80ebb24071a2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "880a3bc0-0769-423b-9e97-f509507aa297",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "07c63bf9-91f5-42b5-85d1-aa645008dad3",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-13",
                    description:
                      "The CMS Enterprise Information Security Group promotes awareness among staff for security risks associated with their duties and activities through reoccurring computer role-based training requirements and training classes, which meet applicable federal and agency requirements relating to the security of CMS information systems. CMSSYSTEM: CMS offers a training library to allow for the information security workforce to development and obtain role based training. As well as the annual security training provided by CMS, the CMSSYSTEM development and maintenance contractor also provide their staff with the proper training and security awareness for security risk associated with current threats in the environment.",
                  },
                  {
                    uuid: "f2d6f654-c079-4192-8803-130e841bc799",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "eca8318d-6501-4ca8-a1bc-34a1062986cf",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "900160d2-0548-4fbe-b257-602e573239a2",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-14",
                    description:
                      "CMS ensures that organizational plans for conducting security testing, training, and monitoring activities associated with organizational information systems are developed and maintained and executed in a timely manner. The CMSSYSTEM team:  \n  a. Leverages existing CMS’ plans and processes for conducting security assessments and annual adaptive capabilities testing, annual security awareness training, and continuous monitoring activities. CMSSYSTEM Business Owner  implements a process for ensuring that organizational plans for conducting security testing, training, and monitoring activities associated with organizational information systems:1.",
                  },
                  {
                    uuid: "f2eb6f14-67df-4290-b3d8-614d362a8eaf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "35a96ac4-a501-43ca-a5ad-231a894112b0",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "3d1f4f43-310b-4872-ad07-e68fa62eadf9",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-15",
                    description:
                      "Status: In Place\n The CMSSYSTEM team leverages established CMS institutionalized contact with selected groups and associations within the security community such as the SANS Institute and the Global Information Assurance Certification (GIAC) organization\n a. To facilitate ongoing security education and training for organizational personnel;\n  b. Maintain currency with recommended security practices, techniques, and technologies and \n c. To share current security-related information including threats, vulnerabilities, and incidents. The CMSSYSTEM ISSO establishes and institutionalizes contact with selected groups and associations within the security community:a. To facilitate ongoing security education and training for organizational personnel;b. CMS establishes and institutionalizes contacts with selected groups and associations within the security community to facilitate ongoing security education and training for organizational personnel; to maintain currency with recommended security practices, techniques, and technologies; and to share current security-related information including threats, vulnerabilities, and incidents.",
                  },
                  {
                    uuid: "671f1f50-b7aa-46b8-893a-e7eb2887ed5e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "355125a3-95d8-4a3a-adf1-8729a29feaca",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "a2e2a4bd-41fd-411b-930b-366ba7031da5",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-16",
                    description:
                      "CMS implements a threat awareness program, in addition to Annual Security Awareness Training for all staff and contractors, that includes a cross-organization information-sharing capability. The CMSSYSTEM team leverages existing CMS threat awareness program that includes a cross-organization information-sharing capability. The CMS ISPG manages the high-level CMS Threat Awareness Program.",
                  },
                  {
                    uuid: "0ebbd32c-2949-47b8-bd9e-7a07762d965c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "22e651f1-f682-46cd-81da-091876d3f6d8",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "b3e2d13a-0000-420f-9ebe-c36645fa5e1c",
                        value: "No",
                      },
                    ],
                    "control-id": "di-2",
                    description:
                      "The CMS Privacy Office has established processes to ensure the integrity of PII. CMSSYSTEM was designed to protect PII and related information from disclosure. The CMSSYSTEM team will align to established CMS privacy policies and procedures as it relates to PII/PHI validations.",
                  },
                  {
                    uuid: "ffc170bb-3e9c-408c-88ad-1c45629a4297",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4d1e66f7-bd1b-49fa-8ecb-53eb7d1b46bc",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "45e6a865-37ed-42e2-93dc-b7d106a37747",
                        value: "No",
                      },
                    ],
                    "control-id": "dm-3",
                    description:
                      "As such, each CMS system is responsible for maintaining the security of the PII and corresponding PIA. CMSSYSTEM will not use PII for testing, training, and research; and (ii) CMSSYSTEM implements controls to protect PII used for testing, training, and research. N/A - This is not required for CMSSYSTEM because the PII is only being used to authenticate users; PII is not used for testing training research.",
                  },
                  {
                    uuid: "53395904-7459-453f-91c8-95e61aa6b299",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c2ea4b26-ff9d-41e8-a06b-71ef0cbd4020",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "2b7e4564-257c-4df6-ae97-86b79cac9089",
                        value: "No",
                      },
                    ],
                    "control-id": "ip-2",
                    description:
                      "Individuals requesting access to CMSSYSTEM must provide minimal PII (name, email and cell number) which is collected and documented through EIDM. The CMSSYSTEM System collects or stores Personally Identifiable Information (PII) i.e. names, email address, phone number and mailing addresses. CMS is responsible for obtaining the consent by individuals for the collection, use, maintaining, and sharing of personally identifiable information (PII).",
                  },
                  {
                    uuid: "dab672d6-9cd1-4279-aeff-d87a47451df3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5f52f7e2-9f5e-4b16-8ee9-4fa46a123a5a",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "bf305c67-9a25-42e2-9a4b-37186217c593",
                        value: "No",
                      },
                    ],
                    "control-id": "ip-3",
                    description:
                      "CMS is responsible for obtaining the consent by individuals for the collection, use, maintaining, and sharing of personally identifiable information (PII). The CMSSYSTEM System collects or stores Personally Identifiable Information (PII) i.e. names, email address, phone number and mailing addresses. CMS Privacy Office, as the cognizant organization, implements the Privacy Program, and oversees the listed control elements:\n a. Provides a process for individuals to have inaccurate, incomplete, or out-of-date\nPII maintained by the organization corrected or amended, as appropriate; and\n b. Establishes a process for disseminating corrections or amendments of the\nPII to other authorized users of the PII, such as external information sharing partners and, where feasible and appropriate, notifies affected individuals that their information has been corrected or amended.",
                  },
                  {
                    uuid: "e23c45af-a10c-4895-9cea-56ca3a92d5b7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bda85efb-25eb-485c-b41c-aab7cdd3e28f",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "3a374df1-530b-4878-a01d-4453b6f97712",
                        value: "No",
                      },
                    ],
                    "control-id": "ip-4.1",
                    description:
                      "CMS is responsible for obtaining the consent by individuals forthe collection, use, maintaining, and sharing of personally identifiable information (PII) and as such are responsible for a process for receiving and responding to complaints, concerns, or questions from individuals about the organizational privacy practices. CMS is responsible for obtaining the consent by individuals for the collection, use, maintaining, and sharing of personally identifiable information (PII) and as such are responsible for a process for receiving and responding to complaints, concerns, or questions from individuals about the organizational privacy practices. The CMSSYSTEM Team will align to the established CMS policies and procedures to comply with privacy of PII/PHI.",
                  },
                  {
                    uuid: "809763b2-1681-4625-9b6b-e6c9159bc050",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2c05c98e-43b9-43fb-84c1-395d8d9ed972",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "ea7f818a-acf5-4e5d-997c-1f79875161dc",
                        value: "No",
                      },
                    ],
                    "control-id": "se-1",
                    description:
                      "The CMSSYSTEM team will follow established CMS policy and procedure as it relates to the collection and storage of PHI/PII in addition to : a. Establishes, maintains, and updates, no less often than once every three hundred sixty-five (365) days, an inventory that contains a listing of all programs and information systems identified as collecting, using, maintaining, or sharing PII; and b. Provides each update of the PII inventory to the CMS Senior Official for Privacy (SOP) and the CMS CISO no less often than once every three hundred sixty-five 365 days to support the establishment of information security requirements for all new or modified information systems containing PII. CMS OC provides this listing to the Senior Official for Privacy and the Chief information Security Officer to support the establishment of information security requirements for all new or modified information systems containing PII. The CMSSYSTEM Team establishes, maintains, and updates, within every three hundred sixty-five (365) days, an inventory that contains a listing of all programs and information systems identified as collecting, using, maintaining, or sharing personally identifiable information (PII); and provides each update of the PII inventory to the Senior Official for Privacy and the Chief information Security Officer to support the establishment of information security requirements for all new or modified information systems containing PII.",
                  },
                  {
                    uuid: "82e3206d-710f-42e0-8fd7-3b6393ae2878",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "cd307b33-ae65-4dc2-a915-02174539f9a7",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "202761be-032a-4c98-a555-8d904073d73b",
                        value: "No",
                      },
                    ],
                    "control-id": "ir-3",
                    description:
                      "CMSSYSTEM staff participates in annual test and/or exercises related to incident response capability for the information system. Results of incident response tests/exercises are documented in the Incident Response Plan. CMSSYSTEM will test its incident response capability annually using NIST SP 800-61, and will review, analyze, and run simulations to determine the organization’s incident response effectiveness, and documents its findings.",
                  },
                  {
                    uuid: "352ec818-b7bb-4db5-878a-53be1f3f151c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "aef46f18-e1a4-4e1e-9a49-b66b180ee5d3",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "bb5c1ce4-2a3b-48bc-b05c-2d9e2afbfe6d",
                        value: "No",
                      },
                    ],
                    "control-id": "ir-3.2",
                    description:
                      "CMSSYSTEM Staff, through CMS, coordinates incident response testing with organizational elements responsible for related plans. CMS along with stakeholders defined incident response in Contingency Plans and Incident Response Plans as well as conduct and report Tabletop Exercises annually. CMSSYSTEM coordinates incident response testing with organizational elements responsible for related plan.",
                  },
                  {
                    uuid: "92683c91-6ae5-472f-9f66-5b6ca9317f47",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "856fd8af-7b23-49e7-b1f1-3b4b9b9d3254",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "bd87881f-2477-47b9-b330-aeb2b856f3f7",
                        value: "No",
                      },
                    ],
                    "control-id": "pm-12",
                    description:
                      "The CMSSYSTEM team coordinates with cross-disciplined insider threat incident handling teams for incident handling of insider-threats with the supporting CMS organizational entities and programs such as the CMS Cybersecurity Integration Center (CCIC), Security Operations Center/Incident Response Team; and Employee Monitoring/Insider Threat (CMS-EMP) actions. CMS implements an insider threat program that includes a cross-discipline insider threat handling team. The CMS Counterintelligence and Insider Threat Program will contact as needed across the organization, specifically with the following:  o Mission/Business Owners o Information System Owners (ISO) o Office of Human Capital (OHC) o Office of Acquisitions and Grant Management (OAGM) o Personnel/Physical Security Offices (OSSO) o Operations Personnel o Cyber Risk Advisors (CRA)  Incident handling for insider threat incidents (including preparation, detection and analysis, containment, eradication, and recovery) requires close coordination among a variety of organizational components or elements to be effective.",
                  },
                  {
                    uuid: "8e507bc9-9626-49ee-9041-3c273f41dafa",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8ec5ca67-5371-4703-8180-904731187e41",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "c58e697d-39ce-4546-93c8-5556f273e248",
                        value: "No",
                      },
                    ],
                    "control-id": "ap-1",
                    description:
                      "The legal authority for CMSSYSTEM to collect PII is documented in Privacy Impact Assessment (PIA) which is maintained in CFACTS and posted on Department of Health and Human Services (DHHS) PIA web page ( http://www.hhs.gov/pia ) . The authority to collect PII is documented in the System of Records Notice (SORN) and Privacy Impact Assessment (PIA); The PIA defines that the PII collected, used, maintained, or disseminated by the information system is related to and compatible with the purpose and scope described in CMSSYSTEM system documentation. Other FISMA applications consuming CMSSYSTEM as a GSS maintain a separate PIA documenting the applications purpose and authority to collect PII.",
                  },
                  {
                    uuid: "cfb918c2-aca6-4a38-8039-f4420a0b5861",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "178ac07d-84ec-4b0e-83b4-458690bcdc29",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "e03eada1-0326-418e-bf00-bbdf5a838f8c",
                        value: "No",
                      },
                    ],
                    "control-id": "ap-2",
                    description:
                      "The legal authority for CMSSYSTEM to collect PII is documented in Privacy Impact Assessment (PIA) which is maintained in CFACTS and posted on Department of Health and Human Services (DHHS) PIA web page ( http://www.hhs.gov/pia ) . The CMSSYSTEM System collects or stores Personally Identifiable Information (PII). CMSSYSTEM submitted a Privacy Impact Assessment (PIA) to HHS for document purpose(s) where PII is collected, used, maintained, and shared.",
                  },
                  {
                    uuid: "6e785622-bfd7-4db8-8823-133e886491d7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f7305917-ef17-4942-b6e9-95e474cc2f73",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "4cd1cef5-d342-4fb8-95ee-c3f35b709515",
                        value: "No",
                      },
                    ],
                    "control-id": "ar-7",
                    description:
                      "The CMSSYSTEM team designed the CMSSYSTEM tool to support privacy by automating privacy controls to the extent feasible, integrating and meeting privacy requirements throughout the CMS Life Cycle, and incorporating privacy concerns into reviews of significant changes to HHS/CMS systems, networks, physical environments, and other agency infrastructures. CMS designs information systems to support privacy by automating privacy controls to the extent feasible, integrating and meeting privacy requirements throughout the CMS Life Cycle, and incorporating privacy concerns into reviews of significant changes to HHS/CMS systems, networks, physical environments, and other agency infrastructures. The CMSSYSTEM PIA ensures the CMSSYSTEM application follows CMS direction in providing a concrete way of ensuring information systems are behaving in a way that is intended to achieve privacy objectives.",
                  },
                  {
                    uuid: "df38b0c0-b2b8-4141-97a2-0c3f8127f8eb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "20121d49-75b1-4297-9358-3d67bd7abf28",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "5aa3607a-129b-4b38-85b0-3ad4afbded5f",
                        value: "No",
                      },
                    ],
                    "control-id": "di-1.1",
                    description:
                      "The CMSSYSTEM ISSO and technical team will align to the already established CMS privacy/confidentiality policies, standards and processes as they relate to individual or individual’s authorized representative validate PII during the collection process. The CMSSYSTEM System collects or stores Personally Identifiable Information (PII). The CMSSYSTEM application relies on guidance from CMS Risk Management Handbook Chapter 19 Privacy, and the CMS Information Systems Security and Privacy Policy (IS2P2) for implementation of Authority and Purpose Policy and Procedures\n CMS Privacy Office, as the cognizant organization, implements the Privacy Program,\nand oversees the control elements receives validated data sets from CMSSYSTEM who performs all data validation\n Validating PII that is used to determine a right, benefit, or privilege for\nan individual ensures that the determination is based on accurate, timely, and relevant information.",
                  },
                  {
                    uuid: "18a3e1af-6a0d-4682-b406-7eff0e3c41ef",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "02a05298-980d-4451-ad37-fea3a12fdb11",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "db234eaa-80bc-405f-b644-364c5763f0b8",
                        value: "No",
                      },
                    ],
                    "control-id": "di-1.2",
                    description:
                      "The CMSSYSTEM System collects or stores Personally Identifiable Information (PII). CMSSYSTEM users provide their own PII into the CMSSYSTEM system, HR personnel can then validate the correctness of the PII Individuals requesting access to CMSSYSTEM must provide minimal PII (name, email and cell number) which is collected and revalidated through EIDM.",
                  },
                  {
                    uuid: "b66c509d-4805-44b8-8480-9166fc79d3cb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a6a1661f-bf24-4166-8fdb-d566e9022d80",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "74001b43-bd6f-4ade-b015-941f1e373d4a",
                        value: "No",
                      },
                    ],
                    "control-id": "di-2.1",
                    description:
                      "The CMS Privacy Office oversees all organizational Computer Matching Agreements to ensure that those agreements comply with computer matching provisions stated in the Privacy Act. The computer match agreement (CMA) is published with such behavior on CMSSYSTEM. In support of this principle, CMS has determined that computer-matching agreements (CMAs) are appropriate for publication on its website.",
                  },
                  {
                    uuid: "5a83e563-55d2-4771-959f-30eb7349d623",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c798d5f0-810f-4512-9657-2394b819142c",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "574c3225-ee66-4d06-8b42-230b64756be8",
                        value: "No",
                      },
                    ],
                    "control-id": "dm-2",
                    description:
                      "b. The CMS System Owner/Maintainer disposes of destroys, erases, and/or anonymizes the PII, regardless of the method of storage, in accordance with a NARA approved record retention schedule and in a manner that prevents loss, theft, misuse, or unauthorized access. a. The CMS System Owner/Maintainer retains each collection of PII for the time period specified by the NARA – approved records schedule in consultation with the Records Management Officer to fulfill the purpose(s) identified in the notice or as required by law. In addition the ISSO and CMSSYSTEM Team have reviewed and align to the practices of (i) CMSSYSTEM retains each collection of PII no longer than the greater of (i) the minimum time period allowable by law, or (ii) the minimum time necessary to fulfill the purpose(s) identified in relevant notices or as required by business needs;(ii) the CMSSYSTEM team disposes of, destroys, erases, and/or anonymizes the PII, regardless of the method of storage, in accordance with a NARA-approved record retention schedule and in a manner that prevents loss, theft, misuse, or unauthorized access; and (iii) the CMSSYSTEM team uses legally compliant techniques or methods (as defined in NIST SP 800-88 as amended) to ensure secure deletion or destruction of PII (including originals, copies, and archived records).Determine if: (i) The CMSSYSTEM system retains PII only if it is pre-determined to be necessary in the authorized data store(s); (ii) The CMSSYSTEM system has a mechanism for tracking the retention periods associated with the PII it contains; (iii) The CMSSYSTEM system retains PII no longer than the length of time specified in the applicable Records Control Schedules; (iv) Backup schedules are designed in accordance with the applicable Records Control Schedules, for systems that handle the backup process; (v) All instances and formats of each PII data element are locatable and must be deleted when any one instance of that PII is deleted; (vi) The system supports clean-up of temporary storage it generates in a manner consistent with the retention needs of the system; and(vii) The system propagates all authorized deletions of PII to target systems in accordance with requirements, for systems that share PII with other systems.",
                  },
                  {
                    uuid: "f36c36ff-e038-4730-b454-09c1eab9b200",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a9639384-1aef-4d7f-a5f9-48380a62401a",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "710f9a63-e346-4cce-8e6a-9886f568a7c1",
                        value: "No",
                      },
                    ],
                    "control-id": "dm-2.1",
                    description:
                      "CMSSYSTEM is set up to record transaction history, thereby ensures that if PII is transferred, it is recorded. CMSSYSTEM records in its database the date and time when PII is collected, created, updated, deleted, or archived. CMSSYSTEM documents the data transfer from the SAM databaser to record the dates and or updates of PII data.",
                  },
                  {
                    uuid: "1a650e82-6ee2-4536-b101-f93a53caca3e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9268c4a9-91da-472e-aa7f-b18b7b53c481",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "2b7c3731-cafc-45be-b08b-f67f259b3294",
                        value: "No",
                      },
                    ],
                    "control-id": "dm-3.1",
                    description:
                      "Where feasible, CMSSYSTEM will use techniques to minimize the risk to privacy of using PII for research, testing, or training. CMS can minimize risk to privacy of PII by using techniques such as de-identification. CMS employs anonymizing PII as a technique to reduce risk and decreases the potential impact if the PII is compromised.",
                  },
                  {
                    uuid: "b5d731f5-c751-4dc2-8852-908dedfeba89",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c593c4ca-6faa-4b20-be56-4d2b70a523a1",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "ea8448ee-e948-413c-8204-3c28755bec28",
                        value: "No",
                      },
                    ],
                    "control-id": "ip-1",
                    description:
                      "CMS Privacy Office, as the cognizant organization, implements the Privacy Program, and oversees the listed control elements:\n\n Provides means, where feasible and appropriate, for individuals to authorize\nthe collection, use, maintaining, and sharing of PII prior to its collection;\n Provides appropriate means for individuals to understand the consequences of\ndecisions to approve or decline the authorization of the collection, use, dissemination, and retention of PII;\n Obtains consent, where feasible and appropriate, from individuals prior to\nany new uses or disclosure of previously collected PII; and\n Ensures that individuals are aware of and, where feasible, consent to all uses\nof PII not initially described in the public notice that was in effect at the time the organization collected the PII. Individuals requesting access to CMSSYSTEM must provide minimal PII (name, email and cell number) which is collected and documented through EIDM. The CMSSYSTEM System collects or stores Personally Identifiable Information (PII) i.e. names, email address, phone number and mailing addresses.",
                  },
                  {
                    uuid: "f82ddcc2-2720-48cf-afcf-d58c9e4dc0af",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "606defb1-89ef-47f6-9024-4ea028c4a7a7",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "9fa33dac-fa8e-44ab-a7a4-2609a91fe4ab",
                        value: "No",
                      },
                    ],
                    "control-id": "ip-1.1",
                    description:
                      "The CMSSYSTEM ISSO will partner with the CMS Privacy Office to ensure its use case and mechanisms to support itemized or tiered consent for specific uses of data is in alignment with established CMS policies and procedures. Any changes to data needing to be collected will be reviewed with the ISSO and CMS Privacy Office Note the submission of the PII by individuals is voluntary and not required. The CMSSYSTEM system implements mechanisms to support itemized or tiered consent for specific uses of data.",
                  },
                  {
                    uuid: "8b8e76f4-41c8-474b-8bee-aa846f6a4921",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "51fa2ec1-4d93-49a3-b3cc-54fd783f2dea",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "4ac17262-a62f-46ea-a1fa-71bd5ff83f8d",
                        value: "No",
                      },
                    ],
                    "control-id": "ip-4",
                    description:
                      "CMS is responsible for obtaining the consent by individuals forthe collection, use, maintaining, and sharing of personally identifiable information (PII) and as such are responsible for a process for receiving and responding to complaints, concerns, or questions from individuals about the organizational privacy practices. CMS is responsible for obtaining the consent by individuals for the collection, use, maintaining, and sharing of personally identifiable information (PII) and as such are responsible for a process for receiving and responding to complaints, concerns, or questions from individuals about the organizational privacy practices. The CMSSYSTEM Team will align to the established CMS policies and procedures to comply with privacy of PII/PHI.",
                  },
                  {
                    uuid: "f7313828-d9d6-433d-83f5-bd612941df04",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e135c9e2-d11e-44d4-ba4c-bcf791654428",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "4048dd59-4101-409e-89fd-ef245edcbc68",
                        value: "No",
                      },
                    ],
                    "control-id": "tr-1",
                    description:
                      "CMSSYSTEM provides notice about this fact through the Privacy Impact Assessment (PIA). The CMS ISSO, Business Owner, along with ISSOC support drafts the MACBIS Data Warehouse Privacy Impact Assessment (PIA) which provides guidance on how the MACBIS Data Warehouse system:  \n a. Provides effective notice to the public and to individuals regarding: (i) Its activities that impact privacy, including its collection, use, sharing, safeguarding, maintenance, and disposal of PII; (ii) Authority for collecting PII; (iii) The choices, if any, individuals may have regarding how the organization uses PII and the consequences of exercising or not exercising those choices; and (iv) The ability to access and have PII amended or corrected if necessary. The CMSSYSTEM application-specific information collected is PHI and PII Information About Persons and Public Information.",
                  },
                  {
                    uuid: "7d83157a-2462-4144-b891-c8521f586d67",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4de9f24f-bf74-40bb-ae04-fd13385d10ca",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "1883a039-31a5-40e0-8bc1-302ff7d89f21",
                        value: "No",
                      },
                    ],
                    "control-id": "tr-1.1",
                    description:
                      "CMSSYSTEM provides real-time and/or layered notice when it collects PII\n When a user creates an CMSSYSTEM account, the following information is provided:\nFirst Name, Last Name, E-mail address, Date of Birth, Social Security Number, Home Address and Home Telephone Number. The CMSSYSTEM application has Data Use Agreements in place describing how PII will be collected. This security control is inherited from BDC.The CMSSYSTEM System collects or stores Personally Identifiable Information (PII).",
                  },
                  {
                    uuid: "916ae5f2-fc0f-4af2-acc9-4928a3a04b54",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0c7ea9e5-efff-4781-8071-e0853cbb80a4",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "33b97909-9102-410c-a0fb-b978096920e9",
                        value: "No",
                      },
                    ],
                    "control-id": "tr-2",
                    description:
                      "CMS through the CMS Privacy Officer, OpDiv Privacy Contracts, and the HHS Office of General Counsel publishes SORNS in the Federal Register, subject to required oversight processes, for systems containing PII that are subject to the Privacy Act; Keeps SORNSs current; and includes Privacy Act Statements on its forms that collect PII, or on separate forms that, can be retained by individuals, to provide additional formal notice to individuals from whom the information is being collected. N/A - CMSSYSTEM does not have a SORN (this is per the privacy office). The CMSSYSTEM system is documented in the IACS SORN.",
                  },
                  {
                    uuid: "ea7edd39-f851-46be-8c5d-5bef011c1a38",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "16d1eba6-6f0b-4e18-b354-29f0b7220303",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "6662d504-89b4-4d36-a0db-c28d72c03d99",
                        value: "No",
                      },
                    ],
                    "control-id": "tr-2.1",
                    description:
                      "The CMS Privacy Act Officer shall publish all SORNs on a designated page of CMS’ public website:\n https://www.cms.gov/Research-Statistics-Data-and-Systems/Computer-Data-and-Systems/Privacy/CMS-Systems-of-Records\nCMSSYSTEM is published under the OPM Gov1 SORN on the CMS public website The CMS Privacy Act Officer shall publish all SORNs on a designated page of CMS’ public website.",
                  },
                  {
                    uuid: "86facab4-8b72-425a-94b2-6e45ba6e0c37",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2779897a-ec5d-496e-a78f-bdfd0f0617cd",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "67ef18e2-dc78-490f-9f8c-cba5d3cacbec",
                        value: "No",
                      },
                    ],
                    "control-id": "tr-3",
                    description:
                      "The CMS Senior Official for Privacy (SOP) makes information about CMS’s privacy program readily available to the public to reduce the burden on individuals wanting to better understand the organization’s privacy practices. CMS Privacy Office, as the cognizant organization, implements the Privacy Program, and oversees the listed control elements. CMS ensures that the public has access to information about its privacy activities and can communicate with its Senior Official for Privacy (SOP) and also ensure that its privacy practices are publicly available through organizational websites or otherwise.",
                  },
                  {
                    uuid: "73e11fcd-bd2c-4b6e-a1fc-735bfcf4c2a1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2382eea6-9a5b-4b4b-9d58-8e4836fb2307",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "3d2d6552-07fa-41ea-b950-cd58e0874fa3",
                        value: "No",
                      },
                    ],
                    "control-id": "ul-1",
                    description:
                      "The CMSSYSTEM Team uses PII internally only for the authorized purpose(s) identified in the Privacy Act and/or in public notices. The CMSSYSTEM System collects or stores Personally Identifiable Information (PII). Individuals requesting access to CMSSYSTEM must provide minimal PII (name, email and cell number) which is collected and documented through EIDM.",
                  },
                  {
                    uuid: "97488c62-e09b-4681-905f-07feaf7f1f47",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "bb308991-3583-43fc-810d-c8c9094e007c",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "e76c87ee-e32d-4ee8-bf05-54c91f8d342d",
                        value: "No",
                      },
                    ],
                    "control-id": "ul-2",
                    description:
                      "CMS conducts an annual MACBIS Data Warehouse PIA review that evaluates any proposed new instances of sharing PII with third parties to assess whether the sharing is authorized and whether additional or new public notice is required. c.  All staff are required to take CMS Information Security and Privacy training which ensures they understand the authorized sharing of PII. C: The CMS Business Owner monitors, audits, and trains its staff on the authorized sharing of PII with third parties and on the consequences of unauthorized use or sharing of PII; and \n D: The CMS Business Owner evaluates any proposed new instances of sharing PII with third parties to assess whether the sharing is authorized and whether additional or new public notice is required",
                  },
                  {
                    uuid: "abb7a01f-5bf5-4829-86ad-9aa60abbfc36",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "be99542d-11ff-4643-b117-a81bcd54c89b",
                        value: "Allocated",
                      },
                      {
                        name: "provider",
                        uuid: "40550d54-b0b3-4cdf-81a3-4437af8c4e6a",
                        value: "No",
                      },
                    ],
                    "control-id": "ar-8",
                    description:
                      "The CMS Privacy Office keeps an accurate account of disclosures through the use of Data Use Agreements (DUA). CMS maintains an accurate accounting of disclosures of information held in each system of records under its control. PHI/PII Compliance: As stated above, the CMSSYSTEM OC project follows all CMS guidelines for the disclosure of information.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 58,
  },
  {
    id: 64,
    title: "burpsuite",
    description: "BurpSuite",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "b0b8fba1-bb26-4e20-9923-aad8345f9320",
        metadata: {
          title: "BurpSuite",
          version: "unknown",
          published: "2022-02-23T16:29:47.062474+00:00",
          "last-modified": "2022-02-23T16:29:47.062481+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "0c17076c-620a-48b6-94ea-bcb88388d1b5",
            title: "BurpSuite",
            description: "BurpSuite",
            "control-implementations": [
              {
                uuid: "ee1e465c-c60b-4ca7-9306-2fbe97c18fa9",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "2f777f0a-5a22-491d-838f-12b83d92c96f",
                    "control-id": "ca-8",
                    description:
                      "BurpSuite Scans are performed by independent testing teams as part of every regression test, which occurs at least every two weeks.",
                  },
                  {
                    uuid: "f7d72185-c5d4-4b7e-b432-74fa9e78b5d2",
                    "control-id": "ca-8.1",
                    description:
                      "BurpSuite Scans are performed by independent testing teams as part of every regression test, which occurs at least every two weeks.",
                  },
                  {
                    uuid: "94b1dd51-9ca0-497e-bfc7-b93ffbdb86f1",
                    "control-id": "cm-4",
                    description:
                      "The DevSecOps team uses BurpSuite for application security analysis and static code analysis tools at developer check-in.",
                  },
                  {
                    uuid: "10802b0a-3fb7-41d7-bf40-046f01479713",
                    "control-id": "cm-4.2",
                    description:
                      "Major releases of the system are subject to automated security scans from BurpSuite Enterprise system to check for security issues.",
                  },
                  {
                    uuid: "e1006546-88e9-4062-96c3-37c92078203c",
                    "control-id": "pm-8",
                    description:
                      "BurpSuite Enterprise is used to scan code in development and when updating critical infrastructure and key resources for security issues.",
                  },
                  {
                    uuid: "54d44ae4-5586-4640-a54d-eceead1ba2af",
                    "control-id": "ra-5",
                    description:
                      "The DevSecOps team conducts a dynamic application security test utilizing BurpSuite no less often than once every 72 hours and prior to each release to identify vulnerabilities and compliance based on OWASP industry standards.",
                  },
                  {
                    uuid: "6b8ae5e0-c261-4bfa-898a-ac0fa15dd0bc",
                    "control-id": "sa-5",
                    description:
                      "Dynamic information about vulnerabilities is maintained in BurpSuite Enterprise which can be viewed easily by those who have authorized access.",
                  },
                  {
                    uuid: "fd3e90d0-968f-49bc-bf87-aff9e27672b5",
                    "control-id": "sa-11",
                    description:
                      "BurpSuite is one of a suite of tools used for security testing and assessment.",
                  },
                  {
                    uuid: "1e649062-d138-46be-ada5-499bbf0895fa",
                    "control-id": "sa-11.2",
                    description:
                      "BurpSuite is used on a continuous cycle to ensure that new vulnerabilities are not introduced into the system.",
                  },
                  {
                    uuid: "b4f03f4b-e1ab-475f-a896-847d380da0f4",
                    "control-id": "sa-11.8",
                    description:
                      "The system utilizes BurpSuite tools to perform dynamic application testing to discover any security vulnerabilities and document results of the analysis during all phases of application development.",
                  },
                  {
                    uuid: "844a930e-6edb-4f3c-a2cb-9f7936460922",
                    "control-id": "sa-15",
                    description:
                      "Prior to the implementation of each release a comprehensive security vulnerability test is carried out to detect any vulnerability introduced into the system using tools such as BurpSuite.",
                  },
                  {
                    uuid: "72a68b1f-11fb-4e68-b89c-eafc034ae7af",
                    "control-id": "si-2",
                    description:
                      "BurpSuite tools perform static and dynamic application testing to discover system flaws and security vulnerabilities.",
                  },
                  {
                    uuid: "ed6ae025-cc77-4f4e-bc13-95a101e80e11",
                    "control-id": "si-2.2",
                    description:
                      "BurpSuite scan results are posted in a secure location within Confluence for security personnel to review and take action to remediate findings.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 13,
  },
  {
    id: 65,
    title: "cloud protected manager",
    description: "Cloud Protection Manager",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "d36e1571-3e34-4048-8d10-9462b4a55459",
        metadata: {
          title: "Cloud Protection Manager (CPM)",
          version: "unknown",
          published: "2021-09-04T02:25:30.538420+00:00",
          "last-modified": "2021-09-04T02:25:30.538424+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "0e77bf08-a4a7-4c36-aa8a-711c88702dfb",
            title: "Cloud Protection Manager",
            description: "Cloud Protection Manager",
            "control-implementations": [
              {
                uuid: "985bbe67-d622-478b-be10-ea052fd42241",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "90f38077-a1d6-4cb9-8f95-90c36d56e76b",
                    "control-id": "au-4",
                    description:
                      "The team supports CMS policies and standards regarding audit record retention.\nSnapshots of the entire VPC including all systems are labeled with backup criteria and sent to AWS Cloud Protection Manager as outlined by CMS.",
                  },
                  {
                    uuid: "f4670de9-1ede-47c7-a1ea-6798437b925b",
                    "control-id": "au-11",
                    description:
                      "The team supports CMS policies and standards regarding audit record retention.\nSnapshots of the entire VPC including all systems are labeled with backup criteria and sent to AWS Cloud Protection Manager as outlined by CMS.",
                  },
                  {
                    uuid: "498ea504-de7a-40bf-8303-891009757f59",
                    "control-id": "cp-9",
                    description:
                      "The team supports CMS policies and standards regarding system backups.\nSnapshots of the entire VPC including all systems are labeled with backup criteria and sent to AWS Cloud Protection Manager as outlined by CMS.\n\nGSS:\nCMS Cloud leverages Cloud Protection Manager to conduct a backup of AWS instances and instance volumes that are appropriately tagged for backup services. Multiple policy options are provided to facilitate backups every 4 hours, daily, weekly, monthly, or annually.",
                  },
                  {
                    uuid: "8413d3bf-2101-40cd-9327-b02a107f3096",
                    "control-id": "cp-9.1",
                    description:
                      "The team supports CMS policies and standards regarding audit system testing.\nISSO Implemented Annually\nBackups are restored on separate instances to verify successful operation of the server. The DevOps Team performs tests for Disaster Recovery (DR) from backups at regular intervals.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 4,
  },
  {
    id: 66,
    title: "cms inherited",
    description: "CMS Responsibility Matrix",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "52488dd9-da75-44d1-b794-81f50a8985ec",
        metadata: {
          title: "CMS Inherited Controls",
          version: "unknown",
          published: "2021-09-04T02:25:32.266635+00:00",
          "last-modified": "2021-09-04T02:25:32.266640+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "0678b06d-7fb9-4fb4-bc5f-ec0a937f7748",
            title: "CMS Responsibility Matrix",
            description: "CMS Responsibility Matrix",
            "control-implementations": [
              {
                uuid: "d0936703-11f3-4ce1-9709-5d7c4863920a",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "3791aa8f-d29b-4d41-bb1a-f3efe6bae94f",
                    "control-id": "ac-1",
                    description:
                      "CMS Cloud is responsible for an Access Control Policy covering GSS Accounts. Application Teams are responsible for an Access Control Policy covering all application related accounts.",
                  },
                  {
                    uuid: "949baedb-4abd-4fad-9778-285fd4589059",
                    "control-id": "ac-2",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "bafa9eff-8ba8-40be-8cf5-08794ead0a36",
                    "control-id": "ac-2.1",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "a767e6ec-9b46-492a-bb5b-8e888d18f555",
                    "control-id": "ac-2.2",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "e0f05b3e-23e2-4ee0-ae7a-4ebce21d4921",
                    "control-id": "ac-2.3",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "cef006bd-2e90-49eb-aae0-d27cce96e961",
                    "control-id": "ac-2.4",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "9896b3b0-73c1-42da-ac01-f699f7d24e88",
                    "control-id": "ac-2.5",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "b0056562-fd88-4958-8b91-9644a24c4002",
                    "control-id": "ac-2.9",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "7d309f36-40bc-4d94-ae87-eaa034e82370",
                    "control-id": "ac-2.10",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "b2378855-0dc2-4298-aecc-cca0b0af3413",
                    "control-id": "ac-2.11",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "a01d6506-a8ee-4aa8-99de-8cfbd09848b5",
                    "control-id": "ac-2.12",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "cd51e0d2-bee5-47fa-b287-d2941822f4af",
                    "control-id": "ac-2.13",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "5aeefc2d-6594-416b-9acb-510f6b22220f",
                    "control-id": "ac-3",
                    description:
                      "CMS Cloud is responsible for enforcement of GSS Service Account and GSS System Account access mechanisms. Application Teams are responsible for enforcement of application access mechanisms.",
                  },
                  {
                    uuid: "a66b3587-bd7a-47d6-95f2-f0d534acaa93",
                    "control-id": "ac-3.9",
                    description:
                      "CMS Cloud is responsible for enforcement of GSS Service Account and GSS System Account access mechanisms. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "41f1f3f8-93d9-4544-acd5-95968440d4ab",
                    "control-id": "ac-4",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products. Application Teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "66910c62-c11d-4775-bde2-f24e78cdff9f",
                    "control-id": "ac-4.8",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products. Application Teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "f53d04c1-0382-4da4-92b1-50a9a0f7f2ff",
                    "control-id": "ac-4.12",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products. Application Teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "3f7ae7d5-e771-45aa-8f19-3480baea2b82",
                    "control-id": "ac-4.15",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products. Application Teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "f5162bed-6ec5-4281-b44f-6a92ae26e1b1",
                    "control-id": "ac-4.17",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products. Application Teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "45de61bf-7349-4ea1-a004-ff383bbcab65",
                    "control-id": "ac-4.18",
                    description:
                      "CMS Cloud is responsible for flow enforcement of VPC interconnectivity to other interconnected environments such as CMSNet, Direct Connects, and SaaS products. Application Teams are responsible for enforcement of system connectivity within VPCs such as host to host within a VPC.",
                  },
                  {
                    uuid: "1a7d7e31-2c42-4e77-bf29-7d9d0505ed87",
                    "control-id": "ac-5",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "44baed23-8769-4358-ae43-048c42cb958e",
                    "control-id": "ac-6",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "12381c11-d1e0-4af3-b89d-9b69f7db88a5",
                    "control-id": "ac-6.1",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "ac91f2e7-0428-4258-800d-adeee2ea523a",
                    "control-id": "ac-6.2",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "4845afe8-b658-4cf0-9e2f-da90a93eddbd",
                    "control-id": "ac-6.3",
                    description:
                      "CMS Cloud is responsible for defining and assessing Network Access to Privileged Commands within the VPC.",
                  },
                  {
                    uuid: "0f94c07c-2026-4fc8-a66e-a0f96e87f2ab",
                    "control-id": "ac-6.5",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "b0977085-0167-4e5a-86b8-10c3ec24e4f6",
                    "control-id": "ac-6.7",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "29cd408e-df21-484c-94ba-ee44dc6b987b",
                    "control-id": "ac-6.9",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "8e007d61-194b-4dae-ad3d-c9c0d3d25eb2",
                    "control-id": "ac-6.10",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "db9bd387-fc16-467e-b2cf-dab12fb2261a",
                    "control-id": "ac-7",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "253f38be-3459-44b6-b753-18fad4f942c7",
                    "control-id": "ac-8",
                    description:
                      "CMS Cloud is responsible for GSS Services and GSS Systems. Application Teams are responsible for all application related systems.",
                  },
                  {
                    uuid: "d82ebf8e-c7a4-4c83-9aca-1aaf3180f4b1",
                    "control-id": "ac-9",
                    description:
                      "CMS Cloud is responsible for notification of last Operating System logon if Application is using Gold Images.",
                  },
                  {
                    uuid: "64ee03b9-cf2b-43a6-9f46-60faefcc3e22",
                    "control-id": "ac-9.1",
                    description:
                      "CMS Cloud is responsible for notification of failed logon attempts if Application is using Gold Images.",
                  },
                  {
                    uuid: "e971074c-c33d-4470-a428-dda1d3967d58",
                    "control-id": "ac-10",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions. Application Teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "a5077228-709a-4ec1-9d76-87dcee49ce38",
                    "control-id": "ac-11",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions. Application Teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "99db0c36-f45f-4560-a6d5-97fa97078066",
                    "control-id": "ac-11.1",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions. Application Teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "e71089f0-8b2b-40af-b9a7-596c529c0996",
                    "control-id": "ac-12",
                    description:
                      "CMS Cloud is responsible for GSS Service sessions and GSS System sessions. Application Teams are responsible for all application related sessions.",
                  },
                  {
                    uuid: "c305c0bd-573f-403c-8cc0-b549cbb29d23",
                    "control-id": "ac-14",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "429e7a03-5bf9-4eb8-a81a-6227c4875f50",
                    "control-id": "ac-16",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "2ba25097-f8f6-4c09-a164-2f1f9d6d3fa8",
                    "control-id": "ac-16.3",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "17a1ae8c-4430-4dc2-9dc7-be9145629f2e",
                    "control-id": "ac-17",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "3e5d00b7-cc85-42e0-9c31-62e37b41fe64",
                    "control-id": "ac-17.1",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "c774d35d-566f-4e94-b142-9302b1357e3a",
                    "control-id": "ac-17.2",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "40148e17-2b78-4dbd-9b9e-e967ec8ead05",
                    "control-id": "ac-17.3",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "9348923e-c204-416d-be03-90344782b689",
                    "control-id": "ac-17.4",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "eca26897-97b1-45ef-bd68-5dce0f6f1942",
                    "control-id": "ac-17.9",
                    description:
                      "CMS Cloud is responsible for GSS Service Accounts and GSS System Accounts. Application Teams are responsible for all application related accounts.",
                  },
                  {
                    uuid: "690e07ac-da53-4257-8699-d267638d5e41",
                    "control-id": "ac-18",
                    description:
                      "CMS Cloud is not responsible for any external physical device. Application Teams are responsible for external physical devices.",
                  },
                  {
                    uuid: "41700902-51f3-4682-9515-17a4100ea39e",
                    "control-id": "ac-18.1",
                    description:
                      "CMS Cloud is not responsible for any external physical device. Application Teams are responsible for external physical devices.",
                  },
                  {
                    uuid: "57c88c2c-24a7-4b2e-9a7f-532265ba69c1",
                    "control-id": "ac-18.4",
                    description:
                      "CMS Cloud is not responsible for any external physical device. Application Teams are responsible for external physical devices.",
                  },
                  {
                    uuid: "94458f1d-6cc1-4139-8fac-5b87496be6bf",
                    "control-id": "ac-18.5",
                    description:
                      "CMS Cloud is not responsible for any external physical device. Application Teams are responsible for external physical devices.",
                  },
                  {
                    uuid: "a9d4c55e-2317-4d2e-ad28-8bb078416b87",
                    "control-id": "ac-19",
                    description:
                      "CMS Cloud is not responsible for any external physical device. Application Teams are responsible for external physical devices.",
                  },
                  {
                    uuid: "cb24bb39-1e7d-4b9c-9bf8-ee9aca2d8862",
                    "control-id": "ac-19.5",
                    description:
                      "CMS Cloud is not responsible for any external physical device. Application Teams are responsible for external physical devices.",
                  },
                  {
                    uuid: "aa51fe62-1779-4f00-aa5d-1d483d286494",
                    "control-id": "ac-20",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. CMS Cloud does not maintain external information systems (e.g. personal devices). Application Teams should maintain their acceptable use policy in alignment with CMS standards for laptops and other personal devices.",
                  },
                  {
                    uuid: "e94aba9d-937e-4850-8957-88f26fee633b",
                    "control-id": "ac-20.1",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. CMS Cloud does not maintain external information systems (e.g. personal devices). Application Teams should maintain their acceptable use policy in alignment with CMS standards for laptops and other personal devices.",
                  },
                  {
                    uuid: "578810b3-fa72-4956-981a-f2c7df77a0e8",
                    "control-id": "ac-20.2",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. CMS Cloud does not maintain external information systems (e.g. personal devices). Application Teams should maintain their acceptable use policy in alignment with CMS standards for laptops and other personal devices.",
                  },
                  {
                    uuid: "15bc3f77-2a55-46f5-b26b-6f2f075a5f71",
                    "control-id": "ac-20.3",
                    description:
                      "Application Teams should maintain their acceptable use policy in alignment with CMS standards for laptops and other personal devices.",
                  },
                  {
                    uuid: "379bf973-8ad7-47cd-8876-1e2c9818257c",
                    "control-id": "ac-21",
                    description:
                      "Application Teams should maintain their acceptable use policy in alignment with the sharing of information.",
                  },
                  {
                    uuid: "48a3b380-d0ec-4064-9de6-06dcc8d87c19",
                    "control-id": "ac-22",
                    description:
                      "CMS Cloud is responsible for displaying a warning banner that is publicly accessible. Application Teams are responsible for all other publicly accessible content.",
                  },
                  {
                    uuid: "dda2c97c-3f2d-499b-8dd9-e837d9da3c72",
                    "control-id": "ap-1",
                    description:
                      "Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "aac2358a-be42-43ab-9aa2-0a4dd2082eb8",
                    "control-id": "ap-2",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "d90d4a0e-5f34-4841-b85a-7010b2f58130",
                    "control-id": "ap-cms-01",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "e499f594-20bb-42b2-b162-d393b5783fe2",
                    "control-id": "ar-1",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "0e4905cc-c1d7-4a59-a5aa-eaf40f89af9b",
                    "control-id": "ar-2",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "b6e2cd33-8ff9-4019-af54-ef62cb896b01",
                    "control-id": "ar-3",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "4aca2255-45b9-4c5a-b953-9ddd73508d5f",
                    "control-id": "ar-4",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "ea0530cc-81bc-4c59-825b-0d9b1ef85322",
                    "control-id": "ar-5",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "97c4ebb2-a169-484b-8d56-f5b60bfedc5a",
                    "control-id": "ar-6",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "755e82af-345d-4aef-9d8e-a7b0e14d4804",
                    "control-id": "ar-7",
                    description:
                      "Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "b4cace7e-046d-47c5-a8d9-a7529e38cf4e",
                    "control-id": "ar-8",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "927e32c5-fb5a-4d2f-8424-7b0f1f73dd3d",
                    "control-id": "ar-cms-01",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. Application Teams are responsible for related privacy responsibilities for PII/PHI.",
                  },
                  {
                    uuid: "96c1aefc-6417-4344-bbee-0ef8c522d18c",
                    "control-id": "at-1",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. GSS is responsible for taking the CMS training. Application Teams are responsible for taking the CMS training.",
                  },
                  {
                    uuid: "010e0278-27d1-422b-9951-17550612aa94",
                    "control-id": "at-2",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. GSS is responsible for taking the CMS training. Application Teams are responsible for taking the CMS training.",
                  },
                  {
                    uuid: "972bc0c8-1969-4fb6-a3fa-95f35b3af23d",
                    "control-id": "at-2.2",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. GSS is responsible for taking the CMS training. Application Teams are responsible for taking the CMS training.",
                  },
                  {
                    uuid: "a7ddc549-2b30-40fa-a3b5-76c68b1f1382",
                    "control-id": "at-3",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. GSS is responsible for taking the CMS training. Application Teams are responsible for taking the CMS training.",
                  },
                  {
                    uuid: "af535bd1-6aac-4641-a65c-c66834efbf24",
                    "control-id": "at-4",
                    description:
                      "Inheritable by CMS through the OCISO Inheritable Controls ATO. GSS is responsible for taking the CMS training. Application Teams are responsible for taking the CMS training.",
                  },
                  {
                    uuid: "94a7fa21-061d-4af9-adfe-8939bd39c50c",
                    "control-id": "au-1",
                    description:
                      "CMS Cloud is responsible for an Audit and Accountability Policy covering GSS Accounts. Application Teams are responsible for an Access Control Policy covering all application related accounts.",
                  },
                  {
                    uuid: "00ea6d5f-d218-4b5a-9921-a09a031d960e",
                    "control-id": "au-2",
                    description:
                      "CMS Cloud is responsible for determining GSS Service and GSS System events to be logged. Application Teams are responsible for determining Application events to be logged.",
                  },
                  {
                    uuid: "a9294cb7-839a-442e-b2f0-f4dcbebc76b7",
                    "control-id": "au-2.3",
                    description:
                      "CMS Cloud is responsible for reviewing GSS Service and GSS System events. Application Teams are responsible for reviewing Application events.",
                  },
                  {
                    uuid: "df60c185-91f7-4260-abe7-f64ebe9597c6",
                    "control-id": "au-3",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged. Application Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "e43a7eb1-9c23-4212-8d7c-31563e3b9716",
                    "control-id": "au-3.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged. Application Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "bf669535-5ec0-47ba-8693-f1967e720958",
                    "control-id": "au-3.2",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Services and GSS Systems have the configuration of auditable events centrally managed. Application Teams are responsible ensuring Applications have the configuration of auditable events centrally managed.",
                  },
                  {
                    uuid: "ff3460a7-7d69-41be-a30f-5e0dd5f44c36",
                    "control-id": "au-4",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Services and GSS Systems have the records have sufficient storage capacity. Application Teams are responsible ensuring Application events have the records have sufficient storage capacity.",
                  },
                  {
                    uuid: "fdaaf31e-318f-4b9a-910d-2ba1e377f3b7",
                    "control-id": "au-5",
                    description:
                      "CMS Cloud is responsible for responding to failures from GSS Services and GSS Systems. Application Teams are responsible for responding to failures from the Applications.",
                  },
                  {
                    uuid: "3bab02ca-2b81-474c-af44-1b39c7b186f4",
                    "control-id": "au-5.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Services and GSS Systems events have the record components logged. Application Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "d70ccfc9-2ca7-4849-a6ab-7270a16f4503",
                    "control-id": "au-5.2",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Services and GSS Systems events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill the required Event Alerting in near real-time. Application Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. The Application Team is responsible for creating the alerts within Splunk or any other mechanism.",
                  },
                  {
                    uuid: "0840fa37-42f1-4714-81ef-398c97dca6cc",
                    "control-id": "au-6",
                    description:
                      "CMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such as Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment. Application Teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application Team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.",
                  },
                  {
                    uuid: "59775c2b-c996-46db-ba7a-6695fbe4f2b5",
                    "control-id": "au-6.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this. Application Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "5ba5870c-e5cc-462c-ba49-01b69c3a1c2b",
                    "control-id": "au-6.3",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this. Application Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "24ffa80f-32c9-419a-88fb-e7a20bc52d99",
                    "control-id": "au-6.5",
                    description:
                      "CMS Cloud reviews logs from GSS Services and GSS Systems for unusual behavior on the hosting infrastructure. This is fulfilled through automated tools and manual processes. Tools such As Splunk and CloudWatch are used for this. CMS Cloud Coordinates with CCIC teams to investigate issues within the environment. Application Teams review event logs from the application for unusual behavior in the application environment. This is fulfilled through automated tools and manual processes. Tools such as Splunk are provided by CMS Cloud to facilitate this. The Application Team coordinates with CMS Cloud and the CCIC teams to investigate issues within the environment.",
                  },
                  {
                    uuid: "2f76e016-c20f-4674-a809-577144a059d7",
                    "control-id": "au-6.6",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from the GSS Services and GSS Systems in coordination with the Cloud Service Providers.",
                  },
                  {
                    uuid: "f0441c3a-c45f-4480-87d0-ea9f1dcfd396",
                    "control-id": "au-6.10",
                    description:
                      "CMS Cloud is responsible for adjusting audit processes from GSS Services and GSS Systems when there is a change in risk based on law enforcement or intelligence information. Application Teams are responsible for adjusting audit processes from applications when there is a change in risk based on law enforcement or intelligence information",
                  },
                  {
                    uuid: "b04d9914-3d15-48ba-8220-44f55f9ad0fb",
                    "control-id": "au-7",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this. Application Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "b029e2cf-e727-448c-bb1f-be3b1b1b27c8",
                    "control-id": "au-7.1",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this. Application Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "a4ace7e7-cdd6-4d18-bcbf-98073d77972f",
                    "control-id": "au-7.2",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this. Application Teams are responsible for ensuring Application events are logged and accessible within a central location for collection and review. Splunk is utilized to fulfill this.",
                  },
                  {
                    uuid: "5a4d470d-ea65-410a-8ad2-13728d88bc50",
                    "control-id": "au-8",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System logs are set up with time stamps. Application Teams are responsible for ensuring Application logs are set up with time stamps.",
                  },
                  {
                    uuid: "dee283c5-60d2-4df0-83bb-5fea79cd5c6e",
                    "control-id": "au-8.1",
                    description:
                      "CMS Cloud is responsible for ensuring that the network time protocol is configured to approved time servers.",
                  },
                  {
                    uuid: "22b337f6-b628-422a-9d82-510b2c95693d",
                    "control-id": "au-9",
                    description:
                      "CMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. This prevents unauthorized access and prevents modification or deletion of the log data.",
                  },
                  {
                    uuid: "04dd287b-647a-4642-b942-b2b03ce0f0b2",
                    "control-id": "au-9.2",
                    description:
                      "CMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. Splunk is a separate system that the audit records are sent to.",
                  },
                  {
                    uuid: "0c69f0ec-4463-4d8b-8fb4-725602a038dd",
                    "control-id": "au-9.3",
                    description:
                      "CMS Cloud is responsible for implementing cryptographic mechanisms to protect the integrity of Splunk and the transmission of data to Splunk.",
                  },
                  {
                    uuid: "672c252f-c566-4524-9708-c7af23f31107",
                    "control-id": "au-9.4",
                    description:
                      "CMS Cloud is responsible for role-based access control of the log data in Splunk through EUA job codes. This prevents unauthorized access and prevents modification or deletion of the log data.",
                  },
                  {
                    uuid: "6a20cbcb-5d80-4026-b7df-6884c3e803f8",
                    "control-id": "au-10",
                    description:
                      "CMS Cloud is responsible for ensuring that events from GSS Services and GSS Systems have means of confidently addressing an action to a user. This is accomplished with a combination of EUA, AD/LDAP, or local auth and/or combination of multi-factor technology. The account activity for this action is tied to the event in audit logs. Application Teams are responsible for ensuring any activity with applications follow the same level of non-repudiation so that user activity can be confidently tied to a user.",
                  },
                  {
                    uuid: "5ee05911-5b6d-4fa4-8b30-a0ee7a0c151b",
                    "control-id": "au-10.1",
                    description:
                      "CMS Cloud is responsible for ensuring that events from GSS Services and GSS Systems have means of confidently addressing an action to a user. This is accomplished with a combination of EUA, AD/LDAP, or local auth and/or combination of multi-factor technology. The account activity for this action is tied to the event in audit logs. Application Teams are responsible for ensuring any activity with applications follow the same level of non-repudiation so that user activity can be confidently tied to a user.",
                  },
                  {
                    uuid: "448b886e-da66-49bc-9367-0cb634ebe403",
                    "control-id": "au-11",
                    description:
                      "CMS Cloud is responsible for retaining the log information within Splunk for no less than 1 year.",
                  },
                  {
                    uuid: "0ba1bd54-a4db-429f-b056-474f60e5a7d6",
                    "control-id": "au-12",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged. Application Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "4bfd066a-7c4e-408e-87d0-c1212be43125",
                    "control-id": "au-12.1",
                    description:
                      "CMS Cloud is responsible for ensuring time information is in Splunk within acceptable time correlation across all systems.",
                  },
                  {
                    uuid: "4e9052a2-eed5-423a-bef5-9e3f8f3303ee",
                    "control-id": "au-12.3",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged. Application Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "d8a0aa49-69c8-47fa-b795-de3799174587",
                    "control-id": "au-16",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged. Application Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "e8469afd-26d0-473c-a568-34b2a6f9f6da",
                    "control-id": "au-16.2",
                    description:
                      "CMS Cloud is responsible for ensuring GSS Service and GSS System events have the record components logged. Application Teams are responsible ensuring Application events have the record components logged.",
                  },
                  {
                    uuid: "49ab05f7-6736-449d-890e-9eb357395481",
                    "control-id": "ca-1",
                    description:
                      "CMS Cloud is responsible for a Security Assessment an Authorization policy covering GSS Accounts. Application Teams are responsible for Security Assessment an Authorization policy covering all application related accounts.",
                  },
                  {
                    uuid: "529444dd-b3d3-4fd2-9a7a-b1b7439a0827",
                    "control-id": "ca-2",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and GSS Systems. Application Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "72d8b754-cda6-4222-85e8-ad10b5014339",
                    "control-id": "ca-2.1",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and GSS Systems. Application Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "9606b382-7a5f-4ed2-928a-8cc01c48cd0a",
                    "control-id": "ca-2.2",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and GSS Systems. Application Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "9560ef52-9bd3-4682-b957-33b34e43286b",
                    "control-id": "ca-2.3",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and GSS Systems. Application Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "2fbd3237-b7d9-4af8-b642-cea8ce4b882c",
                    "control-id": "ca-3",
                    description:
                      "CMS Cloud is responsible for authorizing interconnections supporting GSS Services and GSS Systems. Application Teams are responsible for authorizing connections supporting applications.",
                  },
                  {
                    uuid: "eeb0d508-b144-463f-b0d8-c62e24616a2f",
                    "control-id": "ca-3.3",
                    description:
                      "CMS Cloud is responsible for authorizing interconnections supporting GSS Services and GSS Systems. Application Teams are responsible for authorizing connections supporting applications",
                  },
                  {
                    uuid: "fae5b0e1-bc58-495e-b21b-a3d731f9d20c",
                    "control-id": "ca-3.5",
                    description:
                      "CMS Cloud is responsible for authorizing interconnections supporting GSS Services and GSS Systems. Application Teams are responsible for authorizing connections supporting applications.",
                  },
                  {
                    uuid: "f38e7eca-4b36-48fa-80bf-ac101ebd1aa4",
                    "control-id": "ca-5",
                    description:
                      "CMS Cloud is responsible for maintaining POA&Ms attached to their FISMA boundary. Application Teams are responsible for maintaining POA&Ms attached to their FISMA boundary.",
                  },
                  {
                    uuid: "17301ab8-a008-4f88-a3de-2d7104ebfcf7",
                    "control-id": "ca-5.1",
                    description:
                      "CMS Cloud is responsible for maintaining POA&Ms attached to their FISMA boundary. Application Teams are responsible for maintaining POA&Ms attached to their FISMA boundary.",
                  },
                  {
                    uuid: "cb64f353-9592-4105-8421-bbb3da94d8c2",
                    "control-id": "ca-6",
                    description:
                      "CMS Cloud is responsible for obtaining and maintaining an Authority to Operate for GSS Services and GSS Systems. Application Teams are responsible for obtaining and maintaining an Authority to Operate for the Application.",
                  },
                  {
                    uuid: "6cb2e92f-ed1d-4124-a532-660c73a6d287",
                    "control-id": "ca-7",
                    description:
                      "CMS Cloud is responsible for developing and implementing a continuous monitoring strategy for GSS Services and Systems. Application Teams are responsible for developing and implementing a continuous monitoring strategy for the Application.",
                  },
                  {
                    uuid: "d54cba25-b60f-422f-b028-4e4d311bd3e7",
                    "control-id": "ca-7.1",
                    description:
                      "CMS Cloud is responsible for developing and implementing a continuous monitoring strategy for GSS Services and Systems. Application Teams are responsible for developing and implementing a continuous monitoring strategy for the Application.",
                  },
                  {
                    uuid: "ad9014eb-258c-441c-8980-d9d7c5d63b19",
                    "control-id": "ca-8",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and Systems. Application Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "a3131125-7d87-43f4-a354-3c90022c561a",
                    "control-id": "ca-8.1",
                    description:
                      "CMS Cloud is responsible for assessment of GSS Services and Systems. Application Teams are responsible for assessment of the Application.",
                  },
                  {
                    uuid: "239ca3b2-c364-466e-ac20-8c39076515e7",
                    "control-id": "ca-9",
                    description:
                      "CMS Cloud is responsible for defining components for GSS Services and GSS Systems. Application Teams are responsible for defining components of the Application.",
                  },
                  {
                    uuid: "c8654f25-72b2-4d66-ac77-d6056d40f3d1",
                    "control-id": "ca-9.1",
                    description:
                      "CMS Cloud is responsible for conducting compliance checks for GSS Services and GSS Systems. Application Teams are responsible for conducting compliance checks for the Application.",
                  },
                  {
                    uuid: "449d03f8-53a6-407b-873c-7c7b30a8ae57",
                    "control-id": "cm-1",
                    description:
                      "CMS Cloud is responsible for a Configuration Management policy covering GSS Services and GSS Systems. Application Teams are responsible for a Configuration Management policy covering all application related accounts.",
                  },
                  {
                    uuid: "71be3005-718f-4aa7-97f9-08a0b63e66e3",
                    "control-id": "cm-2",
                    description:
                      "CMS Cloud is responsible for the baseline configuration of GSS Services and GSS Systems Application Teams are responsible for the baseline of Applications.",
                  },
                  {
                    uuid: "82e309e8-600b-4bc4-b951-45f11a298e59",
                    "control-id": "cm-2.1",
                    description:
                      "CMS Cloud is responsible for updating the baseline configuration of GSS Services and GSS Systems Application Teams are responsible for updating the baseline of Applications.",
                  },
                  {
                    uuid: "391e86f2-415a-4fc0-b115-7607f44c1f96",
                    "control-id": "cm-2.2",
                    description:
                      "CMS Cloud is responsible for configuring GSS Services and GSS Systems in a way that supports automated mechanisms to keep the baseline up to date, complete, accurate, and readily available. Application Teams are responsible for configuring applications in a way that supports automated mechanisms to keep the baseline up to date, complete, accurate, and readily available.",
                  },
                  {
                    uuid: "14ef79a1-5f9f-402f-9b00-8be05a908db3",
                    "control-id": "cm-2.3",
                    description:
                      "CMS Cloud is responsible for the baseline retention of GSS Services and GSS System configurations. Application Teams are responsible for the baseline retention of Applications.",
                  },
                  {
                    uuid: "bde4429d-4ac8-41eb-9ba7-062ee9da2317",
                    "control-id": "cm-2.6",
                    description:
                      "CMS Cloud is responsible for the maintaining baseline configurations of lower (DEV/TEST) environments separate from upper (PROD) environments of GSS Services and GSS Systems. Application Teams are responsible for the maintaining baseline configurations of lower (DEV/TEST) environments separate from upper (PROD) environments of Applications.",
                  },
                  {
                    uuid: "298895d4-5125-4ce5-b436-d3ba935c6cb0",
                    "control-id": "cm-2.7",
                    description:
                      "CMS Cloud is does not permit program members to travel to High-Risk areas. Application Teams are responsible for safeguards of members traveling to areas assessed as high risk.",
                  },
                  {
                    uuid: "93a7406c-ff0b-408d-964f-943a2a86c558",
                    "control-id": "cm-3",
                    description:
                      "CMS Cloud is responsible for change control processes for GSS Services and GSS Systems. Application Teams are responsible for change control processes for Application changes.",
                  },
                  {
                    uuid: "a74d9be2-9d69-4d1c-8e35-caf9845f3622",
                    "control-id": "cm-3.1",
                    description:
                      "CMS Cloud is responsible for change control processes for GSS Services and GSS Systems. Application Teams are responsible for change control processes for Application changes.",
                  },
                  {
                    uuid: "69139269-505b-440d-8aa3-561c589eacec",
                    "control-id": "cm-3.2",
                    description:
                      "CMS Cloud is responsible for change control processes for GSS Services and GSS Systems. Application Teams are responsible for change control processes for Application changes.",
                  },
                  {
                    uuid: "1236610f-3a57-43ec-ac37-e7b64f238899",
                    "control-id": "cm-3.6",
                    description:
                      "CMS Cloud is responsible for change control processes for GSS Services and GSS Systems. Application Teams are responsible for change control processes for Application changes.",
                  },
                  {
                    uuid: "a96ca010-9cf4-4e71-93dc-3aa88c0f3bfe",
                    "control-id": "cm-4",
                    description:
                      "CMS Cloud is responsible for performing a Security Impact Analysis for GSS Services and GSS Systems changes. Application Teams are responsible for performing a Security Impact Analysis for Application changes.",
                  },
                  {
                    uuid: "c450ab45-f358-487b-a5b7-ad3a9cced30e",
                    "control-id": "cm-4.1",
                    description:
                      "CMS Cloud is responsible for testing, validating, and documenting changes in separate test environments for GSS Services and GSS System changes. Application Teams are responsible for testing, validating, and documenting changes for Application changes.",
                  },
                  {
                    uuid: "4f8cedde-4402-4488-82fd-6cd8f6994161",
                    "control-id": "cm-4.2",
                    description:
                      "CMS Cloud is responsible for validating security functions supporting changes are implementing and functioning as intended for GSS Services and GSS System changes. Application Teams are responsible for validating security functions supporting changes are implementing and functioning as intended forApplication changes.",
                  },
                  {
                    uuid: "114074c2-9072-4ea0-8d09-013b6f64c477",
                    "control-id": "cm-5",
                    description:
                      "CMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods. Application Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.",
                  },
                  {
                    uuid: "aa023baf-8581-49dd-baa3-7c5dcb1887b0",
                    "control-id": "cm-5.1",
                    description:
                      "CMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods. Application Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.",
                  },
                  {
                    uuid: "b20c1502-a4b7-4a8d-aa3a-4b4588519d27",
                    "control-id": "cm-5.2",
                    description:
                      "CMS Cloud is responsible for reviewing changes for GSS Services and GSS Systems to be performed following least privileged methods. Application Teams are responsible for reviewing changes for Applications changes to be performed following least privileged methods.",
                  },
                  {
                    uuid: "8223b234-3485-417c-b714-d29bdb5a5b32",
                    "control-id": "cm-5.3",
                    description:
                      "CMS Cloud is responsible for restricting software installation to digitally signed downloaded packages to GSS Services and GSS Systems Application Teams are responsible for signature verification of installed software for Applications.",
                  },
                  {
                    uuid: "7d2fce3b-f692-4839-aa3b-0a794bca70ca",
                    "control-id": "cm-6",
                    description:
                      "CMS Cloud is responsible for the baseline configuration of GSS Services and GSS Systems Application Teams are responsible for the baseline of Applications.",
                  },
                  {
                    uuid: "2e6f8592-91b4-4626-9a59-44d5aeb86dbb",
                    "control-id": "cm-6.1",
                    description:
                      "CMS Cloud is responsible for the central management of baseline configuration of GSS Services and GSS Systems Application Teams are responsible for the central management of baseline of Applications.",
                  },
                  {
                    uuid: "592e6c24-7966-49dd-8be1-ccd7598af6d4",
                    "control-id": "cm-6.2",
                    description:
                      "CMS Cloud is responsible for responding to unauthorized changes for GSS Services and GSS Systems. Application Teams are responsible for responding to unauthorized changes to the Applications.",
                  },
                  {
                    uuid: "9eb1d632-948c-4d83-89bc-16c7ace694d2",
                    "control-id": "cm-7",
                    description:
                      "CMS Cloud is responsible for restricting changes for GSS Services and GSS Systems to be performed following least privileged methods. Application Teams are responsible for restricting changes for Applications changes to be performed following least privileged methods.",
                  },
                  {
                    uuid: "b8a9d733-bc37-4d10-b3b0-5ab77be1a973",
                    "control-id": "cm-7.1",
                    description:
                      "CMS Cloud is responsible for review of GSS Services and GSS Systems to be configured to least privileged methods. Application Teams are responsible for review of applications to be configured to least privileged methods.",
                  },
                  {
                    uuid: "a9e6a2e3-01bc-4db5-8c2e-a31ed1fe0307",
                    "control-id": "cm-7.2",
                    description:
                      "CMS Cloud is responsible for configuring software associated with GSS Services and GSS systems that prevents unapproved usage. Application Teams are responsible for configuring software associated with the application that prevents unapproved usage.",
                  },
                  {
                    uuid: "ae6e8cf5-8f54-44d2-bc44-db6e50c08519",
                    "control-id": "cm-7.4",
                    description:
                      "CMS Cloud is responsible for restricting/allowing software by the use of whitelisting and blacklisting to GSS Services and GSS Systems. Application Teams are responsible for restricting/allowing software by the use of whitelisting and blacklisting for the Application.",
                  },
                  {
                    uuid: "ccce5f70-7bf5-43e8-9cbf-17a9858613dd",
                    "control-id": "cm-7.5",
                    description:
                      "CMS Cloud is responsible for restricting/allowing software by the use of whitelisting and blacklisting to GSS Services and GSS Systems. Application Teams are responsible for restricting/allowing software by the use of whitelisting and blacklisting for the Application.",
                  },
                  {
                    uuid: "6b3e835b-1d19-4624-a700-b3633e038869",
                    "control-id": "cm-8",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories. Application Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "3de31160-a671-4d3b-a660-3863899305db",
                    "control-id": "cm-8.1",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories. Application Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "29633bdb-d9d5-4718-a5d4-f2c9b0a0d5e5",
                    "control-id": "cm-8.2",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories. Application Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "e8b673b6-9d7f-44eb-9140-70429df168db",
                    "control-id": "cm-8.3",
                    description:
                      "CMS Cloud utilizes tools and monitoring to detect unauthorized components within the environment.",
                  },
                  {
                    uuid: "0a5b0d51-4a9f-4ed9-a41b-fc915c968f1f",
                    "control-id": "cm-8.4",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories. Application Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "b1d6747f-6b0d-483d-a695-5ce07258b554",
                    "control-id": "cm-8.5",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System Component inventories. Application Teams are responsible for maintaining application component inventories.",
                  },
                  {
                    uuid: "6aff7601-83e8-4935-8f05-fe783d5314de",
                    "control-id": "cm-9",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service an GSS System configuration management. Application Teams are responsible for application configuration management.",
                  },
                  {
                    uuid: "c91582ea-9105-496a-b2b6-df7d6b45c2b0",
                    "control-id": "cm-10",
                    description:
                      "CMS Cloud is responsible for restricting/allowing software by the use of whitelisting and blacklisting to Operating System. Application Teams are responsible for restricting/allowing software by the use of whitelisting and blacklisting for the Application.",
                  },
                  {
                    uuid: "cd475080-b473-4e55-90c9-5ba6cace142d",
                    "control-id": "cm-11",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System software. Application Teams are responsible for software relating to the applications.",
                  },
                  {
                    uuid: "b31cc910-c89a-4b5e-b75e-3a2ac6cb5061",
                    "control-id": "cp-1",
                    description:
                      "CMS Cloud is responsible for a Continuity Plan policy covering GSS Services and GSS Systems. Application Teams are responsible for a Continuity plan policy covering all application related accounts.",
                  },
                  {
                    uuid: "1cb65987-33bd-4420-b478-68b33738c286",
                    "control-id": "cp-2",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "f8e3fcac-9795-4728-9e20-49e6afab1477",
                    "control-id": "cp-2.1",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "52dd885e-9873-4195-9c07-85562faac51a",
                    "control-id": "cp-2.2",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "c7711d56-f37f-4ccf-a3a5-4d5aa879d37c",
                    "control-id": "cp-2.3",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "36293a1e-19bf-470a-83b9-90a40ab8f272",
                    "control-id": "cp-2.4",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "132f2ed4-109e-4067-a54e-8e9a22056bba",
                    "control-id": "cp-2.5",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "713ae6b6-e156-4f13-9cb4-a738f06f0cab",
                    "control-id": "cp-2.8",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "83c1ba7d-546f-4c91-b7b2-6ed7c073446a",
                    "control-id": "cp-3",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "a54443c6-86b2-48d0-913b-99499da0a5e7",
                    "control-id": "cp-3.1",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "b68dcde9-effe-4103-9ff5-3b2dfcd11b63",
                    "control-id": "cp-4",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "71689b6d-cd44-4804-9442-2a4ed5ca8ab5",
                    "control-id": "cp-4.1",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "1fe72584-627b-4d4c-b1b5-6284b0fe2844",
                    "control-id": "cp-4.2",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity, including testing the GSS CP plan using alternate processing sites. Application Teams are responsible for testing their CP plans with alternate processing sites with the expectation that GSS Services will continue to be available.",
                  },
                  {
                    uuid: "3e80f312-bdb2-4ac5-91cd-4b8b71bd7c4f",
                    "control-id": "cp-4.4",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "9988a021-fc8b-4b66-a73a-e3c0727b0d07",
                    "control-id": "cp-6",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "a785aabe-4327-4a8d-9238-d0fa585944b6",
                    "control-id": "cp-6.1",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "77f1431c-2075-49b4-a8ac-108b0a27ac03",
                    "control-id": "cp-6.2",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "446bdf5b-53c2-48e0-874d-278bfb941d4a",
                    "control-id": "cp-6.3",
                    description:
                      "CMS Cloud makes alternate sites accessible in the event of a disruption or disaster.",
                  },
                  {
                    uuid: "44592258-5a69-4873-b832-ccd059f24973",
                    "control-id": "cp-7",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "ba2c7207-6597-437a-a5c1-7c338b9e18c5",
                    "control-id": "cp-7.1",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "952e84b4-098f-4280-aaab-0865be43519d",
                    "control-id": "cp-7.2",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "33911104-ff1c-4ee2-96a7-d74fc4734962",
                    "control-id": "cp-7.3",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "004f388d-7464-4f4e-8ff8-63a87b24575f",
                    "control-id": "cp-7.4",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "a2ec7262-e11b-4fba-a107-f53033c6f7b6",
                    "control-id": "cp-8",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "2efec74d-4327-4a9b-8987-7c25aa45c6ad",
                    "control-id": "cp-8.1",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "eec01a15-a56b-45e3-a72d-f52ae47b2801",
                    "control-id": "cp-8.2",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "a22b7986-1995-4781-a0f3-a891453ed4fa",
                    "control-id": "cp-8.3",
                    description:
                      "CMS Cloud maintains alternate sites via multiple availability zones in approved CSP regions.",
                  },
                  {
                    uuid: "2c71a88c-589f-4dec-8463-72c6b101afa3",
                    "control-id": "cp-8.4",
                    description:
                      "CMS Cloud reviews Cloud Service Provider Contingency Plans annually to ensure that they meet CMS organizational contingency requirement.",
                  },
                  {
                    uuid: "6c8d7748-69c7-485d-9806-cf0655b868e1",
                    "control-id": "cp-9",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "5304fccc-1d1b-4954-9fd8-cfc761d0f69d",
                    "control-id": "cp-9.1",
                    description:
                      "CMS Cloud is responsible for testing GSS Service and GSS System information and accounts. Application Teams are responsible for testing application information and accounts.",
                  },
                  {
                    uuid: "6d9a556b-f0e6-4b3d-954d-4102d5762f05",
                    "control-id": "cp-9.2",
                    description:
                      "CMS Cloud is responsible for testing GSS Service and GSS System information and accounts. Application Teams are responsible for testing application information and accounts.",
                  },
                  {
                    uuid: "db90ab52-c972-4e9b-a190-37d5c56816e8",
                    "control-id": "cp-9.3",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "05d1db36-1e34-4a51-918d-1f2f8731e5a6",
                    "control-id": "cp-9.5",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity, including support for CPM snapshot availability for alternate sites. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "1adfd21d-2233-4c07-bd48-0b827d8e6031",
                    "control-id": "cp-10",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "0f216d6d-b5fc-467b-b982-1b6fc325ee18",
                    "control-id": "cp-10.2",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "9cdc5a85-c483-4df4-9ef3-dee58e7943dc",
                    "control-id": "cp-10.4",
                    description:
                      "CMS Cloud is responsible for maintaining GSS Service and GSS System continuity. Application Teams are responsible for maintaining application continuity.",
                  },
                  {
                    uuid: "09d0ea04-b434-42ab-a9aa-b2ef3301a104",
                    "control-id": "di-1",
                    description:
                      "CMS Cloud is responsible for a Data Quality policy covering GSS Services and GSS Systems. Application Teams are responsible for a Data Quality policy covering all application related accounts.",
                  },
                  {
                    uuid: "315d9f5e-27af-487c-a83b-e9647afa0f28",
                    "control-id": "di-1.1",
                    description:
                      "Application Teams are responsible for the collection, validation, and integrity of PII and PHI.",
                  },
                  {
                    uuid: "ad6a77d2-4db1-4f61-bb6f-d88cdfffea11",
                    "control-id": "di-1.2",
                    description:
                      "Application Teams are responsible for the collection, validation, and integrity of PII and PHI.",
                  },
                  {
                    uuid: "4cac032b-b1b2-40c1-92d4-adb913ffb295",
                    "control-id": "di-2",
                    description:
                      "Application Teams are responsible for the collection, validation, and integrity of PII and PHI.",
                  },
                  {
                    uuid: "7c525938-6cb9-4125-ac2d-64b33642f24a",
                    "control-id": "di-2.1",
                    description:
                      "Application Teams are responsible for the collection, validation, and integrity of PII and PHI.",
                  },
                  {
                    uuid: "e6603e81-3d8d-4e79-8529-84bf0646d921",
                    "control-id": "di-cms-01",
                    description:
                      "Application Teams are responsible for the collection, validation, and integrity of PII and PHI.",
                  },
                  {
                    uuid: "9c2d512c-37ed-4ed7-95b0-6a898ce78362",
                    "control-id": "dm-1",
                    description:
                      "CMS Cloud is responsible for a Data Minimization and Retention policy covering GSS Services and GSS Systems. Application Teams are responsible for a Data Minimization and Retention policy covering all application related accounts.",
                  },
                  {
                    uuid: "6f02f97a-d2d0-4a95-b2b8-b681f0767cf8",
                    "control-id": "dm-1.1",
                    description:
                      "CSS identifies and removes PII or PHI that has been stored on GSS Services and GSS Systems in error. For example, accidental ingestion into Splunk. Application Teams are responsible for the location, removal, and reaction of PII and PHI within the application.",
                  },
                  {
                    uuid: "27b6225c-6a3f-4daa-bb11-2811a3a4039b",
                    "control-id": "dm-2",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "3eb638e0-1dce-4e1f-9dda-591a51c5ccbb",
                    "control-id": "dm-2.1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "90f77341-4224-476c-98d2-b084e704086b",
                    "control-id": "dm-3",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "37ff1845-ae77-471b-a69b-7a9eb679b264",
                    "control-id": "dm-3.1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "2f57d2b6-2b87-4284-b430-ba0365dcddb9",
                    "control-id": "dm-cms-01",
                    description:
                      "CMS Cloud is responsible for a Data Minimization and Retention policy covering GSS Services and GSS Systems. Application Teams are responsible for a Data Minimization and Retention policy covering all application related accounts.",
                  },
                  {
                    uuid: "87a8c295-7a3f-4aca-8236-e1ab940d70e2",
                    "control-id": "ia-1",
                    description:
                      "CMS Cloud is responsible for a Identification and Authorization policy covering GSS Services and GSS Systems. Application Teams are responsible for a Identification and Authorization policy covering all application related accounts.",
                  },
                  {
                    uuid: "21d79028-b66d-4050-9801-bc98cfc11eea",
                    "control-id": "ia-2",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "3e8b9ffb-ac3d-48bd-8c5a-eb0d521a7b69",
                    "control-id": "ia-2.1",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "253b1733-34f8-4105-bdf5-7ffa8986f59f",
                    "control-id": "ia-2.2",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "034c2d1b-6e0a-49e7-9cd2-15639733e405",
                    "control-id": "ia-2.3",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "db7c4d78-f50d-434d-8500-a9edc2d37af2",
                    "control-id": "ia-2.4",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "786adff4-6c64-4d81-83e1-c81d8b7b44a6",
                    "control-id": "ia-2.6",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "cfa3a2af-ae70-4acf-88e2-0543ddbd2403",
                    "control-id": "ia-2.7",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "769209b4-95f1-4f78-a06a-8fd5b9cf0016",
                    "control-id": "ia-2.8",
                    description:
                      "CMS Cloud is responsible for authentication of VPC to OS components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "4400e06c-430d-4f3a-ad5f-a1e1089fc607",
                    "control-id": "ia-2.9",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "042c28fe-006a-43f0-8b57-d23eecf46fd3",
                    "control-id": "ia-2.11",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "98e21122-3b0a-4043-9f94-63e8d3ba83f7",
                    "control-id": "ia-2.12",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "921d7bd9-90fb-4581-9508-760874f29389",
                    "control-id": "ia-3",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components.",
                  },
                  {
                    uuid: "aa3f94bf-84b0-4f5d-84d9-915ace823465",
                    "control-id": "ia-4",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components",
                  },
                  {
                    uuid: "69211779-b4f1-47a6-b063-6cf8082af053",
                    "control-id": "ia-4.3",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System components. Application Teams are responsible for authentication of application components",
                  },
                  {
                    uuid: "2fbd0372-9cde-40fb-8a13-861b8fb091a2",
                    "control-id": "ia-5",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System identities. Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "98719dad-3206-4547-ab84-1de8bebdec37",
                    "control-id": "ia-5.1",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System identities. Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "8f23fb26-0e5c-4707-92ba-2348e7300c81",
                    "control-id": "ia-5.2",
                    description:
                      "CMS Cloud is responsible for the certificate management of GSS Service and GSS System components (e.g. ELBs). Application Teams are responsible for the certificate management of application components (e.g. Web)",
                  },
                  {
                    uuid: "e618a899-aa59-4e0b-983d-20768a5d67cb",
                    "control-id": "ia-5.3",
                    description:
                      "CMS Cloud is responsible for of GSS Services and GSS System multi-factor registration. Application Teams are responsible for application multi-factor registration.",
                  },
                  {
                    uuid: "eb232c04-7f6d-4aad-9f81-f4ff53a56011",
                    "control-id": "ia-5.11",
                    description:
                      "CMS Cloud is responsible for authentication of GSS Service and GSS System identities. Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "17fea895-729f-4d8a-9b7d-e251b63da2c3",
                    "control-id": "ia-6",
                    description:
                      "CMS Cloud is responsible for obscuring authentication of GSS Service and GSS System identities. Application Teams are responsible for obscuring authentication of application identities.",
                  },
                  {
                    uuid: "5c1c6266-b7f3-4012-94e5-cc3d39459bed",
                    "control-id": "ia-7",
                    description:
                      "CMS Cloud is responsible for implementing secure and compliant cryptography (e.g. FIPS 140-2) within GSS Services and GSS Systems. Application Teams are responsible for implementing secure and compliant cryptography (e.g. FIPS 140-2) within the Application.",
                  },
                  {
                    uuid: "c894d529-0d1d-472d-baf6-6c07964f7b96",
                    "control-id": "ia-8",
                    description:
                      "Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "66e026d9-afb3-49d8-848e-0cded1082635",
                    "control-id": "ia-8.1",
                    description:
                      "Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "653656fc-7ccc-4cc7-837e-628eafe98973",
                    "control-id": "ia-8.2",
                    description:
                      "Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "97304296-84df-4919-ba6a-bfdaa3007823",
                    "control-id": "ia-8.3",
                    description:
                      "Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "a8f80181-6026-42be-9080-3ab80fd8193e",
                    "control-id": "ia-8.4",
                    description:
                      "Application Teams are responsible for authentication of application identities.",
                  },
                  {
                    uuid: "8588576b-ac58-42aa-9d0b-7e9740b6c7ee",
                    "control-id": "ip-1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "9504b00e-3cb6-4165-ad92-e581068e0469",
                    "control-id": "ip-1.1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "14207541-2277-46d6-8489-b61477a9f4ed",
                    "control-id": "ip-2",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "e918332a-7410-4b61-802a-13746beb4f36",
                    "control-id": "ip-3",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "042be2f1-953f-4b7b-9eda-50d7021d90ea",
                    "control-id": "ip-4",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "55dc5e49-6d78-460c-8623-3f8aa37fb466",
                    "control-id": "ip-4.1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "e63c167f-e9f6-4d79-b120-c9f41350d1f2",
                    "control-id": "ip-cms-01",
                    description:
                      "CMS Cloud is responsible for an Individual Participation and Redress Control Family policy covering GSS Services and GSS Systems. Application Teams are responsible for an Individual Participation and Redress Control Family policy covering all application related accounts.",
                  },
                  {
                    uuid: "bce74e6f-2cbe-4ff8-990e-6c14eaae4377",
                    "control-id": "ir-1",
                    description:
                      "CMS Cloud is responsible for a Incident Response policy covering GSS Services and GSS Systems. Application Teams are responsible for a Incident Response policy covering all application related accounts.",
                  },
                  {
                    uuid: "d0269d9e-d02a-4567-86f1-cf05379e2153",
                    "control-id": "ir-2",
                    description:
                      "CMS Cloud is responsible for training the CMS Cloud teams. Application Teams are responsible for the training Application Teams.",
                  },
                  {
                    uuid: "30c6dc72-c367-4863-9531-f546e50e1e5c",
                    "control-id": "ir-2.1",
                    description:
                      "CMS Cloud is responsible for training the CMS Cloud teams. Application Teams are responsible for the training Application Teams.",
                  },
                  {
                    uuid: "28ab670f-5d25-4bfd-bfb4-58dea9292d49",
                    "control-id": "ir-2.2",
                    description:
                      "CMS Cloud is responsible for training the CMS Cloud teams. Application Teams are responsible for the training Application Teams.",
                  },
                  {
                    uuid: "ceb1b4a6-467e-41bf-9bad-8e0a245e2840",
                    "control-id": "ir-3",
                    description:
                      "CMS Cloud is responsible for testing the response from the CMS Cloud teams. Application Teams are responsible for testing the response from Application Teams.",
                  },
                  {
                    uuid: "0e26e208-f0fb-4f2b-8d59-18975e0ab456",
                    "control-id": "ir-3.2",
                    description:
                      "CMS Cloud is responsible for ensuring the response from the CMS Cloud teams factors in other plans such as the CP. Application Teams are responsible for ensuring the response from Application Teams factors in other plans such as the CP.",
                  },
                  {
                    uuid: "b4286c45-91c3-4eb1-9c7f-9c6f4fa6d38f",
                    "control-id": "ir-4",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "e655ad47-d01a-42ce-b6a4-ad45faf59aaa",
                    "control-id": "ir-4.1",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "e201ccfc-ba6d-4126-865b-f7e69e49f87f",
                    "control-id": "ir-4.3",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "e93b9dd4-060d-4fad-8f06-48ae31479e98",
                    "control-id": "ir-4.4",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "d523e83f-4603-456a-a0ff-c812e7a58131",
                    "control-id": "ir-4.6",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "e1ec74dc-711a-4f36-9f3f-a04abdfdb3de",
                    "control-id": "ir-4.7",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "dde8a43c-05b2-46be-a2fa-7a7937a49063",
                    "control-id": "ir-5",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "11835763-2945-4678-a30d-c071c4aef735",
                    "control-id": "ir-5.1",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "71f0a9ba-b79b-45c5-80f1-0091b7e65125",
                    "control-id": "ir-6",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "caf203cb-15b7-49d5-836b-aee565c93fd6",
                    "control-id": "ir-6.1",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "b4ec2547-0931-4fcb-a456-0cc2c2b11983",
                    "control-id": "ir-7",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "0b2dcfc4-80ba-4ae1-b00b-e9ae26d0df85",
                    "control-id": "ir-7.1",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "2b6ef9b7-f025-4d3a-9c37-f69b0311a29e",
                    "control-id": "ir-7.2",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "767fe5b8-dec3-408e-9807-c08982bddab4",
                    "control-id": "ir-8",
                    description:
                      "CMS Cloud is responsible for a Incident Response plan covering GSS Services and GSS Systems. Application Teams are responsible for a Incident Response plan covering all application related accounts.",
                  },
                  {
                    uuid: "769c5e3f-a8f7-4318-a9e9-1009ded5c10b",
                    "control-id": "ir-9",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "c5aac2d4-563f-4e8b-b635-07871937eba8",
                    "control-id": "ir-9.1",
                    description:
                      "CMS Cloud is responsible for assigning personnel from the CMS Cloud teams. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "ad5660c0-cfce-49f4-a9b9-f8fbda4ba205",
                    "control-id": "ir-9.2",
                    description:
                      "CMS Cloud is responsible for training the CMS Cloud teams. Application Teams are responsible for the training Application Teams.",
                  },
                  {
                    uuid: "b8d72379-5353-4e31-a6e8-5ccc75b42952",
                    "control-id": "ir-9.3",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "3c746cbb-a8ea-46d0-ba66-9eda8b5c0e76",
                    "control-id": "ir-9.4",
                    description:
                      "CMS Cloud is responsible for handling incidents when the incident involves GSS Services and GSS Systems. Application Teams are responsible for handling incidents when the incident involves the application.",
                  },
                  {
                    uuid: "4005a6d7-4520-4aa5-a963-81f85c7e6825",
                    "control-id": "ir-10",
                    description:
                      "CMS Cloud is responsible for handling forensics of GSS Services and GSS Systems. Application Teams are responsible for handling forensics of the application.",
                  },
                  {
                    uuid: "6515151e-7ee5-4318-897b-3f1a244a666d",
                    "control-id": "ma-1",
                    description:
                      "CMS Cloud is responsible for a Maintenance policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "0f344969-245f-410b-a53d-e2b9a40b7cfa",
                    "control-id": "ma-2",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "1f302e18-b017-4679-8f68-1a4189698dfa",
                    "control-id": "ma-2.2",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "1e663f47-60f3-47fa-81be-12ebd5635ebf",
                    "control-id": "ma-3",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "f6a03c2a-16b6-45a5-bab5-47ec31432f83",
                    "control-id": "ma-3.1",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "c8aca2ee-fead-46bd-b92d-f4a5cea57ce5",
                    "control-id": "ma-3.2",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "f3d05cd0-564f-4462-956b-1d0eadf117d5",
                    "control-id": "ma-3.3",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "3d00f17a-15c9-4aac-a2c3-458b00c71498",
                    "control-id": "ma-4",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "dbeb10b9-c054-4b00-b96b-eb94bcd9448e",
                    "control-id": "ma-4.1",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "fef3e98a-87e1-4e4a-9d9b-aee0fda49c03",
                    "control-id": "ma-4.2",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "c44c5f4d-55e0-45f6-a72d-407b1a84f09e",
                    "control-id": "ma-4.3",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems. Application owners are responsible for ensuring that systems performing non-local maintenance are hardened to a similar degree to that of the system being worked on.",
                  },
                  {
                    uuid: "6df5eb9b-8972-4cf2-8c64-2681c19a1ca5",
                    "control-id": "ma-4.6",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "901a745c-467a-4d6a-95ea-2c05a0112575",
                    "control-id": "ma-5",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "f59a14a4-228f-437f-875e-cbda695d526a",
                    "control-id": "ma-5.1",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "25ccacb8-f3df-464a-9cc2-b94ff636e052",
                    "control-id": "ma-6",
                    description:
                      "CMS Cloud is responsible for the maintenance and maintenance activities for GSS Services and Systems.",
                  },
                  {
                    uuid: "a53a9942-00b9-4eb0-87d4-7edfa5b2ab38",
                    "control-id": "mp-1",
                    description:
                      "CMS Cloud is responsible for a Media Protection policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "19a8c461-81ac-404d-97d1-ccee78b9482b",
                    "control-id": "mp-2",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "509b5410-3121-4476-b0bb-c0a0998a01f3",
                    "control-id": "mp-3",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "da7bf8d1-4bad-47b9-8266-3733f775d324",
                    "control-id": "mp-4",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "26fb5dfa-e128-4f44-b250-517675c00c07",
                    "control-id": "mp-5",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "9893dc91-7562-4dca-9446-ba886210bd2d",
                    "control-id": "mp-5.3",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "2e408eda-ce25-4935-bf19-7c0cad3938cd",
                    "control-id": "mp-5.4",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "8f791992-88a3-4d32-a279-977d0f943871",
                    "control-id": "mp-6",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "559371b3-00b1-4d9a-b36e-b1afc9f33ab2",
                    "control-id": "mp-6.1",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "725df417-9309-478b-a7b9-54c83887e295",
                    "control-id": "mp-6.2",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "5a9acd9b-fd01-47f2-a9c3-816a60ce9eeb",
                    "control-id": "mp-6.3",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "47bb2721-c4ba-48ca-934d-f75051280b34",
                    "control-id": "mp-6.8",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "71d37d7d-ce9d-41fe-9494-20e1d65cc3e5",
                    "control-id": "mp-7",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "64568c57-d753-4b1d-8dc2-788a028f088d",
                    "control-id": "mp-7.1",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "4dfdab01-8e93-401a-82fb-96e12c19b671",
                    "control-id": "mp-8",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "3f105c6a-77eb-477c-9eaa-e8d85d5e3f3d",
                    "control-id": "mp-8.3",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "38bc28ec-a828-434e-82d9-d07ad5f38547",
                    "control-id": "mp-cms-01",
                    description:
                      "CMS Cloud is responsible for the hardware media control activities from GSS Services and Systems.",
                  },
                  {
                    uuid: "9795b09c-4268-422e-b2f6-687728ac0519",
                    "control-id": "pe-1",
                    description:
                      "CMS Cloud is responsible for a Physical and Environment Protection policy covering GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "12bf2b04-b2d9-427c-a4aa-d6ab25351f99",
                    "control-id": "pe-2",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "27ad0b08-231d-4695-afc6-f65cc5ceb1be",
                    "control-id": "pe-2.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "bb569066-7731-4cba-839b-5839536953e2",
                    "control-id": "pe-3",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "22b0b7db-b30a-4298-ba48-f95a8c0ac1e4",
                    "control-id": "pe-3.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from the VPC to OS. The PE family covers maintenance of systems within this scope only.",
                  },
                  {
                    uuid: "75fb7622-6910-47ee-a448-c4505ea41827",
                    "control-id": "pe-4",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "310a26df-782a-43b3-8f81-fed6ff657e01",
                    "control-id": "pe-5",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "3dca61d2-12f1-41fa-ac9e-0d71ed5bff1c",
                    "control-id": "pe-6",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "23309ee9-b9d8-48d5-9968-4215f08d88bf",
                    "control-id": "pe-6.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "4356884e-d4bb-49f0-a829-2563ac84da46",
                    "control-id": "pe-6.4",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "450a21d1-57c3-45ad-9a9a-c77198fc311b",
                    "control-id": "pe-8",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "68406043-00c6-4862-9767-d5850e5ac7e0",
                    "control-id": "pe-8.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "05d376e8-e9c9-4d34-a958-2de823887216",
                    "control-id": "pe-9",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "5e0554f2-4feb-45ce-8e62-3d383b4a0eba",
                    "control-id": "pe-10",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "441cbcf0-3ccb-4b94-85f8-8764adcbf0ff",
                    "control-id": "pe-11",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "0340b030-bf91-43bc-af13-564459d1c2b4",
                    "control-id": "pe-11.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "147cc5fc-e7ce-46e1-ac4c-f73b35d8be88",
                    "control-id": "pe-12",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "7a1824a3-5ab2-47c4-bf98-e5e7b2ee2efd",
                    "control-id": "pe-13",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "e5019f98-7a6a-4205-8bc6-f8b4bff451a7",
                    "control-id": "pe-13.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "5b0f9ab6-d1f7-424b-89b4-250d2fe63924",
                    "control-id": "pe-13.2",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "947d33e0-bea1-49d6-9cb1-500b5627d213",
                    "control-id": "pe-13.3",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "6b86051a-f190-4d5e-b149-75ccd352527e",
                    "control-id": "pe-14",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "8318936b-4b93-4aae-8990-4eeb3e1f4094",
                    "control-id": "pe-15",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "9591bd6c-8370-4874-a778-0dd2d4a39ff2",
                    "control-id": "pe-15.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "790f5f79-63d3-428f-b3e5-bd6d3528f3f8",
                    "control-id": "pe-16",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "eeea6aa9-72a1-467f-a959-9846b67bbb06",
                    "control-id": "pe-17",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "161cabf1-55d4-4927-9340-78ab639fad0d",
                    "control-id": "pe-18",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "2ae8eecd-3da7-43bc-aae1-2c9e6f570a39",
                    "control-id": "pe-18.1",
                    description:
                      "CMS Cloud is responsible for the hardware, physical environment, and related activities from GSS Services and GSS Systems.",
                  },
                  {
                    uuid: "6837322b-70d2-4288-be39-ee8897eecd0e",
                    "control-id": "pl-1",
                    description:
                      "CMS Cloud is responsible for a Security Planning policy covering GSS Services and GSS Systems. Application Teams are responsible for a Security Planning policy covering all application related accounts.",
                  },
                  {
                    uuid: "98174417-2f04-4422-aa55-45a30fdcbbca",
                    "control-id": "pl-2",
                    description:
                      "CMS Cloud is responsible for creating and maintaining their SSP. Application Teams are responsible for creating and maintaining their SSP.",
                  },
                  {
                    uuid: "5240f2b8-1e40-4033-b640-f482f8d039b8",
                    "control-id": "pl-2.3",
                    description:
                      "CMS Cloud is responsible for creating and maintaining their SSP. This includes the plan to coordinate with other entities. Application Teams are responsible for creating and maintaining their SSP. This includes the plan to coordinate with other entities.",
                  },
                  {
                    uuid: "a1417854-1a44-45af-b427-36f87aed9e3f",
                    "control-id": "pl-4",
                    description:
                      "CMS Cloud is responsible for creating and maintaining their SSP. This includes the plan to coordinate with other entities. Application Teams are responsible for creating and maintaining their SSP. This includes the plan to coordinate with other entities.",
                  },
                  {
                    uuid: "74238f42-9114-40aa-b91f-79996e59716e",
                    "control-id": "pl-4.1",
                    description:
                      "CMS Cloud is responsible for creating and maintaining their Rules of Behavior. Application Teams are responsible for creating and maintaining their Rules of Behavior.",
                  },
                  {
                    uuid: "d7c512ed-d86a-4cb4-a79a-751a614f8bcf",
                    "control-id": "pl-8",
                    description:
                      "CMS Cloud is responsible for creating and maintaining their security architectural plan. Application Teams are responsible for creating and maintaining their security architectural plan.",
                  },
                  {
                    uuid: "9acfb8ee-5de1-4ac3-b03c-a3410b4496e8",
                    "control-id": "pm-1",
                    description:
                      "CMS Cloud is responsible for a Information Security Program plan covering GSS Services and GSS Systems. Application Teams are responsible for a Information Security Program plan covering all application related accounts.",
                  },
                  {
                    uuid: "3344da82-b0cf-4d33-a34f-ef03d06b2019",
                    "control-id": "pm-2",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "4840e9c8-c35e-406a-8c67-44dfc1d3148f",
                    "control-id": "pm-3",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "981a6c61-171b-4185-8f6b-efd98cd3b589",
                    "control-id": "pm-4",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "42616f64-fc28-488a-9d36-e44be24240d3",
                    "control-id": "pm-5",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "49a782c6-00e4-45aa-b4a0-b22dc6639791",
                    "control-id": "pm-6",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "d741abf0-519f-452d-bc7e-4c863ceb430b",
                    "control-id": "pm-7",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "099d7e28-f8e7-4550-8cd5-505ee9169c28",
                    "control-id": "pm-8",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "42b154a4-de17-48a9-8c6f-b8ec49aff389",
                    "control-id": "pm-9",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "e43c8137-e95b-4672-a0ce-f9ae49846ada",
                    "control-id": "pm-10",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "bdc94b64-19fe-4eea-8b4e-ecbd5d38297a",
                    "control-id": "pm-11",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "1b2cd200-9ebd-4abc-97e7-b901332fab6c",
                    "control-id": "pm-12",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "895fd160-a25d-40a9-8447-31ccbfc60e1c",
                    "control-id": "pm-13",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "d57240c2-a5ce-4ea4-9a4c-9ba90c2d1824",
                    "control-id": "pm-14",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "bf864e6e-dc60-4ae1-9e63-de4e82f4a1bd",
                    "control-id": "pm-15",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "d5f2f34f-60d7-44dd-84ff-5faaba250eae",
                    "control-id": "pm-16",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "03234422-c4c0-45db-b49f-4775ac6ab90f",
                    "control-id": "ps-1",
                    description:
                      "CMS Cloud is responsible for a Personnel Security policy covering GSS Services and GSS Systems. Application Teams are responsible for a Personnel Security policy covering all application related accounts.",
                  },
                  {
                    uuid: "e5fc906f-6aaf-4668-ac1a-207c2639780d",
                    "control-id": "ps-2",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "2d4c8b5e-4bbd-4dfe-adea-b10e377dd50b",
                    "control-id": "ps-3",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "c5076584-8b1d-492e-863c-c4116dc392e8",
                    "control-id": "ps-3.3",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "ca7522eb-5601-454f-8042-eaf6d5a9fdfc",
                    "control-id": "ps-4",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "b12a2866-fa07-47b5-8348-ed00d74c5dd4",
                    "control-id": "ps-4.2",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "662dd2c6-ef6f-46c1-acce-2764222c3063",
                    "control-id": "ps-5",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "15f99643-758e-4de9-9f42-064ec6c0d462",
                    "control-id": "ps-6",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "119b3403-1508-4985-a972-a7b33256f41d",
                    "control-id": "ps-7",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "0fdfafeb-8b15-409e-ad1d-b9c110edf034",
                    "control-id": "ps-8",
                    description:
                      "CMS Cloud is responsible for managing security plans and resources for the CMS Cloud program. Application Teams are responsible managing security plans and resources for the Application Team.",
                  },
                  {
                    uuid: "52ec8936-0683-40a4-9fc9-e495f09a7844",
                    "control-id": "ra-1",
                    description:
                      "CMS Cloud is responsible for a Risk Assessment policy covering GSS Services and GSS Systems. Application Teams are responsible for a Risk Assessment policy covering all application related accounts.",
                  },
                  {
                    uuid: "2a54420c-68d5-4098-8543-b5c0279c24e2",
                    "control-id": "ra-2",
                    description:
                      "CMS Cloud is responsible for risk assessment and documentation relating to the VPC to the OS. The Application Team is responsible for application specific risk assessment documentation and activities.",
                  },
                  {
                    uuid: "fafb35e6-0c79-4f1e-81a3-458862a6ad77",
                    "control-id": "ra-3",
                    description:
                      "CMS Cloud is responsible for risk assessment and documentation relating to the VPC to the OS. The Application Team is responsible for application specific risk assessment documentation and activities.",
                  },
                  {
                    uuid: "0e7fd201-45c8-4d28-a6e3-5c9ac7b00b6e",
                    "control-id": "ra-5",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "feced29a-7c05-460c-9137-34f90cdad04f",
                    "control-id": "ra-5.1",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "1f594ca9-b3b4-4c1c-9138-6ffa062a50f8",
                    "control-id": "ra-5.2",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "549d88bd-71ef-4377-b2f4-f622b0283b67",
                    "control-id": "ra-5.3",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "5a79c3e0-0b77-4a9a-addd-c1bef594ee53",
                    "control-id": "ra-5.4",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC, as well as providing remediation steps to limit discoverable system information. CMS Cloud does not execute remediation steps.",
                  },
                  {
                    uuid: "640a7306-ed08-4378-9a14-8194814e0bd6",
                    "control-id": "ra-5.5",
                    description:
                      "CMS Cloud is responsible for maintaining and conducting vulnerability scanning within the VPC.",
                  },
                  {
                    uuid: "9bbd7eba-c64f-4e9f-bd10-f9b27e99ec83",
                    "control-id": "sa-1",
                    description:
                      "CMS Cloud is responsible for a System and Services Acquisition policy covering GSS Services and GSS Systems. Application Teams are responsible for a System and Services Acquisition policy covering all application related accounts.",
                  },
                  {
                    uuid: "6548effd-4a04-43f9-9483-98c17441e544",
                    "control-id": "sa-2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "6cb3b4d5-f7f0-41da-98b7-21f4c448f10a",
                    "control-id": "sa-3",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "a2809e58-d9d0-48dc-bead-d8ab8d866418",
                    "control-id": "sa-4",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "4d624216-0b3a-489b-bef3-530554451bb1",
                    "control-id": "sa-4.1",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "b19ba6be-6824-44c4-afa2-c5f5e851f44f",
                    "control-id": "sa-4.2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "8640c037-5a89-4d55-9b84-fa495c105f0f",
                    "control-id": "sa-4.8",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "0d75f3e8-e212-443c-b521-fd89316aa65a",
                    "control-id": "sa-4.9",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "bff2aa72-daba-4eaf-b4de-103f66099139",
                    "control-id": "sa-4.10",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "e1b54215-d1f8-4ec3-8edf-b58efea5d905",
                    "control-id": "sa-5",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "64af3363-fcfd-45ac-a171-20fd1e49435d",
                    "control-id": "sa-8",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "a501a5de-d964-4cc6-a7b1-645d57091c48",
                    "control-id": "sa-9",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "701883c0-299e-4c2f-9f7b-a79a2f469b5b",
                    "control-id": "sa-9.2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "84b60f83-9af9-44ee-9ded-f0440e02924d",
                    "control-id": "sa-9.5",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "e80a56fa-33a5-4005-b013-ec2dffd0f7dd",
                    "control-id": "sa-10",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "60172ef6-4451-4774-b78d-c6cedb247d41",
                    "control-id": "sa-10.1",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "f8af67a0-e1c1-42de-be5b-5076496ab313",
                    "control-id": "sa-11",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "0d54b9ec-e71a-4afb-9949-4ffac8853123",
                    "control-id": "sa-11.2",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "e7ed210b-077d-48e4-9271-9a051f8ad797",
                    "control-id": "sa-11.5",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "36e82028-c9de-485e-bcd6-0aaa47fb4224",
                    "control-id": "sa-11.8",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "77d3e4f1-1c3f-4c51-8687-bdad8fa4579d",
                    "control-id": "sa-12",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "eca766e2-c777-4e61-a8a4-f48cc20cd76d",
                    "control-id": "sa-13",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "9f6e6067-3038-4a4e-a4fc-71b7fcb2ff51",
                    "control-id": "sa-15",
                    description:
                      "CMS Cloud is responsible for the security resources of the VPC to the OS. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "ce039be0-871a-444c-8753-526ea6ce177c",
                    "control-id": "sa-15.9",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "f5e4b8ad-45c2-4dfc-853e-4e079e83752d",
                    "control-id": "sa-16",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "773f14d7-e22f-4c03-8761-4aa2b6d0acc7",
                    "control-id": "sa-17",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "1a299723-ebb9-425f-a078-aaa5ca2d4119",
                    "control-id": "sa-21",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "1253cd4b-e24a-42c6-8bd8-cbe29ce831f7",
                    "control-id": "sa-22",
                    description:
                      "CMS Cloud is responsible for the security resources of GSS Services and GSS Systems. Application Teams are responsible for the security resources within the application.",
                  },
                  {
                    uuid: "b85fc599-1753-489e-b09f-00fd7d3c117e",
                    "control-id": "sc-1",
                    description:
                      "CMS Cloud is responsible for a System and Communications policy covering GSS Services and GSS Systems. Application Teams are responsible for a System and Communications policy covering all application related accounts.",
                  },
                  {
                    uuid: "e69f99ff-8e9d-414c-9a7d-4ec3da27a2ee",
                    "control-id": "sc-2",
                    description:
                      "CMS Cloud is responsible for separating user functionality for GSS Services and GSS Systems. Application Teams are responsible for separating user functionality for applications.",
                  },
                  {
                    uuid: "8fe1398b-d43d-4be5-a82d-5b8014ada6c4",
                    "control-id": "sc-3",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems. Application Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "586d025a-8c05-41e7-8cbb-9b00ede27f36",
                    "control-id": "sc-3.2",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems. Application Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "14fde5d3-f32e-49d3-b691-8c420835a047",
                    "control-id": "sc-3.3",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems. Application Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "127e89a0-abdc-4ecb-af8c-c8e4ef6cbf2a",
                    "control-id": "sc-3.4",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems. Application Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "1614a07d-8587-4517-a5b4-496eccffbe26",
                    "control-id": "sc-3.5",
                    description:
                      "CMS Cloud is responsible for separating security functionality for GSS Services and GSS Systems. Application Teams are responsible for separating security functionality for applications.",
                  },
                  {
                    uuid: "eb8864f4-6c3d-413d-81ae-ea845ab9b4eb",
                    "control-id": "sc-4",
                    description:
                      "CMS Cloud is responsible for managing shared information from GSS Services and GSS Systems. Application Teams are responsible for managing shared information of the application.",
                  },
                  {
                    uuid: "3a241e70-16da-41ed-ac7f-2d9abd0ac75f",
                    "control-id": "sc-5",
                    description:
                      "CMS Cloud is responsible for Denial of Service protection at the VPC and infrastructure level. Application Teams are responsible for Denial of Service protection of the application.",
                  },
                  {
                    uuid: "451153b2-e75b-4619-9460-788dac58711f",
                    "control-id": "sc-7",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level. Application Teams are responsible for boundary protection of the application within the VPC. For example, Security Group configuration.",
                  },
                  {
                    uuid: "599d5d1a-452f-44ef-a446-61a20cbc65a8",
                    "control-id": "sc-7.3",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level. Application Teams are responsible for boundary protection of the application within the VPC. For example, ENI configuration.",
                  },
                  {
                    uuid: "479756f7-2061-4fca-9328-584757a779f6",
                    "control-id": "sc-7.4",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level. Application Teams are responsible for boundary protection of the application within the VPC. For example, ENI configuration.",
                  },
                  {
                    uuid: "3f086eda-1c85-43cf-9b7d-93b55b820f57",
                    "control-id": "sc-7.5",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level. Application Teams are responsible for boundary protection of the application within the VPC. For example, Security Group configuration.",
                  },
                  {
                    uuid: "ff080683-5303-40a9-8b34-a62fb0efc421",
                    "control-id": "sc-7.7",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level to include VPN protection.",
                  },
                  {
                    uuid: "a8c8fa8a-e308-4d54-9ca8-ecff6122aff4",
                    "control-id": "sc-7.8",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level to include Proxy Servers.",
                  },
                  {
                    uuid: "1e9c3a13-a673-4a79-9011-26e0de3fdf08",
                    "control-id": "sc-7.14",
                    description:
                      "CMS Cloud is responsible for boundary protection at the VPC and infrastructure level to include physical protections.",
                  },
                  {
                    uuid: "753a6f96-7818-40b9-941d-012fc5414d90",
                    "control-id": "sc-7.18",
                    description:
                      "CMS Cloud is responsible for GSS Services and GSS Systems to Fail Secure. Application Teams are responsible for the Application Fail Secure.",
                  },
                  {
                    uuid: "48a098a7-12ea-4dfa-9396-faa284a55981",
                    "control-id": "sc-7.21",
                    description:
                      "CMS Cloud is responsible for the isolation of components of GSS Services and GSS Systems between different CMS business functions.",
                  },
                  {
                    uuid: "690fb31e-4a4c-4536-b5f4-2385bf810cdd",
                    "control-id": "sc-8",
                    description:
                      "CMS Cloud is responsible for the configuration and maintenance of secure data in transit across GSS Services and GSS Systems. Applications Teams are responsible for the configuration and maintenance of secure data in transit across the Application.",
                  },
                  {
                    uuid: "ccf09a5e-2c55-4c20-bdd4-3039716987fa",
                    "control-id": "sc-8.1",
                    description:
                      "CMS Cloud is responsible for utilizing approved cryptographic methods to secure data across GSS Services and GSS Systems. Applications Teams are responsible for utilizing approved cryptographic methods to secure data across the Application.",
                  },
                  {
                    uuid: "14b3536a-188a-4142-a3d0-0ace53c1cce9",
                    "control-id": "sc-8.2",
                    description:
                      "CMS Cloud is responsible for maintaining confidentiality and integrity of data prior to and after transmitting the data across GSS Services and GSS Systems. Applications Teams are responsible for maintaining confidentiality and integrity of data prior to and after transmitting the data across the application.",
                  },
                  {
                    uuid: "808a98ae-06fb-4e98-9a46-96955ae5781c",
                    "control-id": "sc-10",
                    description:
                      "CMS Cloud is responsible for configuring policy for Network Disconnect across the VPN.",
                  },
                  {
                    uuid: "f1620dda-21a8-496a-9af4-e39bc0149663",
                    "control-id": "sc-12",
                    description:
                      "CMS Cloud is responsible for utilizing approved cryptographic methods to secure data across the GSS Services and GSS Systems. Applications Teams are responsible for utilizing approved cryptographic methods to secure data across the Application.",
                  },
                  {
                    uuid: "c0e7c71c-84a1-4278-8775-f69941092f75",
                    "control-id": "sc-12.1",
                    description:
                      "CMS Cloud is responsible for utilizing approved cryptographic methods to secure data across the GSS Services and GSS Systems. Applications Teams are responsible for utilizing approved cryptographic methods to secure data across the Application.",
                  },
                  {
                    uuid: "93d6b9c0-5cab-4816-9e7f-25c8fb1b8876",
                    "control-id": "sc-13",
                    description:
                      "CMS Cloud is responsible for utilizing approved cryptographic methods to secure data across the GSS Services and GSS Systems. Applications Teams are responsible for utilizing approved cryptographic methods to secure data across the Application.",
                  },
                  {
                    uuid: "43a1039a-a3c3-44b4-8221-14cf95ed87ce",
                    "control-id": "sc-15",
                    description:
                      "Application Teams are responsible for the control if computing mechanisms are used in the application.",
                  },
                  {
                    uuid: "de8ab299-7e4e-4e8d-be49-16d98d804001",
                    "control-id": "sc-15.1",
                    description:
                      "Application Teams are responsible for the control if computing mechanisms are used in the application.",
                  },
                  {
                    uuid: "81f06af1-3fb1-4014-84ac-e04f7e95a8c6",
                    "control-id": "sc-17",
                    description:
                      "CMS Cloud is responsible for utilizing certificates to secure data across GSS Services and GSS Systems. Applications Teams are responsible for utilizing certificates to secure data across the Application.",
                  },
                  {
                    uuid: "bb406bde-2a18-4788-8886-479c567cd027",
                    "control-id": "sc-18",
                    description:
                      "CMS Cloud monitors for mobile code behavior that would be deemed maliciously impacting the GSS Services and GSS Systems. Application Teams are responsible for the identification of appropriate mobile code for use within the application and monitoring on the application level.",
                  },
                  {
                    uuid: "ab933dbd-6517-4679-8b68-02092fc9f9a7",
                    "control-id": "sc-19",
                    description:
                      "Application Teams are responsible for VOIP control if VOIP is used in the application.",
                  },
                  {
                    uuid: "5e560590-ca56-47a4-bc5c-b9f21cea4784",
                    "control-id": "sc-20",
                    description:
                      "CMS Cloud manages and maintains DNS as it relates to GSS Services and GSS Systems. Application Teams manage DNS as it relates to the application.",
                  },
                  {
                    uuid: "0fbd992b-3373-4297-bd84-55cf236cd99f",
                    "control-id": "sc-21",
                    description:
                      "CMS Cloud manages and maintains DNS as it relates to the GSS Services and GSS Systems. Application Teams manage DNS as it relates to the application.",
                  },
                  {
                    uuid: "f97ec1e7-3910-4c95-bb01-481dd48aade6",
                    "control-id": "sc-22",
                    description:
                      "CMS Cloud is responsible for architecture and provisioning of the infrastructure that DNS runs on.",
                  },
                  {
                    uuid: "8165b8c1-9f34-45f6-b08e-cfdc2d40d376",
                    "control-id": "sc-23",
                    description:
                      "CMS Cloud is responsible for the sessions within GSS Systems and GSS Services. Application Teams are responsible for sessions within the application.",
                  },
                  {
                    uuid: "a892839c-9262-4cf1-a3d8-f3029f339675",
                    "control-id": "sc-24",
                    description:
                      "CMS Cloud is responsible for GSS Services and GSS Systems to Fail in a Known State. Application Teams are responsible for the Application Fail in Known State.",
                  },
                  {
                    uuid: "43bb5f2f-147d-483c-b689-f225fa468baf",
                    "control-id": "sc-28",
                    description:
                      "CMS Cloud is responsible for data at rest that resides on GSS Services and GSS Systems. Applications Teams are responsible for data at rest within the applications.",
                  },
                  {
                    uuid: "ecdc8049-b68a-4abf-ae2a-9332e5f8a76e",
                    "control-id": "sc-28.1",
                    description:
                      "CMS Cloud is responsible for data at rest that resides on GSS Services and GSS Systems. Applications Teams are responsible for data at rest within the applications.",
                  },
                  {
                    uuid: "73904d6d-1378-4be4-a7bf-f7ffdecab28c",
                    "control-id": "sc-32",
                    description:
                      "CMS Cloud is responsible for providing separate environments that can be partitioned based on the needs from the associated system security plan.",
                  },
                  {
                    uuid: "4513140a-c2be-47e6-9387-1888a2dd8b5f",
                    "control-id": "sc-39",
                    description:
                      "CMS Cloud is responsible for GSS Services and GSS System Process Isolation. Application Teams are responsible for the Application Process Isolation.",
                  },
                  {
                    uuid: "2b214aa8-7e14-46b3-aca8-f3504fa28703",
                    "control-id": "sc-cms-01",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems. Application Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "e7cd6cd1-7d58-4b05-800f-c92fadb00c4d",
                    "control-id": "sc-cms-02",
                    description:
                      "CMS Cloud is responsible for restricting publicly facing websites supporting GSS Services and GSS Systems. Application Teams are responsible for restricting publicly facing websites supporting the application.",
                  },
                  {
                    uuid: "335db2e7-27c7-4c96-bed9-8c028fb6a52d",
                    "control-id": "se-1",
                    description:
                      "Application Teams are responsible to establish, maintain, and update information about PII in the application.",
                  },
                  {
                    uuid: "b0149762-257a-4f8b-a6ed-c9aa9005d406",
                    "control-id": "se-2",
                    description:
                      "Application Teams are responsible to establish, maintain, and update information about PII in the application.",
                  },
                  {
                    uuid: "e1e0f4fb-f573-4c49-b1ae-3f6168196b44",
                    "control-id": "se-cms-01",
                    description:
                      "CMS Cloud is responsible for a Security Control policy covering GSS Services and GSS Systems. Application Teams are responsible for a Security Control policy covering all application related accounts.",
                  },
                  {
                    uuid: "f832451d-2b30-4c66-863e-ab8c0e781453",
                    "control-id": "si-1",
                    description:
                      "CMS Cloud is responsible for a System and Information Integrity policy covering GSS Services and GSS Systems. Application Teams are responsible for a System and Information Integrity policy covering all application related accounts.",
                  },
                  {
                    uuid: "ec703426-2726-45ab-947b-ce97a4136a4a",
                    "control-id": "si-2",
                    description:
                      "CMS Cloud is responsible for flaw remediation within GSS Services and GSS Systems. Application Teams are responsible for flaw remediation within the Application and supporting software.",
                  },
                  {
                    uuid: "415f090b-71ae-4054-b29d-904106bdef7c",
                    "control-id": "si-2.1",
                    description:
                      "CMS Cloud is responsible for flaw remediation within GSS Services and GSS Systems. Application Teams are responsible for flaw remediation within the Application and supporting software.",
                  },
                  {
                    uuid: "d3ec02d7-ee9e-4a05-b597-417fe64bbaca",
                    "control-id": "si-2.2",
                    description:
                      "CMS Cloud is responsible for flaw remediation within GSS Services and GSS Systems. Application Teams are responsible for flaw remediation within the Application and supporting software.",
                  },
                  {
                    uuid: "12ade439-8a02-403e-b3b5-3c93bdf8556a",
                    "control-id": "si-2.3",
                    description:
                      "CMS Cloud is responsible for flaw remediation within GSS Services and GSS Systems. Application Teams are responsible for flaw remediation within the Application and supporting software.",
                  },
                  {
                    uuid: "42dfe5b1-c0ce-43b6-b70f-40a93a4b1326",
                    "control-id": "si-3",
                    description:
                      "CMS Cloud is responsible for malicious code protection at the Operating System level. Application Teams are responsible for supporting the capabilities of the security tools that conduct malicious code protection.",
                  },
                  {
                    uuid: "e97692a3-6fae-4baf-a56d-8935f17f9c95",
                    "control-id": "si-3.1",
                    description:
                      "CMS Cloud is responsible for malicious code protection at the Operating System level. Application Teams are responsible for supporting the capabilities of the security tools that conduct malicious code protection.",
                  },
                  {
                    uuid: "b8327171-58d3-4def-86e0-3374c82c7248",
                    "control-id": "si-3.2",
                    description:
                      "CMS Cloud is responsible for malicious code protection at the Operating System level. Application Teams are responsible for supporting the capabilities of the security tools that conduct malicious code protection.",
                  },
                  {
                    uuid: "aa7e5f3d-6d1f-461a-bef4-89bd71221449",
                    "control-id": "si-4",
                    description:
                      "CMS Cloud is responsible for monitoring activity for GSS Services and GSS Systems such as VPC (Network) Services to Operating Systems. Application Teams are responsible for monitoring activity at the application level.",
                  },
                  {
                    uuid: "b985c376-66a3-4e38-921c-2b5fb4bf6f70",
                    "control-id": "si-4.1",
                    description:
                      "CMS Cloud is responsible for configuring GGS Services and GSS Systems that provide system wide monitoring.",
                  },
                  {
                    uuid: "b0759d38-817c-4a77-b6c7-a9cd8cd9bbac",
                    "control-id": "si-4.2",
                    description:
                      "CMS Cloud configures the connection and collection of security systems into a system-view view. A SIEM is used to fulfill this.",
                  },
                  {
                    uuid: "572c8651-406a-4f2d-b18a-8fd1bbc94c8c",
                    "control-id": "si-4.3",
                    description:
                      "CMS Cloud configures GSS Services and Systems to automatically integrate with detection intrusion functionality.",
                  },
                  {
                    uuid: "496aceb1-dc76-4c7b-8e3e-3db0e5af2aa4",
                    "control-id": "si-4.4",
                    description:
                      "CMS Cloud configures the connection and collection of network events into a system-view view. A SIEM is used to fulfill this.",
                  },
                  {
                    uuid: "97eeaa78-b4af-4f13-ba29-ce014449a7db",
                    "control-id": "si-4.5",
                    description:
                      "CMS Cloud configures alerts from security and operational tools for the detection and response to potential threats to GSS Services and GSS Systems. Application Teams are responsible for configuring alerts specific to threats to the application.",
                  },
                  {
                    uuid: "0fc72b78-7099-4732-93d7-7161ed0bfbfd",
                    "control-id": "si-4.14",
                    description:
                      "CMS Cloud is not responsible for any external physical device. Application Teams are responsible for external physical devices.",
                  },
                  {
                    uuid: "994da09d-a85d-4333-a953-1e006f202adb",
                    "control-id": "si-4.16",
                    description:
                      "CMS Cloud configures alerts from security and operational tools for the detection and response to potential threats to GSS Services and GSS Systems. Application Teams are responsible for configuring alerts specific to threats to the application.",
                  },
                  {
                    uuid: "90250e10-6a8d-47bf-9eea-4b99d6667c47",
                    "control-id": "si-4.23",
                    description:
                      "CMS Cloud configures GSS Services and Systems with host based or cloud based detection functionality.",
                  },
                  {
                    uuid: "a202a091-1f02-4e9f-b412-3c1f2553e632",
                    "control-id": "si-4.24",
                    description:
                      "CMS Cloud configures alerts from security and operational tools for the detection and response to potential threats to GSS Services and GSS Systems. Application Teams are responsible for configuring alerts specific to threats to the application.",
                  },
                  {
                    uuid: "a1905c6f-e509-4dcb-9767-de10fe8f07ef",
                    "control-id": "si-5",
                    description:
                      "CMS Cloud receives and responds to security communication relating to GSS Services and GSS Systems. Application Teams receive and respond to security communication relating to the application.",
                  },
                  {
                    uuid: "d061419f-de01-4c9b-9d12-1833029fcfd2",
                    "control-id": "si-5.1",
                    description:
                      "CMS Cloud receives and responds to security communication relating to GSS Services and GSS Systems. Application Teams receive and respond to security communication relating to the application.",
                  },
                  {
                    uuid: "6d8075a4-4e68-4319-9be3-f68ce167b9b6",
                    "control-id": "si-6",
                    description:
                      "CMS Cloud is responsible for verifying Security Functions through GSS Services and GSS Systems. Application Teams are responsible for supporting the capabilities of the security tools.",
                  },
                  {
                    uuid: "9b14e4ee-2677-440f-ad0a-e424fde2c8bc",
                    "control-id": "si-6.2",
                    description:
                      "CMS Cloud is responsible for verifying Security Functions through GSS Services and GSS Systems. Application Teams are responsible for supporting the capabilities of the security tools.",
                  },
                  {
                    uuid: "48dfabbd-29f0-4d51-813c-e9cf06b26d47",
                    "control-id": "si-7",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application Teams are responsible for the detection and response to changes in the application",
                  },
                  {
                    uuid: "017a0d02-9d40-49b1-9923-414ae69f3fa7",
                    "control-id": "si-7.1",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application Teams are responsible for the detection and response to changes in the application",
                  },
                  {
                    uuid: "e5bb5369-9c34-4dd3-b66e-690921cb011c",
                    "control-id": "si-7.2",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application Teams are responsible for the detection and response to changes in the application",
                  },
                  {
                    uuid: "27b950d9-083f-46f9-8876-bf0cbe4e8a04",
                    "control-id": "si-7.5",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application Teams are responsible for the detection and response to changes in the application.",
                  },
                  {
                    uuid: "993d69f3-608c-48a4-b680-b955810608e2",
                    "control-id": "si-7.6",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application Teams are responsible for the detection and response to changes in the application.",
                  },
                  {
                    uuid: "f9226cbf-5890-41b4-9fd1-8d15a9db69b1",
                    "control-id": "si-7.7",
                    description:
                      "CMS Cloud is responsible for the detection and response to changes in GSS Services and GSS Systems. Application Teams are responsible for the detection and response to changes in the application.",
                  },
                  {
                    uuid: "f4cf17f4-08bf-43ed-b393-4f377e9a31ce",
                    "control-id": "si-7.14",
                    description:
                      "CMS Cloud is responsible for validating and supporting Binary or Machine Executable Code on the OS. Application Teams are responsible validating and supporting Binary or Machine Executable Code from the application.",
                  },
                  {
                    uuid: "40c22f7c-28bc-427b-b0df-b50c22ba0ec4",
                    "control-id": "si-8",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems. Application Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "c0d23696-afb0-4dab-96ea-6834ac1f73df",
                    "control-id": "si-8.1",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems. Application Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "cfdbc534-c925-42c8-9ebd-b2a9104907a6",
                    "control-id": "si-8.2",
                    description:
                      "CMS Cloud is responsible for protecting information sent via email originating from GSS Services and GSS Systems. Application Teams are responsible for protecting information sent via email originating from the application.",
                  },
                  {
                    uuid: "4fd02c6c-eb38-4033-973f-39b58dc354bd",
                    "control-id": "si-10",
                    description:
                      "CMS Cloud is responsible for input validation within GSS Services and GSS Systems. Application Teams are responsible for input validation within the application.",
                  },
                  {
                    uuid: "39fd38f7-042a-4abb-a0d2-572f3463442e",
                    "control-id": "si-11",
                    description:
                      "CMS Cloud is responsible for error handling within GSS Services and GSS Systems. Application Teams are responsible for error handling within the application.",
                  },
                  {
                    uuid: "4ea50dd9-434e-46e4-8fc2-349c251f3075",
                    "control-id": "si-12",
                    description:
                      "CMS Cloud is responsible for the handling of information for GSS Services and GSS Systems. Application Teams are responsible for the handling information from the application.",
                  },
                  {
                    uuid: "0c4c4201-3498-4821-9c39-db415fa7e684",
                    "control-id": "si-16",
                    description:
                      "CMS Cloud is responsible for the handling of memory protection at the Operating System (e.g. kernel) and hardware level.",
                  },
                  {
                    uuid: "79d449b8-9f20-45d6-bcb6-7e5c22e35331",
                    "control-id": "tr-1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "de9cc3ba-15ee-4373-95b5-27ef9577f8a9",
                    "control-id": "tr-1.1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "8ffd9a30-29f6-461d-986c-5eff5ec75a08",
                    "control-id": "tr-2",
                    description:
                      "CMS Cloud is responsible for maintaining a System of Records Notices and Privacy Act Statement when applicable. Application Teams are responsible for maintaining their System of Records Notices and Privacy Act Statement when applicable.",
                  },
                  {
                    uuid: "f5554b5b-3182-4ea4-8c6f-e488c88d5d52",
                    "control-id": "tr-2.1",
                    description:
                      "CMS Cloud is responsible for maintaining a SORN when applicable. Application Teams are responsible for maintaining their SORN when applicable.",
                  },
                  {
                    uuid: "d2b61c5e-8ce8-46e1-af67-82db961f49ab",
                    "control-id": "tr-3",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "ea9fdfb8-5703-4efa-a71e-0f1686c50b96",
                    "control-id": "tr-cms-01",
                    description:
                      "CMS Cloud is responsible for a Transparency policy covering GSS Services and GSS Systems. Application Teams are responsible for a Transparency policy covering all application related accounts.",
                  },
                  {
                    uuid: "e66d21dc-0e64-4071-9467-4a045dabc710",
                    "control-id": "ul-1",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "dae8c4cd-aab3-4b99-ae52-0e4e5cc82114",
                    "control-id": "ul-2",
                    description:
                      "Application Teams are responsible for the configuration of handling of PII and PHI data within the application.",
                  },
                  {
                    uuid: "dd0b4141-f975-4bb7-b21e-e96e3d096280",
                    "control-id": "ul-cms-01",
                    description:
                      "CMS Cloud is responsible for a Use Limitation policy covering GSS Services and GSS Systems. Application Teams are responsible for a Use Limitation policy covering all application related accounts",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 487,
  },
  {
    id: 67,
    title: "Django",
    description: "Django",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "b35d8552-b57c-440a-a898-8b395fb909e7",
        metadata: {
          title: "Django",
          version: "unknown",
          published: "2021-12-14T19:53:40.321377+00:00",
          "last-modified": "2021-12-14T19:53:40.321382+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "de62defb-577d-4489-8ddf-e12f4f0b7e8d",
            title: "Django",
            description: "Django",
            "control-implementations": [
              {
                uuid: "650e07f9-7dfd-4940-8c8e-6c00b1530279",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "36e7d552-52f0-4787-a090-78afd19cfe23",
                    "control-id": "ac-3",
                    description:
                      "The Django web framework has built-in authentication to enforce logical access to information and services.",
                  },
                  {
                    uuid: "d1bfb3ae-dc43-4183-a953-954fece3060f",
                    "control-id": "ac-11",
                    description:
                      "The Django web framework has built-in session management that includes locking and terminating a session after a specific duration of inactivity. The duration of a session is set by configuring the `SESSION_COOKIE_AGE` in `settings.py`.",
                  },
                  {
                    uuid: "62a1e9f9-3dda-45a3-b960-85e9aac8b7de",
                    "control-id": "ac-14",
                    description:
                      "The Django web framework has built-in session management and path routing that be combined to control which actions that can be performed by the end-user do or do not require authentication.",
                  },
                  {
                    uuid: "e2029d5f-aaaf-4792-a535-09603449dff7",
                    "control-id": "au-3",
                    description:
                      "The Django web framework contains built-in logging tools that can be configured and programmed by application developers to generate audit records containing required information.",
                  },
                  {
                    uuid: "207b17e6-d09e-4e69-812f-a7f7f691b9d6",
                    "control-id": "au-8",
                    description:
                      "The Django web framework uses the Python programming language's time module for generating and time and date stamps. The Python programming language has access to the Operating System's clock for time and date information.",
                  },
                  {
                    uuid: "c412fe41-693f-4fdf-964a-b5891498a734",
                    "control-id": "ia-2",
                    description:
                      "The Django web framework has built-in authentication to enforce logical access to information and services.",
                  },
                  {
                    uuid: "94f8dc0b-2eaf-4538-93f6-3ebef90248f0",
                    "control-id": "ia-6",
                    description:
                      "The Django web framework has built-in authentication processes that obscure feedback of authentication information during the authentication process. Django also has a built-in `DEBUG` setting that when set to `False` prevents all error information from being rendered to the web browser.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 7,
  },
  {
    id: 68,
    title: "eua",
    description: "Enterprise User Administration",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "4a4bde1d-5576-48df-9599-5b32aa735eca",
        metadata: {
          title: "eua",
          version: "unknown",
          published: "2022-04-13T01:23:30.823937+00:00",
          "last-modified": "2022-04-13T01:23:30.823945+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "297c5955-5100-4185-baf1-aea99df89957",
            title: "Enterprise User Administration",
            description: "Enterprise User Administration",
            "control-implementations": [
              {
                uuid: "36aee7da-6572-4cba-b570-b260b0df1efe",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "5d0322e5-41fe-4064-9143-d03ebcbe9709",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5513f3c5-bbe5-4564-a4bd-f7332c8b6fe2",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "4128b93f-8042-45f8-b7fe-d9b0fe632145",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2",
                    description:
                      "EUA is designed to enforce a review of information system accounts by system owners for compliance with account management requirements, including password change and account inactivity requirements, within every ninety (90) days. Users are required to complete an annual certification within every three hundred sixty-five (365) days or access will be revoked. All default accounts have been removed or disabled. All required active default accounts have been renamed. EUA is the system which enables centralized control of user access administrator functions. The EUA System Procedures document defines the parameters of the access provided to contractors and defines security requirements for contractors, and how access is granted for all users. EUA does not use/allow shared accounts, so control requirement k. does not apply.\n Application owners are required to review their users within the specified\ntimeframes designated by their system's FIPS 199 categorization.",
                  },
                  {
                    uuid: "77f66c0d-72fe-40ff-9315-cc5926c2a00e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "097f9ea9-7fb1-4d75-a179-4eebde1ca8fc",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "b53d21c1-343d-4c82-bc1f-dbbd1e063ab4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.1",
                    description:
                      "The organization employs automated email mechanisms to support the management of information system accounts, including emails being sent to management upon user transfer, termination, and modification. Additionally, users are emailed with password expiration warning before the actual expiration of their password to ensure proper management of their accounts.",
                  },
                  {
                    uuid: "41767812-22ca-455a-9a2a-053cef568202",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "facdf2d6-61b4-4b6d-a4fe-e2f2922cb727",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "545ef3e4-3548-4af3-ac0a-e0cadf952b19",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.3",
                    description:
                      "Active users may not log into the EUA system directly, or take any other actions directly within EUA, that would provide reasonable insight into the active status of the user's account. To satisfy this control, account management activities are monitored at a thirty day interval to ensure a user has taken appropriate actions to keep their account in good standing. After thirty days of the account no longer being actively managed, the user account is disabled automatically. Users must call the IT services desk in order to reestablish their account.",
                  },
                  {
                    uuid: "ac58a9ee-7757-49e4-ade1-82e42b5395d7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2f36bb10-be01-4cb3-9cdd-7c88425a40b9",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "41a2a8b1-4e29-46fa-ae03-0e4b7481eadb",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.13",
                    description:
                      "Account management activities are expedited for revocation of access for high risk user accounts. A high priority email is sent to the EUA team to ensure revocation of access at a specific time, not to exceed 60 minutes from the time the high risk account is identified.",
                  },
                  {
                    uuid: "323426f6-617c-447d-a411-8610ad9e71ed",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "66a5180f-3370-4a8d-acf1-991dbd05bb33",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "becaac1f-e680-4662-ba00-110ead5bd682",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-5",
                    description: "",
                  },
                  {
                    uuid: "72e105fc-e613-4430-bec8-2bc0c46fd398",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "380e78bd-a1c0-4505-b303-28f1d25511b6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "f7e3ff17-8595-4ad1-9a23-e8a6af27ab3a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6",
                    description:
                      "File system access is controlled by the GSS contractor, LEIDOS. Access is only granted for as explicitly required for system, application, and administrator functionality. Contractors are provided with minimal system and physical access, and must agree to and support the CMS security requirements prior to be given access to the CMS network or any applications. The database administration is performed by a separate team than the EUA implementation or operations team. The application support team does not have database admin access. Only authorized users are permitted to access those files, directories, drives, workstations, servers, network shares, ports, protocols, and services that are expressly required for the performance of job duties which is granted by Job codes approved by the user’s manager and the business owner. OS level access and physical access is granted to the GSS support contractor LEIDOS based on the business requirements and according to job roles and responsibilities.",
                  },
                  {
                    uuid: "8514ae54-2593-434d-af6b-ef4a198b6037",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ee5a6d96-f9b0-44fa-89ed-2376a9707f90",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "c0b68a8c-3769-4817-a5fb-6193936efdd1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.1",
                    description:
                      "Only the EUA administrators and operations team have access to the following functions at the application level. The GSS contractor, LEIDOS, controls infrastructure level security functions and SCI controls database configuration and auditing.\n - Setting/modifying audit logs and auditing behavior; - Setting/modifying boundary\nprotection system rules;\n - Configuring/modifying access authorizations (i.e., permissions, privileges);\n - Setting/modifying authentication parameters; and\n - Setting/modifying system configurations and parameters.",
                  },
                  {
                    uuid: "46f8b77b-4bb6-452a-9e1c-42861f712550",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "41015fa9-9a3b-4e81-80f8-25dfbe046ac7",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "85ec74fe-35c7-4d09-998f-a216a86c40df",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.2",
                    description:
                      "Only the EUA administrators and operations team have access to the following functions at the application level. Lockheed Martin controls infrastructure level security functions and SCI controls database configuration and auditing.\n - Setting/modifying audit logs and auditing behavior; - Setting/modifying boundary\nprotection system rules;\n - Configuring/modifying access authorizations (i.e., permissions, privileges);\n - Setting/modifying authentication parameters; and\n - Setting/modifying system configurations and parameters.",
                  },
                  {
                    uuid: "a2add92c-36ba-47c1-892a-70512b75c18e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ef9eaadf-8a40-4960-b9f4-7dfe247d40fa",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "e717b0b4-2faf-43a8-84e4-d4c2fc0583e5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.5",
                    description:
                      "EUA Administrator accounts are restricted to defined roles and granted via job codes approved by management and business owners.",
                  },
                  {
                    uuid: "762dd6e8-6713-4107-a85a-4e5b9c1438ed",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8a2a9731-484b-45ce-9e09-ae25f616414b",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "4de1350c-f264-4ff6-9ec2-c977b51a80e9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.10",
                    description:
                      "EUA has roles that have been defined specifically to limit access to those requirement only to perform job responsibilities at the least level of privilege required. This access is granted based on Job codes upon approvals.",
                  },
                  {
                    uuid: "7c0e9f78-90cf-4ccb-8403-e1de31cf3057",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "23b2aafd-1191-461f-be5c-e3b5c320a83b",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "9596df55-cf7c-4e49-a644-6bb1fa5f6f35",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-7",
                    description:
                      "Users are locked out of EUA after 3 invalid logon attempts within a 120 minute period. They are locked out indefinitely or until the user contacts the CMS IT Service Desk. The CMS IT Service Desk will authenticate the user and can unlock the account with a temporary password. The user must immediately change the password to a new password.",
                  },
                  {
                    uuid: "a815f5c7-c18a-4814-a1c6-97f3877a5656",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "afa5eb93-ace4-4439-a883-965b4c9d3f45",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c7d4dcef-2a1a-4790-a8b2-e9c1f63c7b37",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-17.9",
                    description:
                      "NGS could expeditiously remove disconnects/disables remote access within an hour.",
                  },
                  {
                    uuid: "ba032a55-3e34-43eb-89ac-b0341dd83cee",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ec126897-7e51-4f4f-9aa6-f75149503dd4",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "7c311cd8-6624-4c24-9481-6a8f200ad352",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-2",
                    description:
                      "The EUA application is capable, and currently audits, the following events:\n(a) User log-ons to the EUA application (successful or unsuccessful);(b) All application administration activities;(c) Modification of privileges and access; and(d) Account creation, modification, or deletion.",
                  },
                  {
                    uuid: "5fb327a4-0dc7-42d8-b6f9-4d928ff04aad",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "289d2d71-b6f5-4e05-91d2-f2be640c7f5a",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d684d34b-2112-450a-9bb8-61b35df0cea0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-2.3",
                    description:
                      "NGS and CMS collobaratively review and update the list of auditable events within every three hundred sixty-five (365) days.",
                  },
                  {
                    uuid: "77d4afbe-a361-4949-b7b1-ff6419429007",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3affae55-df8b-412d-9135-ad234aea4bc6",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "301df729-4e28-4d8c-98c7-925a13a2aafc",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-3",
                    description:
                      "The EUA application generates audit records containing information that establishes what type of event occurred, when the event occurred, the source of the event, the outcome of the event, and the identity of any individuals or subjects associated with the event. This is reportable criteria within the EUA reporting function.",
                  },
                  {
                    uuid: "702223cc-d186-45c0-a57e-1227c3dd7b3b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "100de93e-4770-484c-985f-6ffafe2193d8",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "517c7f4e-c1f1-4135-a6f6-268b530b8ad5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-3.1",
                    description:
                      "The EUA application generates audit records containing:- Filename accessed;- Program or command used to initiate the event; and- Source and destination addresses.\nThis is reportable criteria in the EUA reporting function.",
                  },
                  {
                    uuid: "2e85a4f0-d29a-41df-acb5-21c8316ccb55",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "705dd818-3dc7-4945-a2e4-03c22113dd71",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "7a254861-e346-4020-949e-43680768c06a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-3.2",
                    description:
                      "The EUA logs are centrally located on specific servers which are based on the audit events logged. Reporting mechanisms exist which include all account creation, modification, and deletion records for EUA. Environment workflow and provisioning changes are captured in the reporting mechanism.",
                  },
                  {
                    uuid: "2e473a4f-3304-46f2-88eb-94bf8f102398",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "4ba15487-128d-43bd-ba8c-53c6ac935a88",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "03811a27-0e32-4f46-80b5-dae1d690c883",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-10",
                    description:
                      "The EUA application allows account provisioning given a unique set of PII being entered into the EUA system. A unique user name is generated for that individual based on their PII, including name and social security number. Authentication to the EUA system is required in order to acccess the system. The CMS user ID is captured in application level audit log data to ensure that application level actions taking place on behalf of the user, or by the user, can be correlated to that unique individual.",
                  },
                  {
                    uuid: "eb18a0cc-6ba6-4431-aa44-62220a4c75e3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d0a23e59-dd98-4b37-a22d-02436a257080",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "a7730905-7783-4cfe-b14b-b58a6b576a06",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-12",
                    description:
                      "The EUA application generates audit events as specified in the control criteria. These events are reportable criteria in the EUA reporting functions.",
                  },
                  {
                    uuid: "78222c7e-766b-4311-82a2-424b419cadd2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fe0935db-bc51-4029-8633-edfa257e1299",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "273b7caf-eced-4e46-8e07-30d15eb0ef3d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2",
                    description:
                      "EUA requires the use of system and/or network authenticators and unique user identifiers in order to use the application, or any managed system. Help desk support requires user identification for any transaction that has information security implications, including password resets or account lockout resets.",
                  },
                  {
                    uuid: "70e8a3e4-f9ee-4411-93ef-d2fedd72ac42",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ebae1311-9168-4920-b043-b2c1c2123ed8",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "fc3ac37e-7511-463b-b432-d545bf22aee7",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-4",
                    description:
                      "EUA identifies are managed by:\n a. Receiving authorization from direct management, CAAs, and job code business\nowners, to assign an individual, group, role, or device identifier;\n b. Selecting a unique identifier that identifies an individual by being correlated\nto their verified PII\n c. Assigning the identifier to the intended individual and providing a one\ntime password for the user to gain access and control to their account, including an immediate reset of the password upon successful login;\n d. Preventing reuse of identifiers until all previous access authorizations\nare removed from the system, including all file accesses for that identifier but not before a period of at least 7 years has expired; and\n e. Disabling the identifier after sixty (60) days or less of successful account\nmanagement activity, which is the primary method of determining and verifying inactivity, and by deleting disabled accounts during the annual re-certification process, or upon approval of the user's direct management.",
                  },
                  {
                    uuid: "4187d7c0-1b3b-427f-a88e-9b99b5cee6ec",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "02806e39-41e3-4fbe-965c-a639f6fb5679",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "76e86e7d-337c-4963-9f3d-6284d45a2db5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-4.3",
                    description:
                      "The EUA registration process includes identity proofing mechanisms which are validated by business units via attestations or other mechanisms. A user's social security number is used to uniquely assosciate a user with an account in EUA. Applications which make use of EUA for account management may inherit this control. The submission of documentation is the responsibility of the business unit, and the commensurate access granted to those individuals is the responsibility of the business unit.",
                  },
                  {
                    uuid: "b6e1c106-d339-4658-b595-ccd2f26b606d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c2be0bed-cbad-4b96-8e58-0be637c63551",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "5e2982c2-6c27-4f41-98e7-3a3b61f9d17f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5",
                    description:
                      "NGS and CMS manage information system authenticators by: a. Verifying, as part of the initial authenticator distribution, the identity of the individual, group, role, or device receiving the authenticator; b. Establishing initial authenticator content for authenticators defined by the organization; c. Ensuring that authenticators have sufficient strength of mechanism for their intended use; d. Establishing and implementing administrative procedures for initial authenticator distribution, for lost/compromised or damaged authenticators, and for revoking authenticators; e. Changing default content of authenticators prior to information system installation; f. Establishing minimum and maximum lifetime restrictions and reuse conditions for authenticators; g. Changing/refreshing authenticators as follows: - Passwords are valid for no longer than the period directed in IA-5(1); - PIV compliant access cards are valid for no longer than five (5) years; and (CMS managed and distributed) - PKI certificates issued in accordance with the Federal PKI Common Policy are valid for no longer than three (3) years;  (CMS managed and distributed) h. Protecting authenticator content from unauthorized disclosure and modification; i. Requiring individuals to take, and having devices implement, specific security safeguards to protect authenticators; and j. Changing authenticators for group/role accounts when membership to those accounts changes.",
                  },
                  {
                    uuid: "a006e2b8-74aa-4b49-9cee-3ac0f91d88b6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "fd9feba9-b8c9-4fbc-bf7b-8e9fae8ea81c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "335830fb-660b-4e39-ad9d-d555b25522af",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.1",
                    description:
                      "EUA implements the following password policies. Any system inheriting this control (IA-05(01)) must review the user access to their individual IT system per the Password Risk Tree and determine whether there are users who can be assigned to a 365-day password age. The Password Risk Tree can be found in Appendix I of the EUA Business Owner Guide v2.10. The EUA Business Owner Guide can be found here:\n Internal Users: https://vpnbdcint.cms.local/EUADOCS ( https://urldefense.proofpoint.com/v2/url?u=https-3A__vpnbdcint.cms.local_EUADOCS&d=DwMFAg&c=A-GX6P9ovB1qTBp7iQve2Q&r=1SX8SslDpJIRlyK3Lk2y_amFxTZ7nLQ2bighiYlKoh0&m=5sNqgYV14sw6-ep4CPDLro2oenQfAINhtNWqxZmQZbA&s=iY8SSuVgn-XZQH7bJqJxdcd6wxsG7E_JIU2rN4NZHzk&e= ) \n External Users: https://vpnbdcext.cms.gov/EUADOCS ( https://urldefense.proofpoint.com/v2/url?u=https-3A__vpnbdcext.cms.gov_EUADOCS&d=DwMFAg&c=A-GX6P9ovB1qTBp7iQve2Q&r=1SX8SslDpJIRlyK3Lk2y_amFxTZ7nLQ2bighiYlKoh0&m=5sNqgYV14sw6-ep4CPDLro2oenQfAINhtNWqxZmQZbA&s=b-vIMchge6zfoqGtMTzirhRFaJn3deQ5jUtdUSfW8fM&e= ) \n  \n EUA password policies:\n 1  Prohibits the use of dictionary names or words;\n 2  Meets or exceeds enforcement of the following minimum password requirements:\n -Minimum Password Age = one (1) day;\n -Maximum Password Age = sixty (60) days or for a CMS employee ONLY - 365 days, in accordance with the Password Decision Matrix shown below;\n -Minimum Password Length = Minimum length of eight (8) characters for unprivileged users;\n -Password Complexity = minimum of three (3) character categories (upper case, lower case and numbers) changed and 50% of the character order;\n -Password History Size = twenty-four (24) passwords until repeatable;\n 3  Stores and transmits only encrypted representations of passwords; and\n 4  Allows the use of a temporary password for system logons with an immediate change to a permanent password.",
                  },
                  {
                    uuid: "733ab73d-f126-47b5-96b3-775d72f330ad",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7484d713-c7cb-4e62-86dd-2ff1abeffe3f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "a89137c1-a26d-4947-a57d-da00b02b85ba",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.3",
                    description:
                      "CMS requires and has implemented trusted third party registration for the issuance of RSA Tokens and PIV cards for CMS personnel.",
                  },
                  {
                    uuid: "b545a7cb-449c-4430-adb7-4e093a68017d",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d08af211-f10b-43cb-b607-313b341106ce",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "77b35316-70b2-4eb9-8421-803920b5e820",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.11",
                    description:
                      "The CMS issued RSA tokens satisfy minimum token requirements discussed in the Risk Management Handbook (RMH), Volume III, Standard 3.1, and CMS Authentication Standards.",
                  },
                  {
                    uuid: "08312c96-5453-48c5-9c96-1c91b4ab1214",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b910a6c5-57ad-49ea-8a4c-d93b8856ec20",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d50c45f7-222e-40c2-9022-efaa8040ef31",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-7",
                    description:
                      "The EUA system makes use of encryption to transmit and store authentication information. The cryptographic functions of message digest hashing and encryption are built in to the application code. These functions are used in the authentication process and cannot be invoked by non-privleged or privileged users outside of the authentication process. All BDC authentication methods for access across platforms meet these requirements. HSPD-12 and PIV card implementation within the Information System further strengthens those mechanisms.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 27,
  },
  {
    id: 69,
    title: "idm",
    description: "Identity Management",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "1c8d6f5e-9ccb-4343-9006-902e9b8cd1b5",
        metadata: {
          title: "idm",
          version: "unknown",
          published: "2022-04-13T01:23:14.903474+00:00",
          "last-modified": "2022-04-13T01:23:14.903482+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "09759c0d-8720-4243-8389-be74a1a25912",
            title: "Identity Management",
            description: "Identity Management",
            "control-implementations": [
              {
                uuid: "0b18e15f-f3db-4daf-a306-dccf912afe9d",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "4cb5534e-0a7b-4786-86f4-48b83f2c89b6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "19687f90-8eae-460f-83eb-68f7cb9709c9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9741297e-f061-438f-87c6-61c31b2ffccd",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2",
                    description:
                      "The IDM solution is responsible for account management related activities. CMS IDM solution use API to coordinate activities which utilizes Okta  and IDM HUB API services for authentication and authorization in order to manage user access privileges by controlling users, roles, accounts, and entitlements. IDM solution provides the functionalities for provisioning, identity and role administration, request and approval management, policy-based entitlement management, password expiration/warning, and audit and compliance.\n IDM ensures that inactive accounts are disabled per the guidelines provided in the Acceptable Risk Safeguards (ARS). IDM do not make provision for emergency or temporary accounts.\n The IDM solution identifies and selects individual and system/application accounts to support organizational missions/business functions. Conditions for role membership is defined by CMS and enforced by IDM.  IDM specifies authorized users and role membership, access authorizations, and other attributes for each account. Request to create system accounts requires approval by the IDM business owner. IDM complies with ARS when creating, enabling, modifying, disabling, and removing system accounts. IDM accounts are monitored, and account managers are notified when accounts are no longer required, users are terminated or transferred, and/or for individual need-to-know changes. IDM authorizes access based on a valid access authorization, intended system usage, and other reasons as required by CMS missions and business functions.\n CMS ARS AC-2(f) requires inactive accounts be removed in accordance with Acceptable Risk Safeguards (ARS) requirements and Risk Management Handbook (RMH) standards and procedures.  CMS IDM system meets the requirements by providing an inheritable control to downstream applications that will de-provision accounts according to the following criteria:\n -Accounts with no roles and more than one year of inactivity.  -Accounts with roles and more than two years of inactivity.  -Accounts for out-of-scope applications that includes  FFM, Agent and brokers, Assisters, have their own account review procedures and have more than three years of inactivity. Account removal is performed in coordination with the application team.\n Vertical applications teams should validate the continued use of the user's role in their application. \n Hybrid control - where application finds that user should no longer have a role, the application team is responsible for removing said role. IDM will only provides the tools needed by the application to identify the compliance status of the user and record their annual account review decision. IDM give applications a place to record their decision. IDM no longer takes responsibility for the application failure to exercise their due diligence.\n The IDM solution reviews accounts for compliance with account management requirements at least every 90 days and establishes a process for reissuing shared/group account credentials when individuals are removed from the group.\n PRIV.1 – The IDM Solution does not allow the use of guest, anonymous, and shared accounts for providing access to PII.\n PRIV.2 – The IDM solution ensures account managers are notified immediately when temporary accounts are no longer required, or when information system users are terminated, transferred, or information system usage for need-to-know/need-to-share changes.\n PRIV.3 – User roles with the need-to-know are allowed access for PII to perform user’s duties only after explicitly approved by the Business Owner (BO), or an authorized approver. The approval commensurate with users justifications.\n PRIV.4 – Access controls within the IDM solution is implemented based on users’ or user group’s need for access to PII in the performance of specified duties.\n PRIV.5 – The IDM solution provides access only to the minimum amount of PII necessary for users to perform their duties.\n PRIV.6 – IDM solution creates, enables, modifies, disables, and removes accounts in accordance with the requirement for each user to complete privacy training every 365 days, otherwise the account will be disabled.",
                  },
                  {
                    uuid: "6a9ce2ea-270d-4548-acc5-cb0ab012410a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "beeb6e9e-a4f5-43cf-a76b-b433e2b925e4",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "4fb24d16-69f9-4f11-8387-095fffa0a7bc",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.1",
                    description:
                      "IDM employs automated mechanism to notify account managers on relevant event(s) in relation to system accounts. The IDM ADO is tasked with implementing system level alerts when user accounts are terminated, transferred or roles are being changed using New Relic infrastructure monitoring components, and account manager/system admins will be notified accordingly.",
                  },
                  {
                    uuid: "c234885b-4b30-4cc9-b5f0-31039127d058",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "00ac4cce-c7a4-475b-86f1-aa9ee7ab0e9c",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "2c52e244-2dfc-45f3-8be0-99d36cffe8cf",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.2",
                    description:
                      "Emergency or OnDemand accounts are to be created and used to resolve high severity issues only. The use of the accounts will be closely monitored by the IDM business owner or his/her representative. These accounts will be terminated as soon as they are no longer needed. When no longer required, emergency accounts will be disabled and deleted within 24 hours.",
                  },
                  {
                    uuid: "3e2a6b0e-23a6-4347-bc69-58dd0f059e32",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "faabe98d-b9c2-4d00-a820-bd3cda08b34e",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "194cf463-df83-42ac-ba08-8be88e20ae54",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.3",
                    description:
                      "IDM system sets the user passwords to expire after 60 days. After the password is expired, the user's account is marked as inactive/suspended.",
                  },
                  {
                    uuid: "89a90d4a-e8b3-4e39-9abd-a238928d6533",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c3c037d8-833b-4319-95f0-700a09d123fe",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "c4857242-da38-496b-877d-6674483cb81d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-2.4",
                    description:
                      "The IDM ADO team will implement the audit alert via New Relic and notify responsible personnel of the actions against user accounts to the IDM system. IDM ensures the raw audit information collected is available in an unaltered format to the CCIC.",
                  },
                  {
                    uuid: "0a2336b7-63a8-4936-9a83-f0b28354c49a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "30a1539d-8a1b-4752-9c56-72e8468fe3fc",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3c13c997-efcc-4d9f-b199-0bb7c39d5cda",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-3",
                    description:
                      "Access to files and tables within IDM are restricted to users according to their approved roles. IDM employs FIPS 140-2 encryption mechanisms to protect sensitive data when stored. The IDM system is in the AWS environment and can only be accessed via a secured VPN communication tunnel. The VPN is configured per CMS approved standards and policies as defined in the CMS Technical Reference Architecture (TRA).",
                  },
                  {
                    uuid: "a7d2be3c-28bc-4e70-b5a6-3ad5ac880c19",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "cf6c4fd8-f94b-4882-933b-6530cb88f6bf",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "e519b097-91ca-4be7-ad35-41ffbfe9753a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-5",
                    description:
                      "IDM ensures that audit functions are not performed by IT personnel responsible for administering access control. IDM maintains a limited group of administrators whose access is based on the users’ roles and responsibilities. IDM’s testing and production functions are divided among separate individuals or groups. The critical mission functions and IDM’s support functions are divided among separate individuals. An independent entity conducts information security testing. An independent entity is one without vested interest or in relationship with IDM that could prevent the rendering of objective or unbiased reporting.",
                  },
                  {
                    uuid: "bf4ee2ba-1a2d-4777-88a6-64fb460d5583",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "69b314ce-002b-4eee-ba2d-3d0a9c354cfa",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d3ff6b7d-8edd-4a5f-849c-1f3aebd22587",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6",
                    description:
                      "Role based access control is used to restrict access to system functions only to designated individuals. System activities, including setting/changing system parameters, and modifying audit settings and behavior are logged and associated with the user making the change. Only authorized users are permitted access to files, directories, drives, workstations, servers, network shares, ports, protocols, and services that are expressly required for the performance of their job duties.\n IDM ensures system maintenance accounts are created solely on a role-based as needed basis. If a system maintainer needs to perform a task requiring elevated privileges, they will login to the IS with their individual login. They will then obtain the necessary sudo/root elevated privileges to obtain their tasks. The elevated privileges will be dismissed when no longer needed. All activities performed via elevated privileges is logged. Standard users have read-only rights to system level configurations.",
                  },
                  {
                    uuid: "150b520a-dc73-4c61-a49e-f7c6c25dde60",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7926fc0e-f1d8-4584-bc16-d4f3d59b1106",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "0efaa766-0559-4fa9-b6a3-1a05d89f187b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.1",
                    description:
                      "The IDM Security team, security administrators, system and network administrators, system security officers, system maintenance personnel, system programmers, and other privileged users will be given access to audit logs, boundary protection (firewall security rules), configuration logs and authentication to all related IDM systems as required to look at each system/instance individually. New Relic will have a security dashboard that will centrally display information specifically in this control to allow for a single-pane-of-glass view.\n\n IDM explicitly authorizes access, by the above personnel, to the following\ninformation for the development and maintenance of the IDM system:\n Setting/modifying audit logs and auditing behavior\n Setting/modifying boundary protection system rules\n Configuring/modifying access authorizations\n Setting/modifying authentication parameters\n Setting/modifying system configurations and parameters\n Setting/modifying system configurations and parameters on an as-needed basis.",
                  },
                  {
                    uuid: "332d573a-8ffc-44ca-a5b9-3e8cbaf567a0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "56fc5af4-3c51-4f2b-b372-c239f1e135eb",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "52ff232a-a14c-45d5-883d-e8b399edaa4d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.5",
                    description:
                      "The IDM IS employs role-based least privileged access control. Privileged accounts are controlled and restricted to personnel with the need to perform controlled functions against the system. All accesses and actions of privileged accounts are logged for review and audit purposes.",
                  },
                  {
                    uuid: "c083c3fb-ecc3-4733-a719-4d177c84aaf9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "80015e00-d547-41d5-849f-99202691b75e",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3b66049b-2572-4b98-adeb-ee2e798e24ce",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.9",
                    description:
                      "GDIT/CCS team is responsible for Amazon Web Services (AWS) Identity Access Management (IAM) Accounts and AWS VPN Accounts access is granted upon CMS approval with formal and detailed access request. Privilege function execution permission are granted on an as-needed basis and activities are tracked and audited at AWS level. Application teams are responsible for all application related accounts. The IDM IS employs role-based least privileged access control. Privileged accounts are controlled and restricted to personnel with the need to perform controlled functions against the system. All accesses and actions of privileged accounts are logged for review and audit purposes. Privileged functions execution is allowed only with administrators who are implicitly granted permission.",
                  },
                  {
                    uuid: "64454ce4-a40f-4752-a01b-f2fd44c6a75e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1a85f26c-37ae-4a59-8c18-6af263ebbe5b",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "a5e128aa-f51c-4a2e-b3e0-61508e55639a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-6.10",
                    description:
                      "Non-privileged users on AWS console will be forced to follow defined access policy that is setup and managed by GDIT/CCS team which prevents privileged functions from being executed by those unprivileged accounts. EC2 System users who are non-privileged will have very limited access to the system itself, and are unable to execute privileged functions that otherwise requires root/wheel level access.",
                  },
                  {
                    uuid: "7cca08f8-deaa-46f8-ba71-96e4fb12d5fd",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d70d1bf4-743a-49eb-b6aa-3ce2547ff9c0",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "02ae92b9-3339-4cc4-97ca-ec21cff188fa",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-7",
                    description:
                      "Unsuccessful login attempts are recorded and the number of failed attempts is displayed.  IDM enforces a limit of three (3) consecutive invalid login attempts by a user during a fifteen (15) minutes window. If this threshold is met, the user’s account is locked for 60 minutes unless the user exercise the self service option. Once an IDM AWS user account is locked, the user is required to contact the Identity Access Management (IAM) administrator to request an unlock.",
                  },
                  {
                    uuid: "896ae330-a292-49c7-85f1-f585af6ccd31",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "560aafa0-0605-4ae4-b3d4-576199d7a894",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "ab1b9d19-6382-43c9-9a24-3a8413b2fc4f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-8",
                    description:
                      'CCS is responsible for VPC Operating System. Application teams are responsible for all application related systems.  IDM displays the HHS approved Rues of Behavior (ROB) banner to everyone accessing the IDM system, via the graphic user interface (GUI) or command line interface (CLI), prior to the users’ authentication. The IDM system requires the users to acknowledge the consent to monitoring be selecting the "I Accept" button before proceeding with the login process. This warning banner provides privacy and security notices consistent with applicable federal laws, directives, and other federal guidance for accessing this Government system, which includes the IDM information system and its components. The HHS and CMS approved ROB is provided below:  This system is provided for Government authorized use only. Unauthorized or improper use of this system is prohibited and may result in disciplinary action and/or civil and criminal penalties. Personal use of social media and networking sites on this system is limited as to not interfere with official work duties and is subject to monitoring. By using this system, you understand and consent to the following: - The Government may monitor, record, and audit your system usage, including usage of personal devices and email systems for official duties or to conduct HHS business. Therefore, you have no reasonable expectation of privacy regarding any communication or data transiting or stored on this system. At any time, and for any lawful Government purpose, the government may monitor, intercept, and search and seize any communication or data transiting or stored on this system. Any communication or data in transit or stored on this system may be disclosed or used for any lawful Government purpose."',
                  },
                  {
                    uuid: "c374633b-4d56-4d94-a699-f0d374060b21",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c39f4ca2-0d36-4246-a7c6-ab78c6be492f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "1daef0e5-d5b3-443b-a2d1-a406c0fbe821",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-11",
                    description:
                      "Each user’s session is locked or timed out after 15 minutes of inactivity.  NOTE:  This will be configured for five (5) minutes per CTO guidance. Users can regain system access by going through the authentication process again.\n When a UserID is created by Portal (CMS IDM), they will be assigned to the\nIDM group which enforces the CMS Policy of a 5-minute session lifetime. If that user then logs into Harp and requests a role with HCQIS Access Roles and Profile System (HARP), the user is then added to the HARP Users group. By adding the user to the HARP user’s group, the HARP policies are enforced, which is above the CMS Policy, giving the user the session lifetime of 15 minutes. If this user then logs in to Salesforce, an IM supported application, they will have an Okta Session Lifetime of 15 minutes. Note that Harp does not conform to the 5-minute policy.",
                  },
                  {
                    uuid: "d3a76885-67c0-49ed-a585-d0a43b5af6de",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "dc5a3c89-e151-439e-9da0-7266d73d5d65",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "7a476b1a-6f34-4711-b39a-97ed600918ce",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-11.1",
                    description:
                      "Inactive Sessions (idle time of 15 minutes or longer) will trigger a session lock at the console access layer to IDM’s systems hosted on the AWS environment. During session lock, IDM conceals the information previously visible on the display with a publicly viewable image. Inactive web sessions used by the AWS Console will be logged out after 30 minutes of idle time. To continue, the user will be required to re-authenticate their login.",
                  },
                  {
                    uuid: "301ea015-1dc4-4aed-8aec-c21793073c6c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "597d859c-0da8-4770-84cd-86d0563d4b41",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "7324a96c-862d-40aa-8a11-806a794fa2f2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-12",
                    description:
                      "IDM will ensure that sessions are timed out and closed after five  minutes of inactivity.\n AWS IAM User Sessions will timeout and terminate in 1 hour (60 minutes) of\ninactivity or will terminate immediately upon user logout. EC2 system console or command line interface (CLI) will timeout in 10 minutes due to user inactivity or will terminate upon user requested logout or close of the CLI terminal window/UI. Application specific sessions are timed out and closed after five to fifteen minutes of inactivity; this varies from application to application. When a UserID is created by Portal (CMS IDM), they will be assigned to the IDM group which enforces the CMS Policy of a 5-minute session lifetime. If that user then logs into Harp and requests a role with HCQIS Access Roles and Profile System (HARP), the user is then added to the HARP Users group. By adding the user to the HARP user’s group, the HARP policies are enforced, which is above the CMS Policy, giving the user the session lifetime of 15 minutes. If this user then logs in to Salesforce, an IM supported application, they will have an Okta Session Lifetime of 15 minutes. Note that Harp does not conform to the 5-minute policy.",
                  },
                  {
                    uuid: "19811e6e-c699-4f53-9361-8bdea4ce33d1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9864c95f-9df0-42cf-8883-1f9502d80cb9",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "a8a8dbc0-7884-45ce-af74-7c54668f4e9f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-14",
                    description:
                      "The IDM IS requires successful user authentication prior to performing any action. There are no user actions to the IDM system that could occur without authentication and authorization.",
                  },
                  {
                    uuid: "fcaa4a3a-fdfe-49e6-8341-37387c3df2c3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d472683f-3762-472d-ab15-a06b2b4e88fb",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "509539aa-c1b6-491c-bc71-40649680519d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-19",
                    description: "",
                  },
                  {
                    uuid: "4304769a-a9e7-4fbf-bccf-b2fe21c9d6ea",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "2f36cc03-382e-48f3-9846-1c1e50967698",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "825b71c6-4931-48fb-ac8b-fefe324c0a34",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-20.2",
                    description: "",
                  },
                  {
                    uuid: "629429ac-2444-457a-8bea-84b50ef316a8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1ce9aa26-d46b-452b-920c-e96a933f298f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "a4b1d6b0-7fba-41aa-9f8f-58599011281d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-21",
                    description:
                      "IDM System shares authorization information with Okta and Experian (provides Remote Identity Proofing (RIDP) Service to ensure the true identity of the user matches whom he/she claims to be. These IDM services allow users to be identity proofed remotely in order to process and grant LOA Level 2 and LOA Level 3 role requests. It integrates with Experian APIs to deliver this functionality.",
                  },
                  {
                    uuid: "fc0d79b6-c725-4d58-810d-c69758805008",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ec4fa8fb-5da0-4e40-8d51-b5e23c27a5c4",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "161ecf8d-89d0-4f31-8f5f-705f4740a49a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2",
                    description:
                      "CCS is responsible for authentication of VPC to OS components. Application Teams are responsible for authentication of application components.\n Cloud Navigator/ITOPs is responsible for authentication of VPC to OS components. Application Teams are responsible for authentication of application components using API keys. \n IDM uniquely identifies and authenticates organizational users via the Remote Identity Proofing (RIDP) functionality provided by Experian. The RIDP is detailed in the IDM system requirements and the IDM System Detailed Design (SDD).  \n Employees of IDM team and Contractors of IDM team are uniquely identified visually on their facility access badges, systematically identified in username format. Both employee and contractor users require authentication to use helpdesk support functions. All IDM system access requires username/password authentication at minimum and some systems require multi-factor authentication for added security from one of the authorized providers.",
                  },
                  {
                    uuid: "b82aab22-c9df-4243-b50b-d23382ce011a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "719d7285-ece5-437d-a118-f3aa98886c0f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "75794c19-727e-47ba-a0d3-92708dabac25",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-2.11",
                    description:
                      "CCS is responsible for authentication of VPC to OS components. Application Teams are responsible for authentication of application components.\n All remote access to IDM components or systems requires the use of secure access VPN which requires username plus complex password and MFA timebased token code generated by either physical MFA authenticator fab or software-based authenticator, such as google authenticator or okta verify. MFA token used in remote access has the minimum length of 6 numerical characters.",
                  },
                  {
                    uuid: "5f239b07-dcd6-47af-8788-d87df507040c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "da127289-5659-4865-909e-be3419449d19",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a450414d-cbd0-4059-b586-f61ef2f4addd",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-4",
                    description:
                      "CCS is responsible for authentication of VPC to OS components. Application Teams are responsible for authentication of application components.\n IDM console users are deactivated after 60 days of inactivity or disabled as\nsoon as password is expired, which is also 60 days. IDM system access users are deactivated after 60 days of inactivity or disabled as soon as password is expired, which is also 60 days. Users who wish to retain access to systems and network must change their password before they expire, which occurs every 60 days since the last password set or changed. Field equipment used by employee or contractor users requires password change every 60 days as well and, in addition to suspension of user account and associated roles/permissions should the user be inactive in 60 days or more.",
                  },
                  {
                    uuid: "47ea738f-b9b1-44a9-a9d6-eac40d0838da",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "1510c5d3-b90f-44b4-8725-a9fc21b8272f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ef25e848-5dc0-4867-8cba-68ad7951eb54",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5",
                    description:
                      "CCS is responsible for authentication of VPC to OS components. Application Teams are responsible for authentication of application components.\n  \n Inherited control from CMS. Authenticator such as physical MFA tokens or PIV Smart Access Card are managed by CMS office of security and personnel management.",
                  },
                  {
                    uuid: "252f163f-2a8c-4b11-b1f8-6fb2babbee46",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8c69b96e-26c0-494d-b4db-511040cd29f8",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "d03f4627-c43a-4f38-94b9-a276f793dfeb",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-5.1",
                    description:
                      "CCS is responsible for authentication of VPC to OS components. Application Teams are responsible for authentication of application components.\nThe IDM applications use Okta for account and password management of IDM users. The following password policy is enforced by Okta: \n\n Minimum password complexity of case sensitive,\n Minimum of twelve (12) characters, and\n At least one (1) each of upper-case letters, lower -case letters, numbers, and special characters.\n At least one (1) changed character when new passwords are created.\n Passwords are encrypted while in storage and in transmission.\n Password minimum and maximum lifetime restrictions of one (1) day minimum, sixty (60) days maximum; and prohibits password reuse for twenty-four (24) generations. IDM AWS IAM account requires the password to have minimum length of 12 characters with combination of Upper, Lower case letters, numerical and special characters. Password for each set or reset is valid for up to 60 days and users cannot set the same password that was used in their last 6 password changes.",
                  },
                  {
                    uuid: "89ebe594-3c1f-4e07-9964-6ba2d1f8f2e6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "770c14c3-a7b4-4141-bf84-4b9e26920a48",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3ae1375b-93e0-4374-bb21-c2dc8ddf37f3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-8",
                    description: "",
                  },
                  {
                    uuid: "7c6f19be-0921-429a-8223-99e6deb755eb",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ab9ba32f-8faa-49d2-95bc-a6a7ae73b907",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "2b69b3da-a8d0-4fa9-97e0-77446d93fe51",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-8.1",
                    description: "",
                  },
                  {
                    uuid: "5e0e95d3-3be3-40bb-a508-29d9bfbed5cf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b0970e90-2900-4598-8cf7-595e7fc5f218",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "c0ef22c7-da26-4e37-b73e-feb3355b69e9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-8.2",
                    description: "",
                  },
                  {
                    uuid: "f6b8b179-afe5-416d-b236-fd71f6ba7147",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "579a1b65-e6c9-4b60-b896-45efabf1dfc1",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "7feb907c-e9c7-4bed-80f8-aeea7cc1fae6",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-8.3",
                    description: "",
                  },
                  {
                    uuid: "e7e476f6-c486-488a-bb8c-bbd22bc0b007",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c1878b38-d97b-4a77-930a-8691ee8ea453",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3c0533a6-a781-46a3-a8d7-4a0e701ffdc8",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-8.4",
                    description: "",
                  },
                  {
                    uuid: "f12d7ea2-b704-4119-ae56-2bb939e6fee3",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3f268361-cbad-4ab8-a869-be748f6148de",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "9363dc70-7d4d-4f57-9c33-3713dd8af135",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pl-4",
                    description: "",
                  },
                  {
                    uuid: "aa32ddf3-7f29-404e-8702-f0175115d19f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5a1d2bae-89cc-4258-9b2a-55452ceaa8c0",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "d0dc0da7-08f8-4076-9e0b-898903c29fd0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-8.1",
                    description: "",
                  },
                  {
                    uuid: "2692a59f-2c64-40c9-ac8c-7752af3135d6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f803bd95-7332-45ca-8df9-5326d0ae0224",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "b69df11b-6d0d-453a-8b86-bc34d05ab811",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-18",
                    description:
                      "When Multi-Factor Authentication is requested using Okta Verify with Push, the Okta IDaaS application identifies a mobile device that has been pre-registered as owned by the user requesting authentication.  Okta then sends a notification packet using the real-time notification system provided by the mobile device OS platform (Apple iOS or Google Android).  Due to notification packet size limitations, this packet contains a customer URL back to the Okta API with a session token.  When the notification arrives on the mobile device, the user is automatically redirected to the custom Okta URL, which displays the approval or rejection UI.  The response is sent back over the phone’s data connection.",
                  },
                  {
                    uuid: "b4bdcf23-304e-4223-bd32-3ef9d3112f5f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5ea85722-113b-4785-8ded-7958ca940826",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "3987f1aa-5c53-4580-9ced-52ae1334d31c",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-12",
                    description: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 35,
  },
  {
    id: 70,
    title: "Jira",
    description: "JIRA",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "3045ab36-e46c-4d9e-a797-16162c99f851",
        metadata: {
          title: "JIRA",
          version: "unknown",
          published: "2021-09-04T02:25:32.890503+00:00",
          "last-modified": "2021-09-04T02:25:32.890507+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "165b6a2c-748b-4595-986e-b972e867af6d",
            title: "JIRA",
            description: "JIRA",
            "control-implementations": [
              {
                uuid: "905e29b2-a085-458f-a32c-0e2173f83f62",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "5f58a0e4-5875-42ca-a629-a888cc19068c",
                    "control-id": "ac-2.1",
                    description:
                      "Any accounts that are managed directly in CMS Cloud IAM are managed by JIRA tickets\nand approved by CMS.",
                  },
                  {
                    uuid: "cb58633d-648c-4259-b724-f83a77c6f16a",
                    "control-id": "au-6.1",
                    description:
                      "JIRA integrates audit review, analysis, and reporting to support organizational processes for investigation and response to suspicious activity.\nThe Development team performs weekly database log reviews that are logged with JIRA tickets.",
                  },
                  {
                    uuid: "56585160-9b26-471b-a8c5-4220c9339a4f",
                    "control-id": "cm-2.1",
                    statements: [
                      {
                        uuid: "c093035d-14c5-43e3-af11-7d47b9f8b43e",
                        description:
                          "All security patches and changes are tracked in JIRA and approved by CMS before\nimplementation.",
                        "statement-id": "cm-2.1_smt.b",
                      },
                      {
                        uuid: "36e15990-464c-4c25-8c7c-93c1748364e4",
                        description:
                          "Baseline configuration changes are tracked in JIRA and approved by CMS.",
                        "statement-id": "cm-2.1_smt.d",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "d60550c6-280d-4d55-b981-b850c790060b",
                    "control-id": "cm-3",
                    description:
                      "Change review tickets or CRs are tracked in the Enterprise JIRA/Confluence system and adhere to CMS’ data retention schedule.\nChanges to the configuration are reviewed and approved by the DCS Business Owner in the Endevor utility.",
                  },
                  {
                    uuid: "4b7a9661-5a83-423b-9b17-7b245ccd39ed",
                    "control-id": "cm-3.1",
                    description:
                      "The JIRA ticketing system is employed to document all proposed changes. All notifications are performed through JIRA. No changes are permitted until approval in JIRA is captured. All changes are captured in JIRA.  JIRA provides automatic notification upon completion of the ticket to the Team Member, Technical Lead and Change Control Board depending on the risk level of the change.",
                  },
                  {
                    uuid: "ab16c28f-7379-4780-b568-313fe525b2bd",
                    "control-id": "cm-5",
                    description:
                      "For access to systems which are not authenticated though EUA, a JIRA ticket must be used to request access, and the COR and system owner must approve.",
                  },
                  {
                    uuid: "5a8683be-6be7-4557-9dca-a84c73246de3",
                    "control-id": "cm-7.1",
                    description:
                      "Ports and services eliminated are documented in JIRA.",
                  },
                  {
                    uuid: "4d0b1274-5633-49e8-96aa-bd46200b1153",
                    "control-id": "cm-8.1",
                    description:
                      "Inventories are maintained in the JIRA issue tracking system.",
                  },
                  {
                    uuid: "e5494c99-65a3-4e05-ba6c-d17ac18148d0",
                    "control-id": "cm-8.5",
                    description:
                      "Inventories are maintained in the JIRA tracking system and reviewed by the\nresponsible Desktop Support or Systems team.",
                  },
                  {
                    uuid: "7da32622-3ba0-4db2-97a0-7295b959778d",
                    "control-id": "cm-9",
                    description:
                      "Using JIRA as the issue tracking tool, all configuration items are managed\nthroughout the system development life cycle.",
                  },
                  {
                    uuid: "52fec580-9c65-44fd-a3cd-367770f99bf0",
                    "control-id": "ir-4.6",
                    description:
                      "The results of the tests are documented via the JIRA ticketing system and after\nAction reports.",
                  },
                  {
                    uuid: "7cffb71c-bf07-4468-970b-db7e3e9dbe27",
                    "control-id": "ir-6.1",
                    description:
                      "The CMS Cloud Support Team hosted JIRA system provides automated resporting of\nsecurity incidents.",
                  },
                  {
                    uuid: "91b28af0-0cb1-4719-b1b6-e5879e5ea473",
                    "control-id": "ir-7.1",
                    description:
                      "The application utilizes JIRA Tickets as a means to increase the availability of\nincident response-related information and support.",
                  },
                  {
                    uuid: "5a667c55-978d-4d95-ae19-6452ec889652",
                    "control-id": "ra-5.1",
                    description:
                      "Fully inherited from AWS.\nResults from scanning and pen testing activities are tracked in JIRA.",
                  },
                  {
                    uuid: "f9a0a1a0-4296-4ce5-abb3-b1d853737745",
                    "control-id": "sa-10",
                    description:
                      "Any security flaws identified are tracked through the JIRA tracking system for\nfollow up and resolution.",
                  },
                  {
                    uuid: "25821ef6-5a11-4982-8864-36b38ac3dddc",
                    "control-id": "sa-11",
                    description:
                      "Any flaws identified are tracked through the JIRA tracking system for follow up and\nresolution.",
                  },
                  {
                    uuid: "1a243963-8e6a-4eb0-bb48-ffca132aa10b",
                    "control-id": "sa-15",
                    description:
                      "The JIRA and Confluence management tools assist in SDLC process tracking.",
                  },
                  {
                    uuid: "5b5a5558-5904-4f77-a5fa-b0248c04d075",
                    "control-id": "sc-7.4",
                    statements: [
                      {
                        uuid: "31335772-23bf-48bc-8afe-b59de84ac179",
                        description:
                          "Temporary exceptions to traffic flow requires a JIRA ticket which describes the\nreason for the exception and requires approval of the Business Owner.",
                        "statement-id": "sc-7.4_smt.d",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "e8fa979f-bb4d-495e-a375-17c300f891a0",
                    "control-id": "si-2.1",
                    description:
                      "The Flaw Remediation process is centrally managed through JIRA. JIRA tickets are created for all identified vulnerabilities and assigned to member of the security development team (Security).",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 19,
  },
  {
    id: 71,
    title: "ldap",
    description: "LDAP",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "fc1b607f-bfa3-4120-90f4-3c444573a1bf",
        metadata: {
          title: "Lightweight Directory Access Protocol (LDAP)",
          version: "unknown",
          published: "2021-09-04T02:25:33.441170+00:00",
          "last-modified": "2021-09-04T02:25:33.441174+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "4401410c-1ce0-4f36-963c-16496cfc0afa",
            title: "LDAP",
            description: "LDAP",
            "control-implementations": [
              {
                uuid: "835f6c8a-1528-4355-89c7-7ceddbacf3e0",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "72e7c589-ff6a-4a32-ac24-d0b7d129d223",
                    "control-id": "ac-2.2",
                    description:
                      "The information system automatically terminates emergency accounts within twenty-four (24) hours and temporary accounts with a fixed duration not to exceed three hundred sixty-five (365) days.\nThe CMS Enterprise LDAP is being used for authentication.",
                  },
                  {
                    uuid: "4732d664-b835-450c-8c6e-9c888035b44e",
                    "control-id": "ac-2.3",
                    description:
                      "All LDAP integrated accounts, managed through EUA, including all applications other than IAM are disabled after 60 days of inactivity.",
                  },
                  {
                    uuid: "d5ce62e6-163f-4304-805b-963655538679",
                    "control-id": "ac-3",
                    description:
                      "The application currently utilizes CMS security access methods utilizing CMS Enterprise LDAP for the enforcement of approved authorizations for logical access to the system. This is in accordance with the CMS Policy for Information Security Program (PISP) applications other than IAM are disabled after 60 days of inactivity.",
                  },
                  {
                    uuid: "46eaf57f-6d85-41d6-9d69-dbb8cc8e8f2e",
                    "control-id": "ia-2.2",
                    description:
                      "For the application, multifactor authentication is provided and managed by CMS EUA, require access to CMS VPN with MFA, and Role-Based Access Control (RBAC) solutions via LDAP.",
                  },
                  {
                    uuid: "21e6ee63-aa3f-40a3-af03-2abf9bd690f0",
                    "control-id": "ac-7",
                    description:
                      "In addition to the system application authentication, users are required to authenticate using EUA LDAP with MFA for authentication/authorization and enforces user lockout after consecutive failed logon attempts.",
                  },
                  {
                    uuid: "a9dff7cd-cb36-41db-a3c1-56e47a575beb",
                    "control-id": "ia-4",
                    description:
                      "- All users are authenticated and authorized utilizing CMS' Enterprise\n  Lightweight Directory Access Protocol (LDAP).\n- Any user logging into the system must be listed in the CMS Enterprise\n  LDAP directory.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 6,
  },
  {
    id: 72,
    title: "ociso",
    description: "OCISO Inheritable Controls",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "a709d5d9-c465-4666-a8ba-af51dd78b56b",
        metadata: {
          title: "ociso",
          version: "unknown",
          published: "2022-04-13T01:07:05.727575+00:00",
          "last-modified": "2022-04-13T01:07:05.727583+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "1c851b1e-d6cf-4c6f-802d-81322d183e66",
            title: "OCISO Inheritable Controls",
            description: "OCISO Inheritable Controls",
            "control-implementations": [
              {
                uuid: "594249f3-7153-433c-a778-0a2dc9e8b40e",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "3b484923-8114-4238-846c-ef271dd03328",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d721cb1f-2c5c-4b53-a9e8-810173a35e53",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fe69f4c6-1025-43b8-9c88-b1d92fca3d12",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Access Control Procedures available for this application.\n  \n  \n Inheritance Statement:\n In accordance with HHS policy, CMS reviews and updates Enterprise security and privacy policies and procedures at least every 3 years, or as necessary. CMS Access Control policy and procedures are listed below along with the corresponding URL:\n  \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.1: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n  \n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 36)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n  3.   CMS Technical Reference Architecture (TRA) Release I Volume II Network Services p125. Access Control and Identify Management  Chapter \n  \n https://share.cms.gov/office/ois/CTO/SitePages/TRA.aspx  (Access restricted)",
                  },
                  {
                    uuid: "f9656be9-c627-48d5-9afa-e7c1f3579ff9",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "846d1ea0-4c43-4017-8887-1cc2debc7b7f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "0cc29dcf-7ca0-41e4-a724-4cc4d9e7ccb8",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-11",
                    description:
                      "This is a Hybrid Control. The inheritor must append the inheritance Statement with all system-specific requirements and information identified within the CISO Memorandum dated March 29, 2021\n Inheritance Statement: \n This is a Program Implementation supporting the systems unable to implement the session lock control requirement of 15 mins. In accordance to the Memorandum the system will not set the parameters beyond 30 mins. \n System Specific\n 1. Systems will implement the Session Lock control to support a maximum of 30 mins of inactivity before the user is required to reauthentication to the session\n 2. Systems will utilize the CISO Risk Acceptance Memo as evidence to support closure or any existing POAMs associated with the AC-11 Session Lock Control\n The inheritor may use the following memorandum as the approving source. \n https://share.cms.gov/Office/OIT/ISPG/Security%20%20Privacy%20NonInternet%20Notifications%20Librar/CISO%20Memorandums/OCISO%20Risk%20Acceptancev2.pdf",
                  },
                  {
                    uuid: "3f76c676-81bb-41b2-be00-9646896ed9f0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "e17d8f70-eeba-44c0-bc59-67ce86cbf093",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "5be2fcd2-a790-4bef-ae8b-37300043d3a1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-20",
                    description:
                      "This is a fully inheritable Enterprise control. The inheritor must append the Inheritance Statement to their implementation details.\n Inheritance Statement: Per the HHS IS2P and the CMS IS2P2 the use of external information systems is prohibited without explicit written approval from the CIO. CMS does not allow the use of external information systems that are not approved, and do not meet CMS security requirements. \n The approved systems subject to the guidance below: \n 1. CMS Technical Reference Architecture (TRA) Release I Volume II Network Services   https://share.cms.gov/office/ois/CTO/SitePages/TRA.aspx  (Access restricted)\n 2. HHS IS2P – Contact FISMA@HHS.gov \n 3. Rules of Behavior for Use of HHS Information Resources (Internal Document) \n 4. Master Labor Agreement (Internal Document)\n 5. CMS Information Systems Security and Privacy Policy (IS2P2)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf",
                  },
                  {
                    uuid: "6ef6b4f6-0a2b-4f48-a88f-ef1644933187",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "254aa3cb-6277-40e2-905b-483ec7fd62c4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "fd209a81-7c9e-49da-abd6-39297bacb8e5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-20.1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Access Control procedures available for this application.\n  \n Inheritance Statement: CMS does not allow the use of external information systems that are not approved and do not meet CMS security requirements for accessing CMS systems. External information systems can only access CMS systems using approved VPN access and firewall/security verification software which must be installed on each machine. This applies to federal employees and contractor personnel utilizing CMS GFE (laptop or desktop) only. CMS Access Control policy and procedures are listed below along with the corresponding URLs:\n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.1.6\n  \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-\n Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available) \n  \n 2.             CMS Interconnection Security Agreement (ISA) Template\n  \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/CMS1223298.html?DLPage=1&DLEntries=10&DLFilter=isa&DLSort=0&DLSortDir=ascending",
                  },
                  {
                    uuid: "3d3cdae3-e45a-42dc-b55a-735ac57ceb78",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ccb72764-9e13-4034-b7b5-caa3eb8aef56",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "cafbb01d-f00c-4f1a-a223-6574bcf955fa",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ac-20.2",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Access Control procedures available for this application. \n Inheritance Statement: CMS has configured CMS portable and mobile devices to meet federal requirements. CMS has provided several control implementations that support and manage how its information is used within portable storage devices. This includes a policy to incorporate a methodology for protecting the information, and the rules used to managing the information while in transit. CMS has identified several documents, which manages the use and transmission of information to include portable media. These documents include:\n 1. Rules of Behavior for Use of HHS Information Resources\n https://www.hhs.gov/ocio/policy/hhs-rob.html\n 2. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.1\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 3. HHS Standard for Encryption of Computing Devices and Information\n https://intranet.hhs.gov/it/cybersecurity/policies/index.html",
                  },
                  {
                    uuid: "942d7b08-470d-4eec-a880-f19ad30af432",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c13d2246-6f33-4fb1-a0d1-73c380320366",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "91636418-4abf-4f26-869b-f57c14068df3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ap-cms-01",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Authority and Purpose Control Family procedures available for this application. Inheritance Statement: \n A., B. Common - In accordance with HHS policy, CMS reviews and updates agency privacy policies and procedures at least every 2 years, or as necessary. CMS Authority and Purpose policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.1: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n  \n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: (Page 389)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n  \n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: \n https://www.cms.gov/files/document/rmh-chapter-19-privacyv10.pdf  (Publicly available)",
                  },
                  {
                    uuid: "9c7daf92-a4f7-4bf8-bc08-42de6bb2e16b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "9827130f-e8c5-43ec-8c1a-df95d73431be",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "adf68a0e-5daa-46f7-82b2-76d79e670b2f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ar-1",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Accountability Audit and Risk Control Family procedures available for this application.\n Inheritance Statement:\n A., B., C., D., E., F. Common - In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.2: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: (Page 391)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: \n https://www.cms.gov/files/document/rmh-chapter-19-privacyv10.pdf  (Publicly available)",
                  },
                  {
                    uuid: "fa8f735d-f497-45e0-8f56-3455436d5f7c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ada722bb-f323-47e7-8293-bd4dceed4ec6",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "18fc02a8-137c-483b-97f4-cc417bc979df",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ar-2",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Accountability, Audit and Risk Management procedures available for this application.\n  Inheritance Statement: \n Common - The department (HHS) has issued a guideline called “The Privacy Threshold Analysis (PTA) and Privacy Impact Assessment (PIA) Writers’ Handbook” 2015. In addition, CFACTS has a PIA module available for ISSO's use in creating their PIA form. The module provides help text generated from the writers' handbook.  \n System Specific - CMS system Business Owners must complete their PIA per OMB M-03-22 and HHS. The privacy risk assessment is covered within question #9 of the HHS PTA/PIA form. \n Common - In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS Privacy Impact and Risk Assessment policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.2: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n  \n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: (Page 392)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n  \n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: \n https://www.cms.gov/files/document/rmh-chapter-19-privacyv10.pdf  (Publicly available)",
                  },
                  {
                    uuid: "5dff5c37-487b-47be-a3a1-b0acd5b36aed",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8be11169-57cb-4748-8982-2a3f68d84d15",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "82e587c6-9ab9-4e1b-85da-17a0f0f9ff93",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ar-3",
                    description:
                      "This is a hybrid control. The following list provides a breakdown of responsibility for the program and the system: \n A. Hybrid – Access requirements for contractors and services providers are based on CMS policy, but are implemented at the discretion of the business owner, system operational environment. Privacy roles and responsibilities are outlined within the CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 3 which is located on the CMS Information Security Library at:: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html\n B. System Specific - CMS provides privacy contract clauses in the CMS Information Security Contract Clause Provision document which is located on the CMS Information Security and Privacy Library at: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/CMS-Information-Security-Contract-Clause-Provision.html?DLPage=1&DLEntries=10&DLFilter=Provis&DLSort=0&DLSortDir=ascending\n Working with OAGM, each Business Owner is responsible for ensuring that the appropriate contract language is included in the each contract and statement of work.\n C. System Specific - In accordance with HIPAA and CMS policy, the business owner must ensure its contracts or other arrangements with subcontractors meet the requirements of 45 §C.F.R. §164.504(e). CMS Governance and Privacy Program policy and procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.2: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: (Page 393)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip   (Publicly available)\n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: \n https://www.cms.gov/files/document/rmh-chapter-19-privacyv10.pdf   (Publicly available)",
                  },
                  {
                    uuid: "1d0bd574-2f77-4fc3-b10b-5a749881cf4f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "be0f5f2b-36b6-4ab8-8971-7a5bdf9ac58c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "7e75c513-bd19-4f82-8d86-83796c6ca51e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ar-4",
                    description:
                      "This is a Hybrid control with the following breakdown of responsibility:\n A. System Specific - Privacy controls are monitored per FISMA system annually\nvia the Security Controls Assessment (SCA).\n B. Common - The ISPG Information Security and Privacy Policy Working Group\nmonitors for changes to privacy law, regulations, and HHS policy and ensure the privacy controls are implemented appropriately by updating the CMS policy, standards, and procedures as needed. The activites of the working group are documented in meeting minutes and are available on the ISPG sharepoint site at: https://share.cms.gov/office/oei/ISPG/DSPPG/ISPG%20DSPPG%20Policy%20Library/Forms/Meeting%20Minutes.aspx\n C. System Specific - Mitigating actions to address deficiencies in the privacy\ncontrols are addressed and documented in the Plan of Actions and Milestones (POA&M) for each FISMA system.\n 1.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\nor as amended: (Page 394)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip \n(Publicly available)",
                  },
                  {
                    uuid: "bd99a7a9-4350-4e98-be5d-81d770a44610",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ef110051-f154-4b24-b3df-ee43bee0b9cd",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5757c933-dcea-4cba-aa9b-ff0693499e56",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ar-5",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Accountability Audit and Risk Control Family procedures available for this application.\n Inheritance Statement:\n A. Common - CMS provides privacy training as part of the Annual Security and Privacy Awareness training program. See also the AT (Awareness and Training) control family for additional details. In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.2: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: (Page 396)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip   (Publicly available)\n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: \n https://www.cms.gov/files/document/rmh-chapter-19-privacyv10.pdf   (Publicly available)\n 4. CMS Training Catalog:\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/ISPG-Training-Catalog.html?DLPage=1&DLEntries=10&DLFilter=trainin&DLSort=0&DLSortDir=ascending\n B. System Specific - The business owner/system administers basic privacy training no less often than once every three hundred sixty-five (365) days, and targeted, role-based privacy training for personnel having responsibility for PII or for activities that involve PII no less often than once every three hundred sixty-five (365) days.\n C. System Specific - The business owner/system ensures that personnel certify (manually or electronically) acceptance of responsibilities for privacy requirements no less often than once every three hundred sixty-five (365) days.",
                  },
                  {
                    uuid: "ea3d2a46-8be2-42f3-9b66-6fef4d32c171",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0a97e761-d5f6-4b26-bd1f-f2b1bfdeee7f",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "41fdf999-ce57-49ba-9fd4-1dacdc4ce97d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ar-6",
                    description:
                      "Common Control:\n This is a Common Control. The inheritor must append the Inheritance Statement for the Accountability Audit and Risk Control Family.\n Inheritance Statement:\n CMS submits required Privacy reporting information for all CMS Systems in support of HHS, Congress, OMB and other reporting requirements in accordance with:\n HHS Policy and Planning for Preparing for and Responding to a Breach of Personally Identifiable Information (PII) Section 2.9  (Internal Document)\n CMS Information Systems Security and Privacy Policy (IS2P2) Section AR 1.5.3\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly Available)\n RMH Chapter 19 Privacy Procedures Section 6.2.6 \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/RMH-Chapter-19-Privacy  (Publicly Available)",
                  },
                  {
                    uuid: "f6af1da5-ab7a-4533-bc75-53ae4eae9c6b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7a4d72a7-f1be-4e13-8066-bc0a46e1af85",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "660787dc-b262-42c8-9669-50351aaddbb1",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ar-cms-01",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Accountability Audit and Risk Control Family procedures available for this application. Inheritance Statement: \n A., B. Common – In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.2: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n  \n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: (Page 389)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n \n  \n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: \n https://www.cms.gov/files/document/rmh-chapter-19-privacyv10.pdf  (Publicly available)",
                  },
                  {
                    uuid: "c4b38dd7-5f6c-4ba8-8d67-fe0d9efa9939",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "59956a59-084a-4ad3-8ae5-6ce502d19a94",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "85060611-87fb-4753-87a4-b58318135e29",
                        value: "Yes",
                      },
                    ],
                    "control-id": "at-1",
                    description:
                      "This is an enterprise level control and is fully inheritable. The inheritor must append the Inheritance Statement and follow all guidance as written below.\n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. \n CMS Policy and Procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.2\n  https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 2. CMS Information Security CBT Instructions \n https://www.cms.gov/cbt  (Public URL, but EUA account is required to access) \n 3. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1  (Page 92)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip   (Publicly available)\n 4. RMH Chapter 2 Awareness and Training\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/RMH-Chapter-2-Awareness-and-Training.pdf   (Publicly Available)",
                  },
                  {
                    uuid: "a7902932-9e7c-488f-a538-12d26939f714",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c7d1f187-4337-443e-9123-2cf609578fd9",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "bbbdd356-8764-4518-bd8e-fae9abe7d84e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "at-2",
                    description:
                      "Inheritance Statement: ISPG provides a presentation on security awareness at the New Employee Orientation (NEO). The initial training and any subsequent annual training can be found at the Information Security and Awareness Training Portal (Computer Based Training [CBT]) found at https://www.cms.gov/cbt/login/ (EUA account required). Annual training occurs every 365 days through the CBT. The inheritor system is responsible for training the users of the system. \n In order to inherit this control, individual systems must:\n - Be organizationally bound to follow the controlling CMS content listed above. For contractor organizations, the controlling CMS content listed above must: 1) be formally adopted (in writing) into the practices of the organizational segment performing work on behalf of CMS, by an official with authority to do so, or 2) the content and intent of the controlling CMS content listed above must be formally (in writing) incorporated into (contractor) governing organizational practices.\n - Utilize the CMS Computer Based Training (CBT) system to perform and maintain user security awareness training. found at https://www.cms.gov/cbt/login/ (EUA account required).\n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.2\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 92)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip   (Publicly available)",
                  },
                  {
                    uuid: "1b0840ec-9bdb-4063-b1fb-832d11bea1c1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d30661fc-7226-4a6b-8876-3abfdef69287",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "15514f24-939f-4bd0-bf0f-c495c4b24436",
                        value: "Yes",
                      },
                    ],
                    "control-id": "at-2.2",
                    description:
                      "Inheritance Statement: The system inheriting this control must include materials within the Annual Security and Awareness Training program that educates CMS staff and contractors on how to recognize and report potential indicators of insider threat. \n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Sections 4.1.5, and Sections 4.2.2\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 2. CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip   (Publicly available)\n 3. HHS Counterintelligence and Insider Threat Policy, dated June 5, 2015 (internal document)",
                  },
                  {
                    uuid: "c6626cca-18a9-4197-b0b5-e3dda521b59b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0936d304-cb28-4d8b-bdc4-c3c20782ce7c",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ec832b2c-bd36-4a4d-87de-6731c9398901",
                        value: "Yes",
                      },
                    ],
                    "control-id": "at-3",
                    description:
                      "This is a hybrid control.\n Common: The inheriting system with users with a CMS ID, including both CMS employees and contractors, must append the inheritance statement with all procedures tracking security awareness and role based training, including training taken outside of the CMS CBT.\n CMS maintains information systems security and privacy training records only for individuals who have a CMS EUA user ID and have been designated by his\\her management as having significant security responsibilities (SSR). Information Security and Awareness training (Computer Based Training [CBT]) can be found at https://www.cms.gov/cbt/login. Training information can be entered in the Manage Your Training link. The CBT website can record CMS and non-CMS training.\n System Specific: If a user needs additional training or has taken training outside of what is provided by the ISPG, it is the responsibility of the user and the system to keep track of that training. If a user does not take training in the allotted time period, his/her user ID is revoked. Contractors without access to CMS training must provide equivalent training and training documentation. The records are retained by ISPG for five years. \n In order to inherit this control, individual systems must:\n - Be organizationally bound to follow the controlling CMS content listed above. For contractor organizations, the controlling CMS content listed above must; \n 1) Be formally adopted (in writing) into the practices of the organizational segment performing work on behalf of CMS, by an official with authority to do so, or \n 2) The content and intent of the controlling CMS content listed above must be formally (in writing) incorporated into (contractor) governing organizational practices.\n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Sections 4.1.5, and 4.2.2\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 2. CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip   (Publicly available)",
                  },
                  {
                    uuid: "aefc92d5-90c9-43ff-8c72-f182dbd04b39",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "02c34792-1385-4c95-876c-06d4232782d9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "75907e8e-8d8f-41dc-86fe-37531f05b30a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "at-4",
                    description:
                      "This is a hybrid control.\n Common: The inheriting system with users with a CMS ID, including both CMS employees and contractors, must append the inheritance statement with all procedures tracking security awareness and role based training, including training taken outside of the CMS CBT.\n CMS maintains information systems security and privacy training records only for individuals who have a CMS EUA user ID and have been designated by his\\her management as having significant security responsibilities (SSR). Information Security and Awareness training (Computer Based Training [CBT]) can be found at https://www.cms.gov/cbt/login. Training information can be entered in the Manage Your Training link. The CBT website can record CMS and non-CMS training.\n System Specific: If a user needs additional training or has taken training outside of what is provided by the ISPG, it is the responsibility of the user and the system to keep track of that training. If a user does not take training in the allotted time period, his/her user ID is revoked. Contractors without access to CMS training must provide equivalent training and training documentation. The records are retained by ISPG for five years. \n In order to inherit this control, individual systems must:\n - Be organizationally bound to follow the controlling CMS content listed above. For contractor organizations, the controlling CMS content listed above must;\n 1) Be formally adopted (in writing) into the practices of the organizational segment performing work on behalf of CMS, by an official with authority to do so, or\n 2) The content and intent of the controlling CMS content listed above must be formally (in writing) incorporated into (contractor) governing organizational practices.\n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Sections 4.1.5, and 4.2.2\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf   (Publicly available)\n 2. CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip   (Publicly available)",
                  },
                  {
                    uuid: "3eca122b-6a26-4d45-946b-2879edefea66",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5160d495-659f-4bee-854e-b909f2a43de3",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2a37d7ea-1e84-4a1f-841a-a2cce3c21ad3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "au-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Audit and Accountability Control Family procedures available for this application. \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.3 \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf (Publicly available) \n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 98)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip (Publicly available)\n 3. CMS Technical Reference Architecture (TRA) Release 1 Volume 2 Network Services Access Control and Identity Management Sections 5.3.3 and 6.4\n https://share.cms.gov/office/ois/CTO/SitePages/TRA.aspx  (Access restricted)",
                  },
                  {
                    uuid: "b592f5e0-2166-41eb-9d74-2cfb9e5f8d35",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a68353bf-c13b-4d4a-b57c-d15d1db6dea4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "89edee1f-7048-4d37-ae99-a145ac9e30f4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ca-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Security Assessment and Authorization Control Family procedures available for this application.\n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.4\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf (Publicly available)\n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip (Publicly available)\n 3. RMH Chapter 12 Security and Privacy Planning\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/RMH-Chapter-12-Security-and-Privacy-Planning.pdf  (Publicly Available)\n 4. Assessment Plan Template\n Security Assessment Plan Template | CMS (Publicly Available)\n 5 Assessment Report Template\n Security Assessment Report Template | CMS (Publicly Available)",
                  },
                  {
                    uuid: "8d19eead-8fde-4927-9093-5f12ce263614",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "050605bf-93b1-4840-89fb-bb7aed7798b6",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "2c7c029d-6a0b-429c-853f-9274b6d38b3e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cm-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Configuration Management Control Family procedures available for this application.\n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.5\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf (Publicly available)\n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 143)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip (Publicly available)\n 3. RMH Chapter 5 Configuration Management\n https://www.cms.gov/files/zip/rmh-chapter-5-configuration-managment-v12zip.zip-0  (Publicly available)",
                  },
                  {
                    uuid: "971848ae-49e3-4db9-9e8c-827a1ad203d2",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ecf7447d-abee-4159-8aee-375c5a83c75e",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "260e1985-9347-48dd-ac45-58e73920f99d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "cp-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Contingency Planning Control Family procedures available for this application.\n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.6\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 173)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n 3.  Chapter 6 Contingency Planning are available at \n RMH Chapter 6 Contingency Planning | CMS  (Publicly available)\n 4.  Chapter 6 CP Supplemental Exercises are available at\n RMH Chapter 6 Supplemental Contingency Planning Exercise Procedures | CMS   (Publicly available)",
                  },
                  {
                    uuid: "abed9528-9ddb-4107-b490-d2c831e5f14e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "22808b2b-e14b-4f9e-a8ce-3c9479ad79bd",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "7de7e1d0-f428-40fb-9bb1-1ce5a92e8707",
                        value: "Yes",
                      },
                    ],
                    "control-id": "di-cms-01",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Data Quality and Integrity Control Family procedures available for this application.\n  Inheritance Statement: \n A., B. Common - In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n\n  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.3: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n\n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html (Publicly available)",
                  },
                  {
                    uuid: "dfdf1003-8641-47d6-b6bc-b59b8d8d30bf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "b492dc72-61a9-4f3d-b923-c30a8fcd9adf",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "95a6c480-3daa-45e2-a81f-fc605031de2a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "dm-cms-01",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Data Minimization and Retention Control Family procedures available for this application. Inheritance Statement: \n A., B. Common - In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n\n  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.4: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n\n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html (Publicly available)",
                  },
                  {
                    uuid: "b725b973-9747-4494-b783-1a15d39fc21c",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7115ebce-be0f-44b2-ac9e-4c8c8366561f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "ed177b1c-96cc-4322-b43b-603d0ba9d94b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ia-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Identification and Authentication procedures available for this application. \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.7 \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n 2.             CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html\n  \n 3.           CMS Technical Reference Architecture (TRA) Release 1 Volume II Network Services, Sections 5.2 p.157 and 6.2 p.139\n  \n https://share.cms.gov/office/ois/CTO/SitePages/TRA.aspx (Access restricted)",
                  },
                  {
                    uuid: "81a821cb-0552-4b7e-9a99-0b4b6b7e3053",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "8f0f35b4-33e6-4f4c-a098-7c6bf7a196a9",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "db69d59e-780f-42d3-8b58-152b2e052a30",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ip-cms-01",
                    description:
                      "This is an Inheritable Control. The inheritor must append the Inheritance Statement with all system-specific Individual Participation and Redress procedures available for this application.\n Inheritance Statement: \n A., B. Common - In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n\n \n CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.5: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n  \n\n \n CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended (Page 421):\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n  \n\n \n Risk Management Handbook (RMH) Chapter 19 Privacy Procedures:\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/RMH-Chapter-19-Privacy  (Publicly Available)",
                  },
                  {
                    uuid: "a1ccab55-45cd-41f5-8d74-42e7827a67b6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "a0d916a1-3313-48e1-b335-9acc7d287943",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "b910dd01-1359-4414-9d1c-a71b6e7c3576",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ir-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Incident Response procedures available for this application. \n  \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.8\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2.             CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n  \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  3.             Risk Management Handbook (RMH) Chapter 8 Incident Response\n  \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)",
                  },
                  {
                    uuid: "748f5001-eeaa-4cf8-8719-4a4b2a8844a6",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "d1646e0d-3e72-4539-a616-b2c4a40a0add",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5a974f7f-40db-4cbd-8bba-f47407bf6f79",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ma-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific System Maintenance procedures available for this application. \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS Policy and Procedures are available at:\n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.9\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 133)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n 3.  RMH Chapter 9 Maintenance\n https://www.cms.gov/research-statistics-data-and-systemscms-information-technologyinformationsecurityinformation/rmh-chapter-09-maintenance  (Publicly available)",
                  },
                  {
                    uuid: "83bf2487-e383-4935-b544-cb4612f5512b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "60d3b9a2-1e50-41a8-a8d0-78f50a718059",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "8195f4b1-9d5e-4edd-9e44-76808a8bc27f",
                        value: "Yes",
                      },
                    ],
                    "control-id": "mp-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Media Protection procedures available for this application.\n  \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.10\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2.             CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n   https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available).        \n  \n 3.            HHS Cyber Security Program:Standard for Encryption of Computing Devices and Information https://intranet.hhs.gov/it/cybersecurity/policies/index.html (HHS Intranet) \n  \n  \n 4.           Risk Management Handbook(RMH) Chapter 10:Media Protection.\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/RMH-Chapter-10-Media-Protection",
                  },
                  {
                    uuid: "8c70e99d-2a94-4a0d-955e-e9cc91102718",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "89984f38-1b6d-4c14-9d9f-9cc89da2e616",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "c023475c-74d6-4e64-979d-c98f32eeb084",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pe-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Physical and Environmental Protection procedures available for this application.\n  \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.11\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n  \n 2.             CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n  \n  https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available).        \n 3.            Risk Management Handbook(RMH) Chapter 11: Physical and Environmental Protection.\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/RMH-Chapter-11-Physical-and-Environmental-Protection.pdf",
                  },
                  {
                    uuid: "5fdf017f-f603-48cd-8894-6281773f1f4b",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0da52968-1f01-46fa-8b29-6bbb61c042e9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "940b5a40-6786-4af8-9121-88329cf4e0a4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pl-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Security Planning procedures available for this application.\n  \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.12\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2.             CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n  https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available).        \n 3.             Risk Management Handbook (RMH) Chapter 12 Security and Privacy Planning \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html?DLSort=0&DLEntries=10&DLPage=1&DLSortDir=ascending&DLFilter=plann . (Publicly available)",
                  },
                  {
                    uuid: "6bd26756-5aef-4356-b90f-1663cdb5ca4f",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "39855fb8-f17b-4e40-a0e6-f38c1a383122",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "55afcd0f-5999-419a-9db0-dc6c924c1ae2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pl-4",
                    description:
                      "This is a hybrid control. This control is only fully inheritable if the system is based at a CMS EDC. If the system is not based at an EDC, then it is the system`s responsibility to make the Rules of Behavior available to all users and receive signed acknowledgement forms. All users accessing CMS systems must comply with the HHS Rules of Behavior. HHS Rules of Behavior document is available at https://www.hhs.gov/ocio/policy/hhs-rob.html. \n  \n Inheritance Statement: \n If a user is a CMS federal employee, then he/she received and signed the acknowledgement form at New Employee Orientation. Contractors with access to CMS computer systems would have received and signed the acknowledgement form prior to receiving access. The acknowledgement form is on the Application for Access to CMS Computer Systems found at: http://intranet.cms.gov/Component/OSSO/Forms/PDF/cms20037-508.pdf\n  \n In order to inherit this control, individual systems must: \n  \n - be organizationally bound to follow the controlling CMS content listed above. For contractor organizations, the controlling CMS content listed above must; 1) be formally adopted (in writing) into the practices of the organizational segment performing work on behalf of CMS, by an official with authority to do so, or 2) the content and intent of the controlling CMS content listed above must be formally (in writing) incorporated into (contractor) governing organizational practices.\n  \n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures every 365 days, or as necessary. CMS policy and procedures are available at:\n  \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.12\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n  \n  https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available).        \n 3.  Risk Management Handbook (RMH) Chapter 12 Security and Privacy Planning \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html?DLSort=0&DLEntries=10&DLPage=1&DLSortDir=ascending&DLFilter=plann . (Publicly available)\n 4.   HHS Rules of Behavior for Use of HHS Information Resources\n https://www.hhs.gov/ocio/policy/hhs-rob.html",
                  },
                  {
                    uuid: "4e15aac0-7529-4de1-ab27-0a36d5247c6e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "48ed8cce-094c-4baa-8283-9dedc7c374b4",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "a64d9c91-3080-406f-ad16-f6002945014a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pm-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Information Security Program Plan procedures available for this application. \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures every 365 days, or as necessary. CMS policy and procedures are available at:\n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.18\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2.  CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)",
                  },
                  {
                    uuid: "54a34c97-8ffb-41bb-9f4d-c432d2005fd1",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "7024e766-20dd-42bd-b623-3dd7dfbdd5bf",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "6da6eb90-f5fe-434a-b5e8-8c5901e8d68a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pm-2",
                    description:
                      "Inheritance Statement: In accordance with HHS policy, CMS has appointed the OpDIV CISO and Senior Offical for Privacy (SOP)  as having the responsibility to develop an Information Security and Privacy program. The HHS IS2P requires obligations to other laws such as HIPAA and HITECH be addressed to ensure compliance by its OPDIVs. Violations regarding the Health Insurance Portability and Accountability Act (HIPAA) must be reported to the Department of Health and Human Services (HHS) Office for Civil Rights (OCR). In accofdance to the CMS IS2P2,  CMS has implemented has implemented a number of controls including the Privacy Control Baselines to assist the SOP in managing PII/PHI requirements affecting its systems and the privacy risks associated. In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures every 365 days, or as necessary. CMS policy and procedures are available at:\n 1. Office for Civil Rights:\n https://www.hhs.gov/hipaa\n 2. HHS Information System Security and Privacy Policy IS2P\n HHS FISMA Mailbox at fisma@hhs.gov. \n 3.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 3,  3.3.2-3, 3.4.7, 3.4.13 and Section 4.2.2. 4.2.18 and others\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n 4.             CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)",
                  },
                  {
                    uuid: "8d877f96-d5ee-48b5-80b2-b92746cf6274",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "35558c22-1a1e-4997-af3b-aeeb04cf709c",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "4b542659-b01f-4d05-88a6-2c5e6026ab6b",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pm-4",
                    description:
                      "Inheritance Statement: The CMS Risk Management Handbook Vol. III Standard 6.2, Plan of Action and Milestone Process Guide, is posted on the Information Security and Privacy Library. The handbook is reviewed every three (3) years and went through a major revision in 2015. Remedial actions are documented using the CMS FISMA Control Tracking System (CFACTS). POA&Ms are reported monthly to the HHS System Data Warehouse (HSDW) for review. In turn, HHS submits an agency level report to OMB. \n  \n Per the POA&M handbook, the ISSO is responsible for ensuring every identified weakness is fully addressed. ISPG performs a validation activity on high risk items, and randomly samples other closed POA&M’s to ensure each weakness is documented in accordance with the POA&M handbook.\n  \n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n  \n 1.             The RMH Vol. III Standard 6.2, Plan of Action and Milestone Process Guide \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.18\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 3.             CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)",
                  },
                  {
                    uuid: "71fb029f-70fd-4105-8d24-f7e2e0f0c0e5",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f5b06962-1175-4704-97e2-ea1bf80e1dff",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "61e868b8-a1b9-44b4-a52c-770236ee54be",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pm-6",
                    description:
                      "Inheritance Statement: CMS ISPG measures performance of systems in each data center where CMS security tools are present. Cybersecurity Business Owner reports are generated and delivered on a weekly basis that contains the measures and effectiveness of the security vulnerability posture of each data center. In addition, a CISO SOP Bi-Weekly report are generated for delivery to the CISO and CIO that provides insight into the effectiveness of the security program. Furthermore, stakeholders such as ISSOs have access to CFACTS that contain dashboards that reveal the effectiveness of the security controls for their FISMA system(s). \n  \n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.18\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2.             CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 3.             SOC Debrief  (Sensitive Internal Document with limited access )",
                  },
                  {
                    uuid: "2fda1af7-0be6-4238-ba9c-ccaecaa4b7f8",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3ca946cb-decb-42dd-9cb8-b52cf4cf9be0",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "cf44d82f-2b14-4315-870d-30ee98eeea78",
                        value: "Yes",
                      },
                    ],
                    "control-id": "pm-7",
                    description:
                      "CMS has a designated Division of Enterprise Architecture (EA). Business Owners are required to submit information to EA which is stored in the departments HHS EA Repository (HEAR). The key field identifier in HEAR is the UUID number. Every FISMA system is assigned a UUID number that must be annotated within the System Security Plan (SSP). \n  \n https://share.cms.gov/office/oei/SAG/DEA/SitePages/New%20System%20Steps.aspx\n  \n The form is linked there, https://share.cms.gov/office/oei/SAG/DEA/EADocuments/Core%20System%20Information%20form_2016_0926.docx",
                  },
                  {
                    uuid: "d415d14e-be91-46e0-bb89-76562b59a7db",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c5b6b7cb-8990-4613-b630-cfebf477cd3d",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "193f83a2-c8a5-42d9-9761-c2a7981b05e3",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ps-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Personnel Security procedures available for this application. \n  \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS Personnel Security Policy and Procedures are available at: \n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.13\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2.             CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1\n  \n  https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available). \n 3.          Risk Management Handbook(RMH) Chapter 13: Personnel Security .(Publicly available). \n             https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/RMH-Chapter-13-Personnel-Security.pdf",
                  },
                  {
                    uuid: "a5f5ac62-671a-4501-8f96-14a1bf868132",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "48e89bb1-3a54-44e2-8c07-96fee04db214",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "efa3094a-29b8-4136-b2bd-1755ca69e9a4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ra-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Risk Assessment procedures available for this application.\n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. \n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures every three (3) years, or as necessary. CMS Risk Assessment policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.14 \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1  (Page 291)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n 3.  RMH Chapter 14 Risk Assessment:\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/RMH-Chapter-14-Risk-Assessment  (Publicly available)\n 4.  Risk Assessment Template\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/Information-System-Risk-Assessment-Template (Publicly available)",
                  },
                  {
                    uuid: "63d7851c-0be0-4ff3-b1ed-c6da6ff5edaf",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "57b7b3a0-ab4e-4872-b7c0-89a9ceacae3f",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "19129eb5-47ca-433f-a473-0d87cffc5aa5",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific System and Services Acquisition Policy and Procedures available for this application.\n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.15\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1  (Page 299)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)",
                  },
                  {
                    uuid: "19771ec4-a757-4efb-833d-9555e3c4af96",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5a7f19e8-4548-41d1-a663-30b5cd8817aa",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "9fb40c1f-5d21-44b9-8137-1f5dcedbd7b4",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sa-10",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific Developer Configuration Management procedures available for this application. \n Inheritance Statement: The ISPG is responsible for the configuration management settings. CMS baseline configuration settings are as stated in control CM-6(1). Individual systems are fully responsible ensuring the requirements for a) through e) of this control are implemented and managed at the system level. \n In order to inherit this control, individual systems must:\n - be organizationally bound to follow the controlling CMS content listed above. For contractor organizations, the controlling CMS content listed above must; 1) be formally adopted (in writing) into the practices of the organizational segment performing work on behalf of CMS, by an official with authority to do so, or 2) the content and intent of the controlling CMS content listed above must be formally (in writing) incorporated into (contractor) governing organizational practices.\n Configuration settings can also be found in \n 1.  CMS Business Partners System Security Manual, located at: \n https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/Downloads/117_Systems_security.pdf \n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n 2.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.15\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 3.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1  (Page 309)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)",
                  },
                  {
                    uuid: "f13d54a8-2149-4ff0-a8ae-0ee3a5088b32",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "5a7b3949-a596-4ce2-a0e8-1917e48423a1",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "789e0507-c250-4483-a324-109512f33f00",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-1",
                    description:
                      "This is a Hybrid control: The inheritor must append the Inheritance Statement with all system-specific System and Communications Protection Policy and Procedures available for this application. \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.16\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1  (Page 321)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)\n 3.  HHS Cyber Security Program: Standard for Encryption of Computing Devices and Information\n  https://intranet.hhs.gov/it/cybersecurity/policies/index.html  (HHS Intranet)",
                  },
                  {
                    uuid: "194c35fd-09c9-494e-b6a1-768072342a33",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "c6eda057-9b80-4efc-96cc-f6fc8867de36",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "3acecd99-00a6-4b9b-9845-85eca954fe7d",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-8",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific requirements and information identified within the CIO Memorandum\n  \n Inheritance Statement: This is a Program Implementation supporting the CMS Encryption Strategy. In accordance to CMS/HHS Policy Information systems must protect the Confidentiality, Integrity and Availability (CIA) of its sensitive information at rest and in-transit. This strategy requires all CMS information systems that participate to implement the required Compensating Controls and/or the required Core Controls within an 18 month timeline. \n  \n System Specific:\n Systems must implement the following Strategy: \n  \n\n Enroll into the ECAP process \n Inherit the required Core Encryption Controls from the OCISO Inheritable Controls, and agree to the milestones identified within the associated POAMs\n Within 6 months from the date of the CIO Memorandum assess, prioritize, and document the encryption approach for each system in an Encryption Corrective Action Plan (E-CAP)\n Submit the completed E-CAP to ISPG for review and approval\n Implement the ECAP Plan within 18 months from the date of the CIO Memorandum \n\n  \n  \n CMS Strategy for Encrypting Sensitive Information (internal):\n\n https://share.cms.gov/Office/OIT/ISPG/Security%20%20Privacy%20NonInternet%20Notifications%20Librar/CIO%20Directives%20and%20Memorandums/CIO_Memorandum_CMS_Strategy_for_Encrypting_Sensitive_Info_INFORMATIONAL.pdf\n\n  \n RMH Chapter 16 System and Communications Protection\n https://www.cms.gov/research-statistics-data-and-systemscms-information-technologyinformationsecurityinformation/rmh-chapter-16-system-and-communications-protection\n  \n Sensitive PII Definition and Guidance (Internal):\n https://share.cms.gov/Office/OIT/ISPG/ISPG%20CMS%20Internal%20Requirements%20Documentation/HHS%20Memorandums%20and%20Guidance/Sensitive%20PII_hhs_minimum_configuration_standards_20120430.pdf\n  \n HHS Standard for Encryption of Computing Devices and Information (Internal)\n https://intranet.hhs.gov/technical-support/cybersecurity/policies-standards-memoranda-guides/standards",
                  },
                  {
                    uuid: "22bd89bc-a7f2-4eba-84d7-24597d51a13a",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ebecbc1b-07ca-4c8f-bf7a-a9c0479ef198",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "878e39bd-ab45-47ce-88e2-dbafe327c46e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-28",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific requirements and information identified within the CIO Memorandum\n  \n Inheritance Statement: This is a Program Implementation supporting the CMS Encryption Strategy. In accordance to CMS/HHS Policy information systems must protect the Confidentiality, Integrity and Availability (CIA) of its sensitive information at rest and in-transit. This strategy requires all CMS information systems that participate to implement the required Compensating Controls and/or the required Core Controls within an 18 month timeline.\n  \n System Specific:\n Systems must implement the following Strategy:\n  \n\n Enroll into the ECAP process\n Inherit the required Core Encryption Controls from the OCISO Inheritable Controls, and agree to the milestones identified within the associated POAMs\n Within 6 months from the date of the CIO Memorandum assess, prioritize, and document the encryption approach for each system in an Encryption Corrective Action Plan (E-CAP)\n Submit the completed E-CAP to ISPG for review and approval\n Implement the ECAP Plan within 18 months from the date of the CIO Memorandum\n\n  \n  \n CMS Strategy for Encrypting Sensitive Information (internal): \n\n https://share.cms.gov/Office/OIT/ISPG/Security%20%20Privacy%20NonInternet%20Notifications%20Librar/CIO%20Directives%20and%20Memorandums/CIO_Memorandum_CMS_Strategy_for_Encrypting_Sensitive_Info_INFORMATIONAL.pdf\n\n  \n RMH Chapter 16 System and Communications Protection\n https://www.cms.gov/research-statistics-data-and-systemscms-information-technologyinformationsecurityinformation/rmh-chapter-16-system-and-communications-protection\n  \n Sensitive PII Definition and Guidance (Internal):\n https://share.cms.gov/Office/OIT/ISPG/ISPG%20CMS%20Internal%20Requirements%20Documentation/HHS%20Memorandums%20and%20Guidance/Sensitive%20PII_hhs_minimum_configuration_standards_20120430.pdf\n  \n HHS Standard for Encryption of Computing Devices and Information (Internal)\n https://intranet.hhs.gov/technical-support/cybersecurity/policies-standards-memoranda-guides/standards",
                  },
                  {
                    uuid: "78a978dc-b6a5-4426-9498-0b955380e2b7",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "41585253-42c9-4d65-a0d4-14ccaf9a0552",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "b1fa5d51-2b89-4be8-9e45-4c21d8a0735a",
                        value: "Yes",
                      },
                    ],
                    "control-id": "sc-cms-01",
                    description:
                      "Inheritance Statement:\n This control is ONLY applicable to users who have an xxx@cms.hhs.gov email address. All other email services are NOT covered by this control implementation. Responsibility of implementing this control is on the user. \n  \n In order to inherit this control, individual systems must:\n  \n - be organizationally bound to follow the controlling CMS content listed above. For contractor organizations, the controlling CMS content listed above must; 1) be formally adopted (in writing) into the practices of the organizational segment performing work on behalf of CMS, by an official with authority to do so, or 2) the content and intent of the controlling CMS content listed above must be formally (in writing) incorporated into (contractor) governing organizational practices.\n  \n - have users with an xxx@cms.hhs.gov email address that is applicable to this system. \n  \n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n  \n 1.             CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.1.7, 4.2.16\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 2.             CMS Acceptable Risk Safeguards Manual (ARS) Manual Appendix containing CMSRs for the appropriate Impact Level\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n  \n 3.             Supplemental Security Controls by Security Level, How to Meet The CMS Moderate/High Technical Security Requirements \n  \n http://intranet.cms.gov/Component/OIS/Desktop-Voice-and-Video/policies-procedures/Documents/Supplemental-Security-Controls.pdf",
                  },
                  {
                    uuid: "ac24b11e-ed4e-4975-8773-43970609b3e0",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "f77a5790-e457-4dac-808f-9a6af49cbe61",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "31a32e62-b1e2-4283-b09c-48618f2e09d2",
                        value: "Yes",
                      },
                    ],
                    "control-id": "se-cms-01",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Security procedures available for this application. \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n 1. CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.6 https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf (Publicly available)\n 2. CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 (Page 425)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip (Publicly available)\n 3. Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: \n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Info-Security-Library-Items/RMH-Chapter-19-Privacy  (Publicly Available)",
                  },
                  {
                    uuid: "ed389fb0-d941-47eb-a4c6-b03fdf66eefa",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "6623d178-b23f-4437-a2e5-278c4d012ca9",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "5dad829f-dce4-4a7a-b78c-859682284efe",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-1",
                    description:
                      "This is a hybrid control. The inheritor must append the Inheritance Statement with all system-specific System and Information Integrity Policy and Procedures available for this application. \n Inheritance Statement: In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.17\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1  (Page 348)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)",
                  },
                  {
                    uuid: "55856d1f-c557-4912-9817-acf5ac31185e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "ab98214e-e5bc-4bf7-9786-d1bacb09f558",
                        value: "Hybrid",
                      },
                      {
                        name: "provider",
                        uuid: "aa002f3b-3003-415c-ac7a-80a81a904cd0",
                        value: "Yes",
                      },
                    ],
                    "control-id": "si-8",
                    description:
                      "This is a hybrid control. In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. This control is ONLY inheritable for those email addresses that are xxx@cms.hhs.gov. CMS inherits this control from HHS, who manages and maintains the CMS Federal email system. All other email systems MUST account for this control locally. In order to inherit this control, individual systems must: \n - be organizationally bound to follow the controlling CMS content listed above. For contractor organizations, the controlling CMS content listed above must; 1) be formally adopted (in writing) into the practices of the organizational segment performing work on behalf of CMS, by an official with authority to do so, or 2) the content and intent of the controlling CMS content listed above must be formally (in writing) incorporated into (contractor) governing organizational practices.\n - utilize email addresses that are xxx@cms.hhs.gov for applicable users and applications. The CMS SOC has developed an Outlook add-on for which provides a 1 click solution for the end user for submitting spam. The user would select an spam email and once the button is pressed, it automatically creates a new email, attaches suspicious email to maintain pertinent metadata, forwards to HHS Spam Mailbox, and moves email to Outlook’s delete folder.\n In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 3 years, or as necessary. CMS policy and procedures are available at:\n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.2.17\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/CMS-IS2P2.pdf  (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1  (Page 369)\n https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Downloads/ARS-31-Publication.zip  (Publicly available)",
                  },
                  {
                    uuid: "7bf9b0e0-b428-45ff-be6b-56fd5a59614e",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "0e364ae6-e5d7-4f75-91d6-ced6b0f973be",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "f959d6d4-e3ee-4af4-8d9a-2d0797d638f9",
                        value: "Yes",
                      },
                    ],
                    "control-id": "tr-cms-01",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Transparency procedures available for this application. \n  Inheritance Statement: \n A., B. Common - In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.7: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n 3.  Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html (Publicly available)",
                  },
                  {
                    uuid: "68b593be-4a82-45d1-8b3a-c0a1c6e79a98",
                    props: [
                      {
                        name: "security_control_type",
                        uuid: "3d32ca5b-7995-4c12-87b5-2a94be6bafb2",
                        value: "Inherited",
                      },
                      {
                        name: "provider",
                        uuid: "15c60f1b-7a42-422e-a04c-44b2e3b1504e",
                        value: "Yes",
                      },
                    ],
                    "control-id": "ul-cms-01",
                    description:
                      "This is an inheritable control. The inheritor must append the Inheritance Statement with all system-specific Use Limitations procedures available for this application. \n  Inheritance Statement: \n A., B. Common - In accordance with HHS policy, CMS reviews and updates agency security and privacy policies and procedures at least every 2 years, or as necessary. CMS Governance and Privacy Program policy and procedures are available at: \n 1.  CMS Information Systems Security and Privacy Policy (CMS IS2P2), Section 4.3.8: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n 2.  CMS Information Security and Privacy Acceptable Risk Safeguards (ARS) v3.1 or as amended: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html. (Publicly available)\n 3.  Risk Management Handbook (RMH) Chapter 19 Privacy Procedures: https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information-Technology/InformationSecurity/Information-Security-Library.html (Publicly available)",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 50,
  },
  {
    id: 73,
    title: "okta",
    description: "okta",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "0e46c2ec-d575-41e8-a5b3-e63db8d7d41a",
        metadata: {
          title: "OKTA",
          version: "unknown",
          published: "2022-02-01T21:48:06.517868+00:00",
          "last-modified": "2022-02-01T21:48:06.517876+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "fa562d08-778b-4a31-a213-b067a5179957",
            title: "okta",
            description: "okta",
            "control-implementations": [
              {
                uuid: "cd912bc0-e9d6-4909-8655-a00236b016fe",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "97496de3-fd06-4c06-a24c-ffc1b9d4f2b0",
                    "control-id": "ac-1",
                    description:
                      "The following application-specific policies and procedures are available: [OKTA P&Ps], Authorizing access to the application and creating, enabling, modifying, disabling, and removing application accounts.",
                  },
                  {
                    uuid: "482a6d8e-d0c8-46f2-86c2-4649a9d39e64",
                    "control-id": "ac-2",
                    description:
                      "This control can be fully inherited from OIT OKTA for individual accounts.\n\n- b. The OKTA system manages identities and authentication.\n\n- c. (HYBRID) For information system accounts (individual OKTA accounts), the\n  inheriting system is responsible for opening a ticket with OIT OKTA to set up\n  conditions for group and role memberships.\n\n\n- d. OKTA provides individual, group, system and application accounts. OKTA handles\n  account management as accounts are provisioned after they have set up their\n  account with OKTA and EUA.\n\n\n- e. (HYBRID) For individual OKTA accounts, inheriting systems are responsible for\n  identifying who will provide approval for defined personnel and roles\n\n\n- f. OKTA creates, modifies and deletes user accounts and enables/disables\n  authentication functionality in accordance with Acceptable Risk Safeguards (ARS)\n  requirements and Risk Management Handbook (RMH) standards and procedures.\n\n\n- g. (HYBRID) For information system accounts (individual OKTA accounts), the\n  inheriting system is responsible for opening a ticket with OIT OKTA to set up\n  how the organization OKTA accounts will be monitored.\n\n\n- h. (HYBRID) For individual accounts, SaaS accounts and system application\n  accounts, Inheriting systems a re responsible for notifiying the OIT OKTA team\n  when there are changes to their accounts.\n\n\n- i. (HYBRID) Inheriting systems are responsible for setting up roles and\n  memberships for individual OKTA accounts. OIT OKTA has been implemented in sync\n  with EUA for identity and account management.",
                  },
                  {
                    uuid: "49ed98d0-a9bd-484a-a5d2-c1a0989609ef",
                    "control-id": "ac-2.1",
                    description:
                      "All account management is handled by OIT OKTA.\n\nOKTA provides an identity and authentication system providing level 3 assertions E-authentication.",
                  },
                  {
                    uuid: "71989994-b5ea-4a51-82e3-9c5c90e10e02",
                    "control-id": "ac-2.2",
                    description:
                      "HARP-OKTA is responsible for account management. Refer to HARP-OKTA account management policy. OKTA is a FedRAMP approved IDaaS and complies with AC-2(2).",
                  },
                  {
                    uuid: "3b46b75f-fb51-4767-8e5c-5814f8c23151",
                    "control-id": "ac-2.3",
                    description:
                      "This control can be fully inherited from OIT OKTA for individual accounts.\n\nAs of right now accounts only become deactivated when a user specifically deactivates the account or when OKTA last login > 396 days.",
                  },
                  {
                    uuid: "36b745d2-6e85-4295-8cb9-49bbb8ff0d89",
                    "control-id": "ac-2.4",
                    description:
                      "This control can be fully inherited from OIT OKTA for individual accounts.\n\nOKTA is configured to automatically log account creation, modification, enabling, disabling, and removal actions.\n\nNotifications of requests to activate new accounts, or modify or disable accounts are automatically posted to OKTA Administrator dashboards, and require direct action to complete.",
                  },
                  {
                    uuid: "d1c51f75-4003-40a6-93c0-dc536d8f5755",
                    "control-id": "ac-2.9",
                    description:
                      "OIT configures OKTA policy which forbids shared accounts and only allows individual user accounts. Refer to HARP=OKTA account management policy. OIT is providing the customer responsibility for OKTA services.",
                  },
                  {
                    uuid: "b6d05e92-67e9-4bf6-b1a9-152ab6f9638b",
                    "control-id": "ac-3",
                    description:
                      "OKTA requires Multi-Factor Authentication (MFA) when logging in, which the user is responsible for setting.\n\nSensitive data (including PHI, PII, Financial, and Proprietary) are protected through OCTA-managed access enforcement mechanisms including role-based access and multi-factor authentication that restrict a user's access to only necessary applications, and accounts.",
                  },
                  {
                    uuid: "734e97cc-4843-4f31-8654-561bd763c2d1",
                    "control-id": "ac-3.9",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AC-3(9).\n\nControlled release of PII and PHI is managed from a technical perspective using access control enforced by HARP, IDM, OKTA, or AWS depending on the user, user role, and the environment in which work is being performed.",
                  },
                  {
                    uuid: "e5d1029d-68bd-4459-b279-2ad036a65cb8",
                    "control-id": "ac-4",
                    description:
                      "OKTA is FedRAMP certified and is one of CMS’s Federated services. Authentication occurs under the SAML protocol, the user browser connects to both OKTA and authenticating system.",
                  },
                  {
                    uuid: "fc87b222-d52f-42b5-845d-5e93d9e29fec",
                    "control-id": "ac-4.8",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "29f83608-f92c-448a-87ae-905041657dcb",
                    "control-id": "ac-4.15",
                    description:
                      "The OKTA identity provider does not accept uploaded files.",
                  },
                  {
                    uuid: "b9b64ac5-9c82-4d83-b35d-ef155b27b82a",
                    "control-id": "ac-4.18",
                    description:
                      "(External) - All users must be confirmed for user verification via OKTA and the Authentication (Authn) service.",
                  },
                  {
                    uuid: "9442b3e0-07f3-469e-81af-b9266f694c4a",
                    "control-id": "ac-5",
                    description:
                      "CMS/OIT holds administrator rights to OKTA.  User account management is handled by OKTA and notifications are sent to the Security official to handle System roles.",
                  },
                  {
                    uuid: "986cc9e6-6cc7-4a92-a468-9a2c19cdb2ce",
                    "control-id": "ac-6",
                    description:
                      "User account management is handled by OKTA and notifications are sent to the Security official to handle System roles.",
                  },
                  {
                    uuid: "5c6c0e6b-f799-4cd7-ae95-fe8afdfe6e2e",
                    "control-id": "ac-6.1",
                    description:
                      "For information system accounts (individual OKTA accounts), this control is fully inherited from OIT-OKTA.\n\nAuthentication mechanisms are set through OKTA integration.",
                  },
                  {
                    uuid: "40259e92-2987-4ecf-9abd-ba934274e6d5",
                    "control-id": "ac-6.5",
                    description:
                      "For information system accounts (individual OKTA accounts), this control is fully inherited from OIT-OKTA.\n\nInfrastructure control implementation is provided by FedRAMP-authorized SaaS.\n\nPrivileged users connect to the environment via a two-stage MFA process utilizing Palo Alto VPN with OKTA RADIUS for MFA.",
                  },
                  {
                    uuid: "3536129f-8228-4172-b813-581188879519",
                    "control-id": "ac-7",
                    description:
                      "For information system accounts (individual OKTA accounts), the unsuccessful login attempts setting is fully inherited from OIT-OKTA.\n\nThe count of failed logins, time limits, and lockout periods are set and enforced in OKTA. These policies are configured through the use of OKTA account policies.",
                  },
                  {
                    uuid: "3ef3f85b-e1b7-4fd8-9745-e743e30729b7",
                    "control-id": "ac-9.1",
                    description:
                      "These policies are configured through the use of OKTA account policies.",
                  },
                  {
                    uuid: "576c8cb1-8e99-40c3-9a66-218d3e5cf097",
                    "control-id": "ac-11",
                    description:
                      "This control can be fully inherited from OIT OKTA for individual accounts.\n\nSessions are locked after 15 minutes of inactivity. Once session ends, users must go through entire authentication process (username, password, OKTA MFA).",
                  },
                  {
                    uuid: "24b61695-8eef-470e-a867-0316bba09bd2",
                    "control-id": "ac-12",
                    description:
                      "For information system accounts (individual OKTA accounts), session termination is a hybrid control for inheriting system but may have the ability to be fully inherited from OIT-OKTA depending on the inheriting system's utilization of the session.\n\nOKTA automatically terminates a user session after conditions or trigger events requiring session disconnect. Once session ends, users must go through entire authentication process (username, password, OKTA MFA).",
                  },
                  {
                    uuid: "2468372b-4f74-4603-875c-678b75f32c82",
                    "control-id": "ac-17.1",
                    description:
                      "All end user login attempts are logged using Splunk OKTA implementation.",
                  },
                  {
                    uuid: "991ea30f-dd0c-460b-8816-577ddbefa12f",
                    "control-id": "ac-17.9",
                    description:
                      "Revoking user access to the application can be achieved by updating OKTA/IDM to remove their permissions for accessing the application.",
                  },
                  {
                    uuid: "19199898-9918-405e-8412-8c7724c7e42b",
                    "control-id": "ac-18.1",
                    description:
                      "All access to OKTA is encrypted over SSL port 443.",
                  },
                  {
                    uuid: "95d61ed5-bf83-47c1-aca1-a65c24bd1c62",
                    "control-id": "ac-21",
                    description:
                      "OIT-OKTA handles PII disclosures with Experian. There is an Interconnection Agreement (IA) in place between CMS and OKTA.",
                  },
                  {
                    uuid: "7d6124dc-c03e-4a0c-8c40-4e14043f9fbd",
                    "control-id": "ap-1",
                    description:
                      "OKTA is a FedRAMP approved IDaaS. There is an interagency agreement in place between IDM, I&A and OKTA services.",
                  },
                  {
                    uuid: "19afdd03-ef65-4eea-8a8c-d1362e95edaa",
                    "control-id": "ap-2",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "d67b3e46-dc45-49e3-9607-e7d2e79ada2e",
                    "control-id": "ap-cms-01",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "486eb736-fac3-4fc6-8063-0afc34454f48",
                    "control-id": "ar-1",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "f2764da7-2764-4480-bac9-a3b5df43e6fb",
                    "control-id": "ar-2",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "875da2af-8e38-4075-a96d-d2db0a0d07dc",
                    "control-id": "ar-3",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "55495491-9198-4346-83d5-dd007210d56a",
                    "control-id": "ar-4",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "30a19d41-f7ba-48ed-919b-590de1e70452",
                    "control-id": "ar-5",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "ea5111c4-c9bb-40a0-9ae6-ed7483e0df75",
                    "control-id": "at-3",
                    description: "OKTA is a FedRAMP approved IDaaS.",
                  },
                  {
                    uuid: "c3a8842c-2eac-4aa5-ad8a-fb6b71063770",
                    "control-id": "at-4",
                    description: "OKTA is a FedRAMP approved IDaaS.",
                  },
                  {
                    uuid: "0526be8a-ee88-4e31-86d1-50323fabbfb9",
                    "control-id": "au-2",
                    description:
                      "Account creation, successful login, failed login and account lock out are logged in OKTA.\n\nAuditing of OKTA is performed under the auspices of CMS/OIT, the owner and administrator of OKTA.  Audit logs from OKTA are sent to Splunk.",
                  },
                  {
                    uuid: "58520160-b1cb-4e9f-8428-f5caea0498e8",
                    "control-id": "au-2.3",
                    description: "OKTA is a FedRAMP approved IDaaS.",
                  },
                  {
                    uuid: "60e5b136-6a2a-4663-94c8-4ba36aad6c5a",
                    "control-id": "au-3",
                    description:
                      "OKTA is a FedRAMP approved IDaaS.\n\nOKTA generates audit records that contain the required information: Date and time, Event Type, Source (component), Target, Result, User (if applicable), and use of privileged functions.\n\nAll OKTA audit records will be stored using Splunk.",
                  },
                  {
                    uuid: "3518d41d-ad28-4c2b-9005-26a905e11831",
                    "control-id": "ca-3",
                    description:
                      "OKTA is FedRAMP certified and is one of CMS’s Federated services.\n\nSystems interconnect with OKTA for Authentication and Authorization.",
                  },
                  {
                    uuid: "e4c3504c-d715-4390-9e36-b5753604eb36",
                    "control-id": "cm-2.7",
                    description:
                      "CMS does not have access to the OKTA data center; all access is through published APIs over encrypted network channels.",
                  },
                  {
                    uuid: "d33d12a8-a3de-47f9-a453-4f9219f902d1",
                    "control-id": "ia-2",
                    description:
                      "OIT OKTA works with multiple systems that interact to provide three different areas of functionality:\n\n\n  - Access management\n  - Identity management\n  - Enterprise directory services\n\n\nFor information system accounts, OKTA enforces the use of system and/or network authentication and unique user identifiers.",
                  },
                  {
                    uuid: "1b58a5bd-479b-4522-86b3-e90387fea97b",
                    "control-id": "ia-2.1",
                    description:
                      "This control can be fully inherited from OIT OKTA for individual accounts.\n\nFor information system accounts, OKTA enforces the use of MFA for network access to privileged accounts.\n\nWhile OKTA provides multifactor authentication to the application and is compliant for web-based application access, it is not used for COTS product access within the infrastructure.\n\nWhen Multi-Factor Authentication is requested using OKTA Verify with Push, the OKTA IDaaS application identifies a mobile device that has been pre-registered as owned by the user requesting authentication. OKTA then sends a notification packet using the real-time notification system provided by the mobile device OS platform (Apple iOS or Google Android). Due to notification packet size limitations, this packet contains a customer URL back to the OKTA API with a session token.  When the notification arrives on the mobile device, the user is automatically redirected to the custom OKTA URL, which displays the approval or rejection UI.",
                  },
                  {
                    uuid: "a6eee27c-ab9e-4a6e-ae74-1686d5ca094f",
                    "control-id": "ia-2.2",
                    description:
                      "This control can be fully inherited from OIT OKTA for individual accounts.\n\nFor information system accounts, OKTA enforces the use of MFA for network access to non-privileged accounts.\n\nWhile OKTA provides multifactor authentication to the application and is compliant for web-based application access, it is not used for COTS product access within the infrastructure.",
                  },
                  {
                    uuid: "52413504-2f69-4bce-9261-88bc4fb8f300",
                    "control-id": "ia-2.8",
                    description:
                      "This control can be fully inherited from OIT OKTA for individual accounts.\n\nFor information system accounts, OKTA enforces replay-resistant authentication mechanisms for network access to privileged accounts.\n\nOKTA meets the one-time password and FIPS 140-2 Level 2 requirement.",
                  },
                  {
                    uuid: "0bd4ff3e-e0d0-4ccc-b79b-038b0c9d6c7d",
                    "control-id": "ia-4",
                    description:
                      "OKTA manages identifier authorization, assignments and reuse restrictions.  OKTA prevents the reuse of user identifiers for at least two years. Internal identifiers, used for access to the underlying devices comprising the information system, are authenticated using OKTA.\n\nSystems processing, storing, or transmitting PII (to include PHI):\n\n- Application and database audit logging ensure that any access to, or action\n  involving, personally identifiable information (PII) is attributable to a unique\n  individual.\n\n- For both internal staff and Enclave users, user credentials never include a full\n  or partial Social Security Number (SSN) for the individual.",
                  },
                  {
                    uuid: "39f0faca-a2d6-49af-bd3e-572681922f17",
                    "control-id": "ia-5",
                    description:
                      "Authenticators are managed via OKTA.\nOKTA/IDM is responsible for authentication of application components.\nOKTA is further integrated with LDAP.\nAccess is given based on the roles of the user and further integrated with OKTA signon.",
                  },
                  {
                    uuid: "146e98eb-40aa-4dc4-98ce-480107821d83",
                    "control-id": "ia-5.1",
                    description:
                      "For information system accounts (individual OKTA accounts), password authentication and items a.-f. can be inherited from OIT-OKTA.\n\nOKTA/IDM is responsible for authentication of application components. The IDM applications use OKTA for account and password management of IDM users.\n\nOKTA requires passwords for both users and admins are at least 15 characters long with several types of characters for password complexity etc.",
                  },
                  {
                    uuid: "12e51960-d3b3-4451-a419-29609154f360",
                    "control-id": "ia-7",
                    description:
                      "OKTA utilizes TLS encryption protocol. OKTA is FedRAMP compliant with an ATO, and thus uses FIPS 140-2 validated cryptographic module.",
                  },
                  {
                    uuid: "83a0e3ba-3ec8-44de-95c4-f284c6aeb0bd",
                    "control-id": "ia-8",
                    description:
                      "OKTA serves to identify and authenticate all non-organizational users. To move beyond the initial provisioning login, the user must also enroll an OKTA second factor.",
                  },
                  {
                    uuid: "508882fe-e054-4477-891d-bbb000b7f682",
                    "control-id": "ia-8.2",
                    description:
                      "OKTA has received FedRAMP approval and satisfies FICAM requirements.",
                  },
                  {
                    uuid: "a57cdfbf-1346-4900-a210-86f44427542a",
                    "control-id": "ia-8.3",
                    description:
                      "OKTA has received FedRAMP approval and satisfies FICAM requirements.",
                  },
                  {
                    uuid: "ffa01ff0-a20d-4067-af8b-205cff41683f",
                    "control-id": "ia-8.4",
                    description:
                      "OKTA has received FedRAMP approval and satisfies FICAM requirements.",
                  },
                  {
                    uuid: "55319a39-f4fa-4c5c-bf86-063ec8dd2ccf",
                    "control-id": "sc-23",
                    description:
                      "OKTA only generates a token once all factors of authentication required for a role-based user has been passed and then this token is securely transmitted to configured applications to create valid and authenticated session for the requesting user.",
                  },
                  {
                    uuid: "110879e6-77f7-43de-b2ff-4f5b928a9bfc",
                    "control-id": "si-2",
                    description:
                      "Software and firmware updates are the responsibility of the SaaS vendor OKTA.",
                  },
                  {
                    uuid: "6f2dbe51-0db4-4e31-b897-777caa077ba6",
                    "control-id": "si-2.3",
                    description:
                      "Software and firmware updates are the responsibility of the SaaS vendor OKTA.",
                  },
                  {
                    uuid: "dec07e0c-b1f9-4543-9d54-596c96a395c6",
                    "control-id": "tr-1",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "4b7f4b71-a142-4d8e-bd20-3826537407f9",
                    "control-id": "tr-1.1",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "7f73858e-9940-468b-9f2d-f4caafff8635",
                    "control-id": "tr-2",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "19fce241-39a6-4230-9534-644e0f6def58",
                    "control-id": "tr-2.1",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "7e4488ab-86d8-40a0-bfb4-949c02578672",
                    "control-id": "tr-3",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "2ee46f9c-844e-4b1f-a8bf-85ffdda49c79",
                    "control-id": "tr-cms-01",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                  {
                    uuid: "ea78e3a0-4c12-4dac-9562-09793e3a4487",
                    "control-id": "ul-1",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.\n\nData sharing agreements are established between I&A, IDM, and OKTA serices. An Interconnection Security Agreement (ISA) has been established with OKTA to authorize the connection and sharing of PII with the Identity as a Services (IdaaS) solution.",
                  },
                  {
                    uuid: "4a6bc8b6-1242-4acb-9fea-6dfdeb6d0b87",
                    "control-id": "ul-2",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.\n\nData sharing agreements are established between I&A, IDM, and OKTA services. An Interconnection Security Agreement (ISA) has been established with OKTA to authorize the connection and sharing of PII with the Identity as a Services (IdaaS) solution.",
                  },
                  {
                    uuid: "89b55670-a27d-475c-979e-9ab1520f2ef0",
                    "control-id": "ul-cms-01",
                    description:
                      "OKTA is a FedRAMP approved IDaaS and complies with AP-1.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 64,
  },
  {
    id: 74,
    title: "smtp relay",
    description: "SMTP Relay",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "87b8d747-9bf8-4e10-95ea-475d138ac8a1",
        metadata: {
          title: "SMTP Relay",
          version: "unknown",
          published: "2021-09-04T02:25:31.712919+00:00",
          "last-modified": "2021-09-04T02:25:31.712923+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "3a45e3c0-3e8c-436d-b3b6-5d8423351b7b",
            title: "SMTP Relay",
            description: "SMTP Relay",
            "control-implementations": [
              {
                uuid: "421b5cc2-1a40-425b-a464-cd858c1988b2",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "ef9f7534-799c-4744-a7e5-5e28f7575694",
                    "control-id": "sc-cms-01",
                    description:
                      "The application team ensures that senstive information sent via email is encrypted using a PIV card or using a FIPS 140-2 validated method.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 1,
  },
  {
    id: 75,
    title: "splunk",
    description: "Splunk",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "b2147ff8-f87e-4b87-81f3-eeedbb232a5a",
        metadata: {
          title: "Splunk",
          version: "unknown",
          published: "2021-09-04T02:25:33.987740+00:00",
          "last-modified": "2021-09-04T02:25:33.987744+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "cc965c52-d20c-42b6-a7f0-af07bc4061ce",
            title: "Splunk",
            description: "Splunk",
            "control-implementations": [
              {
                uuid: "bbb0bd41-08fd-4fa8-9f51-75ff7c366aeb",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "8b439e8c-56db-4a5a-b06e-b6769fdf9f30",
                    "control-id": "ac-2.4",
                    description:
                      "The system supports auditing of account creation, modification, enabling, disabling, and removal utilizing Splunk. Logs for RDS instances are ingested by Splunk for ease of review and auditing.  A Splunk alert condition notifies appropriate team members when account creation, modification, enabling, disabling and remove actions occur.",
                  },
                  {
                    uuid: "74bd8c69-8eed-412d-b818-f7fcd633a824",
                    "control-id": "ac-6.9",
                    description:
                      "All system privileged application activities are audited as part of the centralized audit log collection process. Splunk is utilized to consolidate audit logs.",
                  },
                  {
                    uuid: "617607c9-c4f3-438c-9674-2519efc223ac",
                    "control-id": "ac-17.1",
                    description:
                      "All remote access devices and authentications systems are configured to send device logs to the company's Splunk log collection, correlation and reporting system. These logs are automatically fed into Splunk where they are monitored by security staff.",
                  },
                  {
                    uuid: "b6c69d3d-ad85-40ad-a00d-75ce6048d85f",
                    "control-id": "au-3",
                    description:
                      "The system leverages Splunk for aggregating audit logs generated from automated sources within multiple services for final collection and display. The audit record content ingested includes: date and time of the event, the component of the information system (e.g., software component, hardware component) where the event occurred, type of event, user/subject identity, outcome (success or failure) of the event, etc.",
                  },
                  {
                    uuid: "ac8db634-8b12-4fd6-9f40-2e856f563a2e",
                    "control-id": "au-3.1",
                    description:
                      "The audit events collected by the CMS Enterprise Splunk is pre-configured to comply with the Additional Audit Information control. All application specific logs include:\n- Filename accessed - Program or command used to initiate the event - Source and destination addresses",
                  },
                  {
                    uuid: "d6585c6e-7255-47c7-965c-acbfabbc6e18",
                    "control-id": "au-4",
                    description:
                      "The system is configured to write audit logs to AWS CloudWatch, which leverages AWS S3 buckets for storage.  AWS S3 buckets have no practical storage limit; users are charged for the amount of space that is used. System logs are also collected and aggregated by Splunk w/ Enterprise Security (ES). Audit storage capacity in Splunk ES is sufficient to retain logs that are searchable for one year at the current indexing rate, in accordance with the AU-11 control.",
                  },
                  {
                    uuid: "8bb438fe-55e6-4242-89b6-2ebe4599212c",
                    "control-id": "au-6",
                    description:
                      "The application utilizes Splunk to generate security business application logic audit logs. Splunk contains a repository that monitors where application logic audit events are written, application modifications, application alerts and error messages, configuration changes, account creation, modification, deletion reading and printing of sensitive information from the system.\nSplunk gives real-time visibility into the AWS environment to review network traffic, bandwidth utilization rates, alert notifications, and border defense devices to determine anomalies no less often than once within a twenty-four (24) hour period and on demand, and generates alerts for technical personnel review and assessment. Utilizes Splunk to investigate suspicious activity or suspected violations on the application, report findings to administrators and designated personnel and take appropriate action. Use automated utilities to review audit records no less often than once every seventy-two (72) hours for unusual, unexpected, or suspicious behavior. Inspect administrator groups on demand but no less often than once every fourteen (14) days to ensure unauthorized administrator, system, and privileged application accounts have not been created. Perform manual reviews of system audit records randomly on demand but no less often than once every thirty (30) days. All the ifnromation is accessible for Portal and AWS Data Center administrators.",
                  },
                  {
                    uuid: "0e8606b1-e98e-4fc5-8f99-243a235dbc86",
                    "control-id": "au-6.1",
                    description:
                      "CMS utilizes Splunk to monitor the application's servers and devices. Splunk allows the CCIC to review logs, suspicious activity, and conduct investigations.",
                  },
                  {
                    uuid: "b2b03988-eecd-4b51-8559-57b312766a53",
                    "control-id": "au-6.3",
                    description:
                      "The application has implemented Splunk as an automated mechanism for review of user activities. Splunk aggregates server audit logs and network device logs to facilitate and comply with audit requirements. Logging is enabled for administrator and user account activities, failed and successful log-on, security policy modifications, use of administrator privileges, system shutdowns, reboots, errors and access authorizations. Splunk provides for automatic monitoring and unusual activity is investigated.",
                  },
                  {
                    uuid: "7048d47f-0c2a-48b3-ad1b-fe4a941bb708",
                    "control-id": "au-7",
                    description:
                      "Splunk allows ad-hoc searches on logs using Splunk interface. Data for the previous 365 days can be searched from within Splunk. Splunk is specifically designed to preserve audit record integrity.",
                  },
                  {
                    uuid: "4e9b9722-9993-4c1f-94d1-1d006b93c83f",
                    "control-id": "au-7.1",
                    description:
                      "The system uses Splunk to centrally maintain the audit logs. Splunk has the capability to drill down to event of interest to support after-the-fact investigations. Once configured all such log file are regularly aggregated in Splunk and available via a dashboard for further analysis and alert configuration.",
                  },
                  {
                    uuid: "4c6e3a46-b234-441b-9c1e-3a7ec01b35b1",
                    "control-id": "au-9",
                    description:
                      "Access to Splunk and its audit information data is restricted to designated Security Team staff through the use of Splunk account management tools and the EUA system.",
                  },
                  {
                    uuid: "ab649d75-f9f9-4deb-84e1-68733493babe",
                    "control-id": "au-11",
                    description:
                      "All log information is retained within Splunk for no less than 1 year. All audit records are maintained for at least 3 years. AWS IAM CloudWatch and CloudTrail maintains audit records in S3 storage indefinitely. EC2 compute instance logs are saved as indexed syslog information on the OC Splunk Indexer systems 1TB Data drives indefinitely.",
                  },
                  {
                    uuid: "c423f5bd-4f17-4c32-ae50-4b18d2c2d7d2",
                    "control-id": "ir-4.1",
                    description:
                      "Email alerts are generated by Splunk when an event occurs which are reviewed for the cause of the alert, its importance, and if the alert is a potential incident. An incident report is completed and stores this information on a restricted drive when potential incident has occurred.",
                  },
                  {
                    uuid: "a2d0cced-97fa-4bbd-acba-328e2d58f2a0",
                    "control-id": "ir-6.1",
                    description:
                      "Splunk is the automated tool used to correlate events that can be used to determine criteria involved to detect and report insider threats.",
                  },
                  {
                    uuid: "ce350681-622a-4e32-9a7a-4e8d96396151",
                    "control-id": "si-4.2",
                    description:
                      "Splunk is used as the centralized audit log and monitoring tool and is configured to alert security personnel of any suspicious or abnormal activity.",
                  },
                  {
                    uuid: "bf13bc48-74e0-4fbc-8ea5-834e12236417",
                    "control-id": "si-4.4",
                    description:
                      "Splunk is used as the centralized audit log and monitoring tool and is configured to alert security personnel of any suspicious or abnormal activity.",
                  },
                  {
                    uuid: "e448bad7-cf5a-4511-9db1-b7006c41f716",
                    "control-id": "si-4.5",
                    description:
                      "Splunk is configured to generate alerts when the following indications of compromise or potential comprise occurs:\n-Presence of malicious code -Unauthorized export of information -Signaling to an external information system -Potential intrusions.",
                  },
                  {
                    uuid: "c84a3fcd-be8d-43a2-b413-89d7b6ebd516",
                    "control-id": "si-4.16",
                    description:
                      "All information is sent to Splunk, which is a centralized SEIM system. Through crafted queries and searches across multiple indexes, security personnel can correlate information throughout every information system.",
                  },
                  {
                    uuid: "85e8040b-b582-4110-b26b-f07332f2071c",
                    "control-id": "si-7.7",
                    description:
                      "The system leverages Splunk in the operational environments to detect unauthorized security changes. Both Splunk and internal tools are used for logging security monitoring, audits and troubleshooting. Splunk includes specification of log types and source systems that are candidates for Splunk log capture and management.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 20,
  },
  {
    id: 76,
    title: "tenable nessus",
    description: "Tenable Nessus",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "14cb86f3-363b-40aa-a1a3-ad0236bd9437",
        metadata: {
          title: "Tenable Nessus",
          version: "unknown",
          published: "2021-09-04T02:25:31.115408+00:00",
          "last-modified": "2021-09-04T02:25:31.115411+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "cf68548d-20f8-4e12-9cc4-8752f0c32664",
            title: "Tenable Nessus",
            description: "Tenable Nessus",
            "control-implementations": [
              {
                uuid: "6d7442a0-c914-4e09-b480-ab18b8b4a937",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "361bc30e-32c2-448c-8854-253d0fa34380",
                    "control-id": "ca-7",
                    statements: [
                      {
                        uuid: "1e51bb0d-a35a-4d6e-8fa5-79912f55c637",
                        description:
                          "The Nessus scanner employs the United States Government Configuration Baseline (USGCB) STIG to define scanning metrics.",
                        "statement-id": "ca-7_smt.c",
                      },
                      {
                        uuid: "f04f41c6-cfb0-4f03-b6f6-3afd24ed2083",
                        description:
                          "Tenable Nessus is used to scan the network for unauthorized activity or anomalies. The Nessus tool is used continuously to evaluate security metrics. Nessus vulnerability scan frequency is no less than once every 72 hours.",
                        "statement-id": "ca-7_smt.d",
                      },
                      {
                        uuid: "9539fb44-3ecd-4492-8c6f-d2ad33b365e5",
                        description:
                          "When there is a significant change to the system, a Security Risk Assessment is performed to evaluate the state of the sytem security controls based on the change. Vulnerabilities discovered by the SRA or through pen-tests are tracked monthly by the system owner and ISSO as part of POA&M documented in CFACTS. CMS Cloud establishes baselines for the system and scans the system with Nessus when changes occur within the system to ensure compliance with established baselines",
                        "statement-id": "ca-7_smt.e",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "38c5bacd-317e-4aa9-a3dc-82aceba68c5f",
                    "control-id": "cm-6",
                    statements: [
                      {
                        uuid: "27529733-4969-414c-8bdd-3a154e7c4bac",
                        description:
                          "Tenable Nessus monitors the inventory of systems for malicious configuration changes.",
                        "statement-id": "cm-6_smt.d",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "03342dd1-d38d-47ac-8fba-2d860270364e",
                    "control-id": "cm-7.1",
                    statements: [
                      {
                        uuid: "71fecf03-4e78-4bbc-b19f-5565b9a050b3",
                        description:
                          "Tenable Nessus is used to perform automated scans of information systems at least once every seventy-two (72) hours to identify changes to functions, ports, protocols, and services.",
                        "statement-id": "cm-7.1_smt.b",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "1e329da1-04dc-4164-aacf-79a22be5dd2b",
                    "control-id": "cm-8.3",
                    statements: [
                      {
                        uuid: "e4e19544-89c3-40c4-9676-4db3c53f0252",
                        description:
                          "Nessus software vulnerability scans are performed weekly to identify any unauthorized system components (hardware, software, and firmware) on the information system environment. Should the scans detect any unauthorized components, system administrators immediately disable network access to the components and alert the Director of IT, as well as personnel identified in the system security plan, to begin an investigation to determine whether such components qualify as an incident or breach.",
                        "statement-id": "cm-8.3_smt.a",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "e5f6511c-c70a-4ef9-8217-560007fc1333",
                    "control-id": "ra-5",
                    statements: [
                      {
                        uuid: "7e3639cd-bba1-4bd1-934a-9baebd2195df",
                        description:
                          "Tenable Nessus is used to run scheduled vulnerability scans on all information systems at least once every seventy-two (72) hours or when new vulnerabiliites are identified that affect any system, whichever comes first. The Nessus application is updated through automated updates from Tenable.",
                        "statement-id": "ra-5_smt.a",
                      },
                    ],
                    description:
                      "Requirements are implemented as described in the included statements.",
                  },
                  {
                    uuid: "4d8c1f2e-cd94-4d30-a3aa-3c0b9903974f",
                    "control-id": "ra-5.1",
                    description:
                      "Vulnerability scanning updates are managed by the Application Developer's Security team,  automated through the use of an internal Nessus Security Center Update Server. The Nessus products are scheduled to poll the update server nightly to check for updates. Once updates have been received by the update server, an automated email is sent to the vulnerability management team with the current version number and any versions that have been retired.",
                  },
                  {
                    uuid: "b07b28c4-fb01-45b4-b0db-b9077ce74906",
                    "control-id": "ra-5.2",
                    description:
                      "Tenable Nessus is configured to update the database of known information system vulnerabilities no less often than every 72 hours, immediately prior to a new scan, and when new vulnerabilities are identified and reported.",
                  },
                  {
                    uuid: "c783530b-176e-4387-a182-a68d01fccd7c",
                    "control-id": "ra-5.3",
                    description:
                      "The Nessus vulnerability scanning tool contains reports that list all systems scanned and vulnerabilities found. The Nessus vulnerability scanning tool reports the list all systems scanned, the vulnerabilities scanned for as well as the vulnerabilities found.",
                  },
                  {
                    uuid: "9d34d291-0a16-436d-b305-aa82e2cbe1be",
                    "control-id": "ra-5.5",
                    description:
                      "Tenable supports privileged access authorization to operating system, telecommunications, and configuration components employing credentials that meet CMS authentication requirements.",
                  },
                  {
                    uuid: "dc3c79e0-f193-484e-8c1c-d4b86b214a90",
                    "control-id": "si-2.2",
                    description:
                      "CMS has implemented automated scanning mechanisms, using Nessus vulnerability scanner  that checks for compliance at least once every seventy-two (72) hours to determine the state of system components. The application team identifies, reports, and corrects information system flaws as needed. Flaw remediation requirements apply to all identified components for which a patch or work-around exists for each vendor-identified CVE/CWE identified vulnerability.",
                  },
                  {
                    uuid: "4faa7112-e5e5-4f0e-a8bd-94dfad877ac5",
                    "control-id": "si-7.1",
                    description:
                      "Tenable Security Center continuously monitors for the file integrity of system files, software and firmware including checks for the modification, deletion, and addition of unauthorized files.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 11,
  },
  {
    id: 77,
    title: "terraform",
    description: "Terraform",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "803425e6-24fb-482e-ac6e-beba69995c0f",
        metadata: {
          title: "Terraform",
          version: "unknown",
          published: "2022-02-23T16:28:26.941131+00:00",
          "last-modified": "2022-02-23T16:28:26.941139+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "b08de633-b30f-49d5-baa4-ab03090bc128",
            title: "Terraform",
            description: "Terraform",
            "control-implementations": [
              {
                uuid: "958e48fd-7048-46f4-930a-01c1def87ba1",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "a7afdaf0-cc2a-4c17-a9ec-427d0134875a",
                    "control-id": "ac-5",
                    description:
                      "These systems are configured either via the management console or via infrastructure as code using Terraform. DevOps member updates the code with a pull request, another team member then reviews and approves the changes, and Infrastructure changes are applied by Terraform.",
                  },
                  {
                    uuid: "fc74c98d-52da-4c9c-b547-963c840948d8",
                    "control-id": "ac-6.7",
                    description:
                      "Application IAM roles are managed by Terraform and are reviewed each time a deployment is completed.",
                  },
                  {
                    uuid: "6b70da9b-ce58-49a6-a11e-d3baae0d7488",
                    "control-id": "cm-1",
                    description:
                      "DevOps manages configurations within Terraform to manage infrastructure.",
                  },
                  {
                    uuid: "f4381b4b-3098-4ce8-8e23-8fe962995d13",
                    "control-id": "cm-2",
                    description:
                      "Infrastructure baseline configurations have been developed via Infrastructure as Code (Terraform) and therefore documented within version control (Github).",
                  },
                  {
                    uuid: "e64ed79a-0cee-4010-986f-3fa8ae99bd5e",
                    "control-id": "cm-2.1",
                    description:
                      "Infrastructure baseline configurations in Terraform are reviewed periodically (every 180 days High, 365 days Moderate), when configuration settings change and after major system updates.",
                  },
                  {
                    uuid: "89348f83-a936-4566-b558-b62a34ec6670",
                    "control-id": "cm-2.3",
                    description:
                      "By exclusively using Terraform to deploy systems and modify AWS settings, the system is able to access previous configurations from GitHub. Any rollback will be a Terraform code update inside Github.",
                  },
                  {
                    uuid: "1a48132a-7662-44dc-bb37-30ced23e9527",
                    "control-id": "cm-3",
                    description:
                      "All tickets that relate to either infrastructure changes via Terraform and/or Ansible, are subject to Github Pull Requests, with peer review and approval prior to being deployed into a development environment.",
                  },
                  {
                    uuid: "15ee456f-4899-4fb1-950b-c023c4c75f82",
                    "control-id": "cm-5",
                    description:
                      "All Infrastructure as Code (IaC) elements such as Terraform are maintained on GitHub with peer review and approval prior to being deployed.",
                  },
                  {
                    uuid: "ea0f9f02-7bd2-490c-84bc-4b90b2329499",
                    "control-id": "cm-6",
                    description:
                      "All configuration settings in the AWS infrastructure goes through Terraform scripts which are store in GitHub. Terraform scripts are baselined for every release and any changes to these scripts are required to go through change control and peer review process.",
                  },
                  {
                    uuid: "53e31686-0b1a-4502-b371-8b98a9127965",
                    "control-id": "cm-7.1",
                    description:
                      "A history of the system configuration, including all ports and protocols, is stored a Terraform state file in Amazon S3, and a record of all changes are tracked in Github.",
                  },
                  {
                    uuid: "74eb6884-bbfb-4332-bb3a-105530b1c384",
                    "control-id": "cm-7.4",
                    description:
                      "Software Inventories are updated in Terraform code on GitHub with every deployment.",
                  },
                  {
                    uuid: "f480925a-bea6-4a29-97ff-330fa07a364c",
                    "control-id": "cm-7.5",
                    description:
                      "Software Inventories are updated in Terraform code on GitHub with every deployment.",
                  },
                  {
                    uuid: "62007023-9d20-456c-9b2b-7510056311b4",
                    "control-id": "cm-8",
                    description:
                      "Terraform and Ansible are used to manage system inventory and deployments.",
                  },
                  {
                    uuid: "283ffba7-cd71-4370-b1de-12941b4643b3",
                    "control-id": "cm-8.5",
                    description:
                      "An record of all components deployed in AWS is contained in Terraform configurations, which are effectively audited against actual systems and settings upon deployment to each AWS environment. Each exiting instance and virtual machine (VM) is uniquely identified by resource identifier in AWS; each stack is identified by a unique Terraform stack ID. The IaC is built with Terraform which programmatically prevents duplication of existing infrastructure.",
                  },
                  {
                    uuid: "f3fd74c8-849c-48b6-9859-51a9b2e1b7da",
                    "control-id": "cp-10",
                    description:
                      "Reconstitution information is maintained as automated Terraform scripts (which are backed up in source control on Github) for each system component, along with documentation that is in the Contingency Plan.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 15,
  },
  {
    id: 78,
    title: "Trendmicro",
    description: "Trend Micro Deep Security",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "a1585ca3-0db7-4892-9977-ba3dca34bec7",
        metadata: {
          title: "Trend Micro Deep Security",
          version: "unknown",
          published: "2021-09-04T02:25:29.941619+00:00",
          "last-modified": "2021-09-04T02:25:29.941625+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "76c17387-9b6a-4b65-8809-47b0524ad525",
            title: "Trend Micro Deep Security",
            description: "Trend Micro Deep Security",
            "control-implementations": [
              {
                uuid: "691fa773-2336-4ce6-8ad8-39a82e157250",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "2ff82c7f-7622-436e-969c-4fc956ccb7ec",
                    "control-id": "cm-7.2",
                    description:
                      "The application cannot execute any software programs except those integrated into the application by design.\n\nSecurity is in place to prevent uploading and execution of unauthorized programs at the GSS Level.",
                  },
                  {
                    uuid: "1c980af1-ebe4-486d-8084-7dc2ce127501",
                    "control-id": "cm-7.4",
                    description:
                      "Unauthorized software/blacklisting results are searchable by the CMS Cybersecurity Integration Center (CCIC) via the GSS.\n\nThe GSS prevents unauthorized software from being executed via TrendMicro.",
                  },
                  {
                    uuid: "70e98fa0-60b5-478c-8e42-7ecfb43f0387",
                    "control-id": "cm-7.5",
                    description:
                      "Authorized software list is maintained by the CMS organization, and software installation is approved by the relevant personnel.",
                  },
                  {
                    uuid: "f08abf1a-250f-4c68-8226-54776bff297f",
                    "control-id": "sc-7",
                    description:
                      "Application teams configure Trend Micro to provide operating system level boundary protection.\n\na. Trend Micro provides continuous monitoring and the ability to block external sources of attack in real time.\n\nb. Trend Micro and Security Group settings at the AWS networking level provide boundary protection with logical separation between internal networks and the information system.\n\nc. Trend Micro provides information system connectivity to external networks through appropriately mediated managed interfaces.",
                  },
                  {
                    uuid: "e82148a8-5558-487e-be98-7c99c89801f3",
                    "control-id": "si-3",
                    description:
                      "All system components implement Trend Micro Deep Security for malicious code protection at information system entry and exit points to detect and eradicate malicious code.\n\nCCS configures Trend Micro to perform critical system file scans at least once every 12 hours, and full server scans are run every 72 hours.",
                  },
                  {
                    uuid: "5df693db-aa40-4e62-8d3a-f5e765fd782d",
                    "control-id": "si-3.1",
                    description:
                      "All malicious code protection mechanisms are centrally managed. This control is inherited from the CMS Cloud which utilizes Trend Micro for this functionality.",
                  },
                  {
                    uuid: "73d5e735-d1c8-4ad8-b94e-465678799a76",
                    "control-id": "si-3.2",
                    description:
                      "The Trend Micro suite obtains updates automatically, generally twwice daily.",
                  },
                  {
                    uuid: "9986a719-fb68-4917-a618-f36952defa3c",
                    "control-id": "si-4",
                    description:
                      "The HIDS system (Trend Micro) requires a client on each OS instance. Each client is designed to monitor all system activity and then forward the information from this activity to the central Trend Micro server. To accomplish this, the clients are configured with a public SSL certificate that is installed at the same time that the client is installed. Each client then connects to the built-in Apache server that the Trend Micro management server utilizes. Trend Micro clients deliberately do not use port 443 for SSL traffic so that they have a non-standard and easily identifiable (to infrastructure and security team members) port for communications.",
                  },
                  {
                    uuid: "2af46617-e4bb-4a2e-93ea-749f2d3e921d",
                    "control-id": "si-4.1",
                    description:
                      "This control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.",
                  },
                  {
                    uuid: "1a7bafa8-7682-484a-931e-44d81cb7ba5b",
                    "control-id": "si-4.2",
                    description:
                      "This control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.\n\nCCS configures the connection and collection of security systems into a system-view view.",
                  },
                  {
                    uuid: "41a524a8-4b34-4926-a4dd-fe7bbfa8dc81",
                    "control-id": "si-4.3",
                    description:
                      "The system relies on AWS infrastructure for employing automated tools to integrate Trend Micro intrusion detection and access control to rapidly respond to attacks and isolate components.",
                  },
                  {
                    uuid: "1ca1e798-da01-4b94-9bd5-34abfd4e4ac8",
                    "control-id": "si-4.4",
                    description:
                      "This control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.",
                  },
                  {
                    uuid: "cb4e6b13-948c-482a-9dfb-9f638427a2f7",
                    "control-id": "si-4.5",
                    description:
                      "This control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.\n\nAggregated alert information is searchable by the CMS Cybersecurity Integration Center (CCIC) via the GSS.",
                  },
                  {
                    uuid: "8a1daf2f-73a0-4aa5-8f64-1cc72d7f8f2d",
                    "control-id": "si-4.23",
                    description:
                      "CMS installed Intrusion Detection System (IDS) devices at network perimeter points and host-based IDS sensors on critical servers. Please refer to the CMS Technical Reference Architecture https://www.cms.gov/Research-Statistics-Data-and-Systems/CMS-Information",
                  },
                  {
                    uuid: "d291a652-0367-4c2c-a13c-9c53f77a09f2",
                    "control-id": "si-7",
                    description:
                      "This control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.",
                  },
                  {
                    uuid: "88a2da73-e6c9-4e52-a544-fb7efb9a252b",
                    "control-id": "si-7.1",
                    description:
                      "Daily integrity scans of the application are not performed.\n\nAll events are logged and analyzed. Control regarding scanning is inherited from AWS IaaS and PaaS cloud service provider.\n\nThis control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.",
                  },
                  {
                    uuid: "34df2d6d-b093-4c6a-8a3b-e436f3e4f885",
                    "control-id": "si-7.2",
                    description:
                      "This control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.",
                  },
                  {
                    uuid: "4234ce5b-590f-4b5d-863c-81f3fec0a804",
                    "control-id": "si-7.5",
                    description:
                      "This control is inherited from CMS Cloud, which utilizes Trend Micro and Splunk for this functionality.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 18,
  },
  {
    id: 79,
    title: "waf",
    description: "CMS Cloud Web Application Firewall",
    type: "software",
    catalog: 1,
    component_json: {
      "component-definition": {
        uuid: "043729bd-5d89-474f-945c-c0f9bda20f0f",
        metadata: {
          title: "WAF",
          version: "unknown",
          published: "2022-02-28T18:47:03.778528+00:00",
          "last-modified": "2022-02-28T18:47:03.778535+00:00",
          "oscal-version": "1.0.0",
        },
        components: [
          {
            type: "software",
            uuid: "b80e2812-cd26-4029-b37f-dc433455951b",
            title: "CMS Cloud Web Application Firewall",
            description: "CMS Cloud Web Application Firewall",
            "control-implementations": [
              {
                uuid: "01b4232d-a4a3-43fe-b0e4-8b3591c308c2",
                source:
                  "https://raw.githubusercontent.com/CMSgov/ars-machine-readable/main/3.1/oscal/json/CMS_ARS_3_1_catalog.json",
                description: "CMS_ARS_3_1",
                "implemented-requirements": [
                  {
                    uuid: "2f50621e-e420-4ae0-ac10-62334e80b9a3",
                    "control-id": "ac-3",
                    description:
                      "When attached to an access vector (Cloud Front Distribution, ALB, API Gateway), all public access to the system is filtered through the Web Application Firewall and benefits from its protection rules. The Web Application Firewall can enforce access requirements such as a cookie or token on inbound traffic. The CMS Cloud Web Application Firewall imposes layer 4 and 7 protections against denial of service attacks. WAF Management: Access to Web Application Firewall management system is controlled by AWS IAM and associated Multi-factor Authentication used to access management functions in the AWS system inherited from the FedRamp standards for the US regions and GovCloud.",
                  },
                  {
                    uuid: "61ae46d3-10ca-4198-84b0-7964f91a8d6e",
                    "control-id": "ac-4",
                    description:
                      "Users will access the API endpoints through Akamai where a Web Application Firewall (WAF) will filter malicious requests, denial of service attacks, and bad actors. The CMS CIO, CISO, and SOP have the authority to order the immediate termination and/or suspension of any interconnection that, in the judgment of the CMS officer and CMS Security Operations, present an unacceptable level of risk to the CMS enterprise and/or mission.",
                  },
                  {
                    uuid: "b22d34ba-7735-4e3f-9fea-f660a64672d4",
                    "control-id": "ac-17.3",
                    description:
                      "All externally-based incoming connections are routed through the web application firewall.",
                  },
                  {
                    uuid: "b36e02d3-74e1-4ee9-8186-f996a7b50e12",
                    "control-id": "au-3",
                    description:
                      "Detailed log records are available via the CMS Cloud Web Application Firewall. The logging system makes logs available via an AWS Firehose distribution into Splunk with S3 local backups. Logs include details of which rules are activated by traffic entering the system; date and time of the event; the component of the information system (e.g., software component, hardware component) where the event occurred; type of event; user/subject identity; and outcome (success or failure) of the event; execution of privileged functions.",
                  },
                  {
                    uuid: "13624838-fd14-4bcc-9b8b-033df7289266",
                    "control-id": "ca-3.3",
                    description:
                      "The CMS Cloud Web Application Firewall inspects and filters all public traffic to the system via its rules allowing the system to benefit from its protections.",
                  },
                  {
                    uuid: "d7a368b2-8861-41bc-9bb3-eebbf7e8c7fd",
                    "control-id": "ca-9",
                    description:
                      "For each access vector (Cloud Front Distribution, ALB, API Gateway), the Web Application Firewall provides advanced restrictions that rejects hostile traffic segmented from the inbound stream using a system of automated rules.  This can include internal web interconnects to the system. Internal connections are documented in JIRA for approval.",
                  },
                  {
                    uuid: "da184c1c-5264-467a-b3e9-b695d7263e5b",
                    "control-id": "ir-7.1",
                    description:
                      "Web Application Firewall (WAF) rules with alerts provide automated mechanisms to increase the availability of incident response-related information or support.",
                  },
                  {
                    uuid: "9009bc2f-898f-4d23-ae5b-12aa6b9960a6",
                    "control-id": "sc-5",
                    description:
                      "The CMS Cloud Web Application Firewall provides layer 4 Denial of Service Protections using the AWS Shield Advanced subsystem and layer 7 (web layer) denial of service protections using Web Application Firewall rules. The Web Application Firewall rejects traffic from addresses known to be associated with Denial of Service Attacks using the IP Reputation Managed rule which includes intelligence gathered across all AWS systems.",
                  },
                  {
                    uuid: "ca17a853-5630-4265-9043-50aa5777a566",
                    "control-id": "sc-7",
                    description:
                      "a. Application publicly available websites associated with application VPCs and IP white-listed, web-available tools within the VPC, are all filtered through CMS Web Application Firewall.\n\nb. Application Tools within the VPCs are accessed only via CMS Web Application Firewall and then through a access vector at the entry point of the VPC within the AWS intranet.  This access vector is only connected to systems and subnets which are intended to be internet accessible in the case of public websites.",
                  },
                  {
                    uuid: "9e45e192-dcb5-4db1-8117-45673104a0fd",
                    "control-id": "sc-7.3",
                    description:
                      "The CMS AWS Web Application Firewall policy defines and enforces limitations on external network connections. Load balancing with integrated WAF provides a single entry point for multiple web applications. These connections are secured via certificates or over TLS (with Okta credentials or JWT Tokens).",
                  },
                  {
                    uuid: "111bdf9b-fb21-4cda-abeb-280727c3c10e",
                    "control-id": "sc-7.4",
                    description:
                      "a. Managed interfaces: The management of CMS Cloud Web Application Firewall interfaces is through AWS and is inherited from and within the scope of the AWS FedRAMP accreditation of the AWS system for US regions and govcloud.\n\nb.  Traffic flow policy: Traffic flows in all cases through a deny first security group and is limited to only those traffic sources required for the service. The CMS Cloud Web Application Firewall adds additional restrictions and filters to this arrangement to limit sources of hostile traffic based on reputation of the source and deep inspection of the data sent.\n\nc. The CMS Cloud Web Application Firewall inherits cryptographic protections from TLS subsystems of the traffic vector (AWS API gateway, Application Load Balancer, Cloud Front).  These are within the scope of the AWS FedRAMP accreditation of the AWS system for US regions and govcloud. CMS requires public interfaces to operate using TLS (see accreditation for ALB and application).\n\nd. Documentation of traffic flow policy exceptions: All permissions and exceptions for traffic flow are documented in Jira and must be approved by CMS.\n\ne. The CMS Web Application Firewall team reviews exceptions and tuning parameters for the firewall for each system with the Application team specific to their traffic.",
                  },
                  {
                    uuid: "b377e6f7-7576-4571-9dde-3de12edc7fb6",
                    "control-id": "si-3",
                    description:
                      "The CMS Web Application Firewall reduce the possibility that malware or intrusions would succeed in reaching CMS resources and provide a secondary level of protection against SQL Injection attacks.",
                  },
                  {
                    uuid: "829b69f1-142a-493f-8c75-0793189110cf",
                    "control-id": "si-4",
                    description:
                      "All traffic entering the system from the public internet is inspected by a Web Application Firewall (WAF) service that detects and protects applications from advanced web application attacks to ensure uninterrupted availability.",
                  },
                  {
                    uuid: "642949f8-5cf8-4bbc-943d-e65fadbc3592",
                    "control-id": "si-10",
                    description:
                      "Web application firewall rules provide input filtering that help mitigate the risk of information entering the system without validation.",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    controls_count: 14,
  },
  { total_item_count: 20 },
];

global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

test("renders page", () => {
  render(
    <ProjectSetupSelectComponentsTemplate componentList={componentList} />,
    {
      wrapper: MemoryRouter,
    }
  );
  const h2 = screen.getByText("Select components for your system technologies");
  expect(h2).toBeInTheDocument();
  const tableHeader1 = screen.getByText("Component");
  expect(tableHeader1).toBeInTheDocument();
  const tableHeader2 = screen.getByText("Description");
  expect(tableHeader2).toBeInTheDocument();
  const tableHeader3 = screen.getByText("Controls");
  expect(tableHeader3).toBeInTheDocument();
  const link1 = screen.getByText("Back");
  expect(link1).toBeInTheDocument();
  const link2 = screen.getByText("Confirm");
  expect(link2).toBeInTheDocument();
});
