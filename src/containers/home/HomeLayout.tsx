import {
  Container,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  TabProps,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import InterviewSettingsForm from "./InterviewSettingsForm";
import JobDetailsForm from "./JobDetailsForm";
import RequisitionForm from "./RequisitionDetailsForm";
import DisplayCard from "./PreviewCard";
import { useState } from "react";
import {
  IRequisitionDetails,
  IJobDetails,
  IInterViewSettings,
} from "../../interface/forms";

const CustomTab: React.FC<TabProps> = ({ children, ...props }) => {
  return (
    <Tab p="1rem" fontFamily="Poppins" {...props}>
      {children}
    </Tab>
  );
};

const HomeLayout = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [requisitionDetails, setRequisitionDetails] =
    useState<IRequisitionDetails>({
      requisitionTitle: "",
      noOfOpenings: 0,
      urgency: "",
      gender: "",
    });
  const [jobDetails, setJobDetails] = useState<IJobDetails>({
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
    jobPosition: "",
  });
  const [interviewSettings, setInterviewSettings] =
    useState<IInterViewSettings>({
      interviewMode: "",
      interviewDuration: "",
      interviewLanguage: "",
    });

  const handleTabsChange = (index: number) => {
    console.log("index -->", index);
    setTabIndex(index);

    console.log("tabIndex -->", tabIndex);
  };
  return (
    <Box w="100%">
      <Container maxW="1200px">
        <Heading fontFamily="Poppins" fontSize="1.5rem" my="2rem">
          Create Candidate Requisition
        </Heading>
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList>
            <CustomTab>Requisition Details</CustomTab>
            <CustomTab>Job Details</CustomTab>
            <CustomTab>Interview Settings</CustomTab>
          </TabList>
          <Grid display="grid" gridTemplateColumns="3fr 2fr" gap="24px">
            <TabPanels>
              <TabPanel>
                <RequisitionForm
                  handleTabsChange={handleTabsChange}
                  setRequisitionDetails={setRequisitionDetails}
                />
              </TabPanel>
              <TabPanel>
                <JobDetailsForm
                  handleTabsChange={handleTabsChange}
                  setJobDetails={setJobDetails}
                />
              </TabPanel>
              <TabPanel>
                <InterviewSettingsForm
                  setInterviewSettings={setInterviewSettings}
                />
              </TabPanel>
            </TabPanels>
            <DisplayCard
              requesitionDetails={requisitionDetails}
              jobDetails={jobDetails}
              interviewSettings={interviewSettings}
            />
          </Grid>
        </Tabs>
      </Container>
    </Box>
  );
};

export default HomeLayout;
