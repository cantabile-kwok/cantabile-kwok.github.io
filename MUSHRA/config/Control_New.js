// configure the test here
var TestConfig = {
  "TestName": "Prosody Controllability Test",
  "RateScalePng": "img/similar_scale.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": false,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "/web_service/beaqleJS_Service.php",
  "SupervisorContact": "",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 10,
  "RequireMaxRating": false,
  "AudioRoot": "",
   "Testsets":[
       {
    "Name": "LJ050-0016-required-d0",
    "TestID": "control_1",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0016_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0016-required-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0016-required-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0016-required-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0016-required-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0016-required-d0-4.wav"
    }
},
{
    "Name": "LJ050-0021-assassination-d0",
    "TestID": "control_2",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0021_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0021-assassination-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0021-assassination-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0021-assassination-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0021-assassination-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0021-assassination-d0-4.wav"
    }
},
{
    "Name": "LJ050-0032-discipline-d0",
    "TestID": "control_3",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0032_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0032-discipline-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0032-discipline-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0032-discipline-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0032-discipline-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0032-discipline-d0-4.wav"
    }
},
{
    "Name": "LJ050-0038-president-d0",
    "TestID": "control_4",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0038_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0038-president-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0038-president-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0038-president-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0038-president-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0038-president-d0-4.wav"
    }
},
{
    "Name": "LJ050-0043-embarked-d0",
    "TestID": "control_5",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0043-embarked-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0043-embarked-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0043-embarked-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0043-embarked-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0043-embarked-d0-4.wav"
    }
},
{
    "Name": "LJ050-0046-corporation-d0",
    "TestID": "control_6",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0046_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0046-corporation-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0046-corporation-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0046-corporation-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0046-corporation-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0046-corporation-d0-4.wav"
    }
},
{
    "Name": "LJ050-0052-investigation-d0",
    "TestID": "control_7",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0052_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0052-investigation-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0052-investigation-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0052-investigation-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0052-investigation-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0052-investigation-d0-4.wav"
    }
},
{
    "Name": "LJ050-0054-assassination-d0",
    "TestID": "control_8",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0054_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0054-assassination-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0054-assassination-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0054-assassination-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0054-assassination-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0054-assassination-d0-4.wav"
    }
},
{
    "Name": "LJ050-0071-commission-d0",
    "TestID": "control_9",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0071-commission-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0071-commission-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0071-commission-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0071-commission-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0071-commission-d0-4.wav"
    }
},
{
    "Name": "LJ050-0087-evaluation-d0",
    "TestID": "control_10",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0087-evaluation-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0087-evaluation-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0087-evaluation-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0087-evaluation-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0087-evaluation-d0-4.wav"
    }
},
{
    "Name": "LJ050-0104-conviction-d0",
    "TestID": "control_11",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0104_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0104-conviction-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0104-conviction-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0104-conviction-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0104-conviction-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0104-conviction-d0-4.wav"
    }
},
{
    "Name": "LJ050-0120-leadership-d0",
    "TestID": "control_12",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0120_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0120-leadership-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0120-leadership-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0120-leadership-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0120-leadership-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0120-leadership-d0-4.wav"
    }
},
{
    "Name": "LJ050-0109-recognized-d0",
    "TestID": "control_13",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0109_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0109-recognized-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0109-recognized-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0109-recognized-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0109-recognized-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0109-recognized-d0-4.wav"
    }
},
{
    "Name": "LJ050-0140-testified-d0",
    "TestID": "control_14",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0140-testified-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0140-testified-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0140-testified-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0140-testified-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0140-testified-d0-4.wav"
    }
},
{
    "Name": "LJ050-0142-information-d0",
    "TestID": "control_15",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0142-information-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0142-information-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0142-information-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0142-information-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0142-information-d0-4.wav"
    }
},
{
    "Name": "LJ050-0142-request-d0",
    "TestID": "control_16",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0142-request-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0142-request-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0142-request-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0142-request-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0142-request-d0-4.wav"
    }
},
{
    "Name": "LJ050-0150-obsolete-d0",
    "TestID": "control_17",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0150_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0150-obsolete-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0150-obsolete-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0150-obsolete-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0150-obsolete-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0150-obsolete-d0-4.wav"
    }
},
{
    "Name": "LJ050-0156-equipment-d0",
    "TestID": "control_18",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0156-equipment-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0156-equipment-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0156-equipment-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0156-equipment-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0156-equipment-d0-4.wav"
    }
},
{
    "Name": "LJ050-0173-contemplated-d0",
    "TestID": "control_19",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0173-contemplated-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0173-contemplated-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0173-contemplated-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0173-contemplated-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0173-contemplated-d0-4.wav"
    }
},
{
    "Name": "LJ050-0181-innovation-d0",
    "TestID": "control_20",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0181_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0181-innovation-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0181-innovation-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0181-innovation-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0181-innovation-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0181-innovation-d0-4.wav"
    }
},
{
    "Name": "LJ050-0233-assassination-d0",
    "TestID": "control_21",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0233_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0233-assassination-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0233-assassination-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0233-assassination-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0233-assassination-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0233-assassination-d0-4.wav"
    }
},
{
    "Name": "LJ050-0275-assassination-d0",
    "TestID": "control_22",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0275_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0275-assassination-d0-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0275-assassination-d0-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0275-assassination-d0-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0275-assassination-d0-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0275-assassination-d0-4.wav"
    }
},
{
    "Name": "LJ050-0022-description-d1",
    "TestID": "control_23",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0022_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0022-description-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0022-description-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0022-description-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0022-description-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0022-description-d1-4.wav"
    }
},
{
    "Name": "LJ050-0022-preparation-d1",
    "TestID": "control_24",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0022_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0022-preparation-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0022-preparation-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0022-preparation-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0022-preparation-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0022-preparation-d1-4.wav"
    }
},
{
    "Name": "LJ050-0028-organization-d1",
    "TestID": "control_25",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0028_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0028-organization-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0028-organization-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0028-organization-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0028-organization-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0028-organization-d1-4.wav"
    }
},
{
    "Name": "LJ050-0040-evaluate-d1",
    "TestID": "control_26",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0040_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0040-evaluate-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0040-evaluate-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0040-evaluate-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0040-evaluate-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0040-evaluate-d1-4.wav"
    }
},
{
    "Name": "LJ050-0044-operation-d1",
    "TestID": "control_27",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0044_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0044-operation-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0044-operation-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0044-operation-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0044-operation-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0044-operation-d1-4.wav"
    }
},
{
    "Name": "LJ050-0056-circulated-d1",
    "TestID": "control_28",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0056_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0056-circulated-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0056-circulated-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0056-circulated-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0056-circulated-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0056-circulated-d1-4.wav"
    }
},
{
    "Name": "LJ050-0069-communist-d1",
    "TestID": "control_29",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0069_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0069-communist-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0069-communist-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0069-communist-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0069-communist-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0069-communist-d1-4.wav"
    }
},
{
    "Name": "LJ050-0082-embarrassment-d1",
    "TestID": "control_30",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0082-embarrassment-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0082-embarrassment-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0082-embarrassment-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0082-embarrassment-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0082-embarrassment-d1-4.wav"
    }
},
{
    "Name": "LJ050-0090-restrictive-d1",
    "TestID": "control_31",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0090_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0090-restrictive-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0090-restrictive-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0090-restrictive-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0090-restrictive-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0090-restrictive-d1-4.wav"
    }
},
{
    "Name": "LJ050-0098-determination-d1",
    "TestID": "control_32",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0098_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0098-determination-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0098-determination-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0098-determination-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0098-determination-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0098-determination-d1-4.wav"
    }
},
{
    "Name": "LJ050-0108-information-d1",
    "TestID": "control_33",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0108_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0108-information-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0108-information-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0108-information-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0108-information-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0108-information-d1-4.wav"
    }
},
{
    "Name": "LJ050-0109-assassination-d1",
    "TestID": "control_34",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0109_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0109-assassination-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0109-assassination-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0109-assassination-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0109-assassination-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0109-assassination-d1-4.wav"
    }
},
{
    "Name": "LJ050-0111-information-d1",
    "TestID": "control_35",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0111_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0111-information-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0111-information-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0111-information-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0111-information-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0111-information-d1-4.wav"
    }
},
{
    "Name": "LJ050-0117-jurisdiction-d1",
    "TestID": "control_36",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0117_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0117-jurisdiction-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0117-jurisdiction-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0117-jurisdiction-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0117-jurisdiction-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0117-jurisdiction-d1-4.wav"
    }
},
{
    "Name": "LJ050-0141-enforcement-d1",
    "TestID": "control_37",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0141-enforcement-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0141-enforcement-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0141-enforcement-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0141-enforcement-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0141-enforcement-d1-4.wav"
    }
},
{
    "Name": "LJ050-0174-participation-d1",
    "TestID": "control_38",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0174_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0174-participation-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0174-participation-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0174-participation-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0174-participation-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0174-participation-d1-4.wav"
    }
},
{
    "Name": "LJ050-0183-metropolitan-d1",
    "TestID": "control_39",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0183_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0183-metropolitan-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0183-metropolitan-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0183-metropolitan-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0183-metropolitan-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0183-metropolitan-d1-4.wav"
    }
},
{
    "Name": "LJ050-0190-communicated-d1",
    "TestID": "control_40",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0190_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0190-communicated-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0190-communicated-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0190-communicated-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0190-communicated-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0190-communicated-d1-4.wav"
    }
},
{
    "Name": "LJ050-0196-assassination-d1",
    "TestID": "control_41",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0196_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0196-assassination-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0196-assassination-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0196-assassination-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0196-assassination-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0196-assassination-d1-4.wav"
    }
},
{
    "Name": "LJ050-0215-overworked-d1",
    "TestID": "control_42",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0215_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0215-overworked-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0215-overworked-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0215-overworked-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0215-overworked-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0215-overworked-d1-4.wav"
    }
},
{
    "Name": "LJ050-0231-assassination-d1",
    "TestID": "control_43",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0231_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0231-assassination-d1-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0231-assassination-d1-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0231-assassination-d1-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0231-assassination-d1-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0231-assassination-d1-4.wav"
    }
},
{
    "Name": "LJ050-0041-investigative-d2",
    "TestID": "control_44",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0041_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0041-investigative-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0041-investigative-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0041-investigative-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0041-investigative-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0041-investigative-d2-4.wav"
    }
},
{
    "Name": "LJ050-0057-information-d2",
    "TestID": "control_45",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0057_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0057-information-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0057-information-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0057-information-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0057-information-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0057-information-d2-4.wav"
    }
},
{
    "Name": "LJ050-0061-government-d2",
    "TestID": "control_46",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0061_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0061-government-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0061-government-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0061-government-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0061-government-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0061-government-d2-4.wav"
    }
},
{
    "Name": "LJ050-0078-enforcement-d2",
    "TestID": "control_47",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0078_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0078-enforcement-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0078-enforcement-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0078-enforcement-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0078-enforcement-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0078-enforcement-d2-4.wav"
    }
},
{
    "Name": "LJ050-0082-information-d2",
    "TestID": "control_48",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0082-information-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0082-information-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0082-information-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0082-information-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0082-information-d2-4.wav"
    }
},
{
    "Name": "LJ050-0083-demonstrated-d2",
    "TestID": "control_49",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0083_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0083-demonstrated-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0083-demonstrated-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0083-demonstrated-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0083-demonstrated-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0083-demonstrated-d2-4.wav"
    }
},
{
    "Name": "LJ050-0084-complaint-d2",
    "TestID": "control_50",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0084-complaint-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0084-complaint-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0084-complaint-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0084-complaint-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0084-complaint-d2-4.wav"
    }
},
{
    "Name": "LJ050-0099-adequate-d2",
    "TestID": "control_51",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0099-adequate-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0099-adequate-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0099-adequate-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0099-adequate-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0099-adequate-d2-4.wav"
    }
},
{
    "Name": "LJ050-0111-collection-d2",
    "TestID": "control_52",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0111_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0111-collection-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0111-collection-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0111-collection-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0111-collection-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0111-collection-d2-4.wav"
    }
},
{
    "Name": "LJ050-0132-commission-d2",
    "TestID": "control_53",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0132-commission-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0132-commission-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0132-commission-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0132-commission-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0132-commission-d2-4.wav"
    }
},
{
    "Name": "LJ050-0139-enforcement-d2",
    "TestID": "control_54",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0139_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0139-enforcement-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0139-enforcement-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0139-enforcement-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0139-enforcement-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0139-enforcement-d2-4.wav"
    }
},
{
    "Name": "LJ050-0152-department-d2",
    "TestID": "control_55",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0152_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0152-department-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0152-department-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0152-department-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0152-department-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0152-department-d2-4.wav"
    }
},
{
    "Name": "LJ050-0158-protective-d2",
    "TestID": "control_56",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0158-protective-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0158-protective-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0158-protective-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0158-protective-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0158-protective-d2-4.wav"
    }
},
{
    "Name": "LJ050-0170-jurisdiction-d2",
    "TestID": "control_57",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0170_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0170-jurisdiction-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0170-jurisdiction-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0170-jurisdiction-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0170-jurisdiction-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0170-jurisdiction-d2-4.wav"
    }
},
{
    "Name": "LJ050-0185-anticipated-d2",
    "TestID": "control_58",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0185_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0185-anticipated-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0185-anticipated-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0185-anticipated-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0185-anticipated-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0185-anticipated-d2-4.wav"
    }
},
{
    "Name": "LJ050-0194-application-d2",
    "TestID": "control_59",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0194_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0194-application-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0194-application-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0194-application-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0194-application-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0194-application-d2-4.wav"
    }
},
{
    "Name": "LJ050-0224-proposed-d2",
    "TestID": "control_60",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0224_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0224-proposed-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0224-proposed-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0224-proposed-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0224-proposed-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0224-proposed-d2-4.wav"
    }
},
{
    "Name": "LJ050-0227-recommended-d2",
    "TestID": "control_61",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0227_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0227-recommended-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0227-recommended-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0227-recommended-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0227-recommended-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0227-recommended-d2-4.wav"
    }
},
{
    "Name": "LJ050-0247-provide-d2",
    "TestID": "control_62",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0247_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0247-provide-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0247-provide-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0247-provide-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0247-provide-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0247-provide-d2-4.wav"
    }
},
{
    "Name": "LJ050-0258-sophisticated-d2",
    "TestID": "control_63",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0258_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0258-sophisticated-d2-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0258-sophisticated-d2-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0258-sophisticated-d2-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0258-sophisticated-d2-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0258-sophisticated-d2-4.wav"
    }
},
{
    "Name": "LJ050-0016-sufficient-d3",
    "TestID": "control_64",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0016_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0016-sufficient-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0016-sufficient-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0016-sufficient-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0016-sufficient-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0016-sufficient-d3-4.wav"
    }
},
{
    "Name": "LJ050-0020-commission-d3",
    "TestID": "control_65",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0020_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0020-commission-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0020-commission-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0020-commission-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0020-commission-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0020-commission-d3-4.wav"
    }
},
{
    "Name": "LJ050-0031-highest-d3",
    "TestID": "control_66",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0031_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0031-highest-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0031-highest-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0031-highest-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0031-highest-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0031-highest-d3-4.wav"
    }
},
{
    "Name": "LJ050-0043-protective-d3",
    "TestID": "control_67",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0043-protective-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0043-protective-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0043-protective-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0043-protective-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0043-protective-d3-4.wav"
    }
},
{
    "Name": "LJ050-0047-psychiatric-d3",
    "TestID": "control_68",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0047_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0047-psychiatric-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0047-psychiatric-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0047-psychiatric-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0047-psychiatric-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0047-psychiatric-d3-4.wav"
    }
},
{
    "Name": "LJ050-0084-expressed-d3",
    "TestID": "control_69",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0084-expressed-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0084-expressed-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0084-expressed-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0084-expressed-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0084-expressed-d3-4.wav"
    }
},
{
    "Name": "LJ050-0113-describe-d3",
    "TestID": "control_70",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0113_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0113-describe-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0113-describe-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0113-describe-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0113-describe-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0113-describe-d3-4.wav"
    }
},
{
    "Name": "LJ050-0118-evaluate-d3",
    "TestID": "control_71",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0118_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0118-evaluate-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0118-evaluate-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0118-evaluate-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0118-evaluate-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0118-evaluate-d3-4.wav"
    }
},
{
    "Name": "LJ050-0127-negotiate-d3",
    "TestID": "control_72",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0127_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0127-negotiate-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0127-negotiate-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0127-negotiate-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0127-negotiate-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0127-negotiate-d3-4.wav"
    }
},
{
    "Name": "LJ050-0154-efficient-d3",
    "TestID": "control_73",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0154_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0154-efficient-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0154-efficient-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0154-efficient-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0154-efficient-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0154-efficient-d3-4.wav"
    }
},
{
    "Name": "LJ050-0174-protective-d3",
    "TestID": "control_74",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0174_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0174-protective-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0174-protective-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0174-protective-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0174-protective-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0174-protective-d3-4.wav"
    }
},
{
    "Name": "LJ050-0185-cooperation-d3",
    "TestID": "control_75",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0185_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0185-cooperation-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0185-cooperation-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0185-cooperation-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0185-cooperation-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0185-cooperation-d3-4.wav"
    }
},
{
    "Name": "LJ050-0196-inspection-d3",
    "TestID": "control_76",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0196_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0196-inspection-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0196-inspection-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0196-inspection-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0196-inspection-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0196-inspection-d3-4.wav"
    }
},
{
    "Name": "LJ050-0206-accomplish-d3",
    "TestID": "control_77",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0206-accomplish-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0206-accomplish-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0206-accomplish-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0206-accomplish-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0206-accomplish-d3-4.wav"
    }
},
{
    "Name": "LJ050-0221-presented-d3",
    "TestID": "control_78",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0221_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0221-presented-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0221-presented-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0221-presented-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0221-presented-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0221-presented-d3-4.wav"
    }
},
{
    "Name": "LJ050-0226-intensive-d3",
    "TestID": "control_79",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0226_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0226-intensive-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0226-intensive-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0226-intensive-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0226-intensive-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0226-intensive-d3-4.wav"
    }
},
{
    "Name": "LJ050-0247-determine-d3",
    "TestID": "control_80",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0247_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0247-determine-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0247-determine-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0247-determine-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0247-determine-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0247-determine-d3-4.wav"
    }
},
{
    "Name": "LJ050-0268-memorandum-d3",
    "TestID": "control_81",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0268_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0268-memorandum-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0268-memorandum-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0268-memorandum-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0268-memorandum-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0268-memorandum-d3-4.wav"
    }
},
{
    "Name": "LJ050-0207-complain-d3",
    "TestID": "control_82",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0207_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0207-complain-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0207-complain-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0207-complain-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0207-complain-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0207-complain-d3-4.wav"
    }
},
{
    "Name": "LJ050-0206-suggest-d3",
    "TestID": "control_83",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0206-suggest-d3-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0206-suggest-d3-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0206-suggest-d3-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0206-suggest-d3-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0206-suggest-d3-4.wav"
    }
},
{
    "Name": "LJ050-0017-supervision-d4",
    "TestID": "control_84",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0017_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0017-supervision-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0017-supervision-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0017-supervision-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0017-supervision-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0017-supervision-d4-4.wav"
    }
},
{
    "Name": "LJ050-0021-improvement-d4",
    "TestID": "control_85",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0021_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0021-improvement-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0021-improvement-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0021-improvement-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0021-improvement-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0021-improvement-d4-4.wav"
    }
},
{
    "Name": "LJ050-0029-comprehensive-d4",
    "TestID": "control_86",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0029_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0029-comprehensive-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0029-comprehensive-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0029-comprehensive-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0029-comprehensive-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0029-comprehensive-d4-4.wav"
    }
},
{
    "Name": "LJ050-0032-dedication-d4",
    "TestID": "control_87",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0032_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0032-dedication-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0032-dedication-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0032-dedication-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0032-dedication-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0032-dedication-d4-4.wav"
    }
},
{
    "Name": "LJ050-0036-consistent-d4",
    "TestID": "control_88",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0036_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0036-consistent-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0036-consistent-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0036-consistent-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0036-consistent-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0036-consistent-d4-4.wav"
    }
},
{
    "Name": "LJ050-0039-recipient-d4",
    "TestID": "control_89",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0039_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0039-recipient-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0039-recipient-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0039-recipient-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0039-recipient-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0039-recipient-d4-4.wav"
    }
},
{
    "Name": "LJ050-0049-specialist-d4",
    "TestID": "control_90",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0049_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0049-specialist-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0049-specialist-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0049-specialist-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0049-specialist-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0049-specialist-d4-4.wav"
    }
},
{
    "Name": "LJ050-0064-government-d4",
    "TestID": "control_91",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0064_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0064-government-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0064-government-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0064-government-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0064-government-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0064-government-d4-4.wav"
    }
},
{
    "Name": "LJ050-0074-emphasized-d4",
    "TestID": "control_92",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0074-emphasized-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0074-emphasized-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0074-emphasized-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0074-emphasized-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0074-emphasized-d4-4.wav"
    }
},
{
    "Name": "LJ050-0074-information-d4",
    "TestID": "control_93",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0074-information-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0074-information-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0074-information-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0074-information-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0074-information-d4-4.wav"
    }
},
{
    "Name": "LJ050-0074-furnished-d4",
    "TestID": "control_94",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0074-furnished-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0074-furnished-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0074-furnished-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0074-furnished-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0074-furnished-d4-4.wav"
    }
},
{
    "Name": "LJ050-0076-aggravated-d4",
    "TestID": "control_95",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0076_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0076-aggravated-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0076-aggravated-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0076-aggravated-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0076-aggravated-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0076-aggravated-d4-4.wav"
    }
},
{
    "Name": "LJ050-0099-experimentation-d4",
    "TestID": "control_96",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0099-experimentation-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0099-experimentation-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0099-experimentation-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0099-experimentation-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0099-experimentation-d4-4.wav"
    }
},
{
    "Name": "LJ050-0123-investigative-d4",
    "TestID": "control_97",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0123_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0123-investigative-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0123-investigative-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0123-investigative-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0123-investigative-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0123-investigative-d4-4.wav"
    }
},
{
    "Name": "LJ050-0129-concentration-d4",
    "TestID": "control_98",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0129_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0129-concentration-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0129-concentration-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0129-concentration-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0129-concentration-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0129-concentration-d4-4.wav"
    }
},
{
    "Name": "LJ050-0167-coordinated-d4",
    "TestID": "control_99",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0167_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0167-coordinated-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0167-coordinated-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0167-coordinated-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0167-coordinated-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0167-coordinated-d4-4.wav"
    }
},
{
    "Name": "LJ050-0175-assassination-d4",
    "TestID": "control_100",
    "Files": {
        "Reference": "audio/Control_new/GT/LJ050-0175_gen.wav",
        "1": "audio/Control_new/synthesized/LJ050-0175-assassination-d4-0.wav",
        "2": "audio/Control_new/synthesized/LJ050-0175-assassination-d4-1.wav",
        "3": "audio/Control_new/synthesized/LJ050-0175-assassination-d4-2.wav",
        "4": "audio/Control_new/synthesized/LJ050-0175-assassination-d4-3.wav",
        "5": "audio/Control_new/synthesized/LJ050-0175-assassination-d4-4.wav"
    }
},
   ]
}
