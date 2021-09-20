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
            "Name": "The <font color='#FF0000'>commission</font> recommends that the secretary of the treasury appoint a special assistant with the responsibility of supervising the service. ",
            "TestID": "control_1",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0015_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0015-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0015-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0015-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0015-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0015-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that the secretary of the treasury <font color='#FF0000'>appoint</font> a special assistant with the responsibility of supervising the service. ",
            "TestID": "control_2",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0015_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0015-appoint-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0015-appoint-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0015-appoint-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0015-appoint-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0015-appoint-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that the secretary of the treasury appoint a special <font color='#FF0000'>assistant</font> with the responsibility of supervising the service. ",
            "TestID": "control_3",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0015_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0015-assistant-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0015-assistant-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0015-assistant-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0015-assistant-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0015-assistant-d4-4_gen.wav"
            }
        },
        {
            "Name": "This special <font color='#FF0000'>assistant</font> should be required to have sufficient stature and experience in law enforcement, intelligence, or allied fields ",
            "TestID": "control_4",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0016_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0016-assistant-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0016-assistant-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0016-assistant-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0016-assistant-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0016-assistant-d4-4_gen.wav"
            }
        },
        {
            "Name": "This special assistant should be <font color='#FF0000'>required</font> to have sufficient stature and experience in law enforcement, intelligence, or allied fields ",
            "TestID": "control_5",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0016_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0016-required-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0016-required-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0016-required-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0016-required-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0016-required-d0-4_gen.wav"
            }
        },
        {
            "Name": "This special assistant should be required to have <font color='#FF0000'>sufficient</font> stature and experience in law enforcement, intelligence, or allied fields ",
            "TestID": "control_6",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0016_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0016-sufficient-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0016-sufficient-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0016-sufficient-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0016-sufficient-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0016-sufficient-d3-4_gen.wav"
            }
        },
        {
            "Name": "This special assistant should be required to have sufficient stature and experience in law <font color='#FF0000'>enforcement</font>, intelligence, or allied fields ",
            "TestID": "control_7",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0016_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0016-enforcement-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0016-enforcement-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0016-enforcement-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0016-enforcement-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0016-enforcement-d3-4_gen.wav"
            }
        },
        {
            "Name": "This special assistant should be required to have sufficient stature and experience in law enforcement, intelligence, or <font color='#FF0000'>allied</font> fields ",
            "TestID": "control_8",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0016_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0016-allied-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0016-allied-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0016-allied-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0016-allied-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0016-allied-d4-4_gen.wav"
            }
        },
        {
            "Name": "To be able to <font color='#FF0000'>provide</font> effective continuing supervision ",
            "TestID": "control_9",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0017_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0017-provide-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0017-provide-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0017-provide-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0017-provide-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0017-provide-d2-4_gen.wav"
            }
        },
        {
            "Name": "To be able to provide <font color='#FF0000'>effective</font> continuing supervision ",
            "TestID": "control_10",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0017_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0017-effective-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0017-effective-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0017-effective-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0017-effective-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0017-effective-d3-4_gen.wav"
            }
        },
        {
            "Name": "To be able to provide effective continuing <font color='#FF0000'>supervision</font> ",
            "TestID": "control_11",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0017_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0017-supervision-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0017-supervision-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0017-supervision-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0017-supervision-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0017-supervision-d4-4_gen.wav"
            }
        },
        {
            "Name": "And to keep the secretary fully <font color='#FF0000'>informed</font> regarding all significant developments relating to presidential protection. ",
            "TestID": "control_12",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0018_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0018-informed-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0018-informed-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0018-informed-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0018-informed-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0018-informed-d4-4_gen.wav"
            }
        },
        {
            "Name": "And to keep the secretary fully informed regarding all <font color='#FF0000'>significant</font> developments relating to presidential protection. ",
            "TestID": "control_13",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0018_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0018-significant-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0018-significant-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0018-significant-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0018-significant-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0018-significant-d3-4_gen.wav"
            }
        },
        {
            "Name": "And to keep the secretary fully informed regarding all significant developments relating to presidential <font color='#FF0000'>protection</font>. ",
            "TestID": "control_14",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0018_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0018-protection-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0018-protection-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0018-protection-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0018-protection-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0018-protection-d0-4_gen.wav"
            }
        },
        {
            "Name": "This <font color='#FF0000'>report</font> has already pointed out several respects ",
            "TestID": "control_15",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0019_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0019-report-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0019-report-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0019-report-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0019-report-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0019-report-d0-4_gen.wav"
            }
        },
        {
            "Name": "This report has already <font color='#FF0000'>pointed</font> out several respects ",
            "TestID": "control_16",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0019_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0019-pointed-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0019-pointed-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0019-pointed-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0019-pointed-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0019-pointed-d0-4_gen.wav"
            }
        },
        {
            "Name": "In which the <font color='#FF0000'>commission</font> believes that the secret service has operated with insufficient planning or control. ",
            "TestID": "control_17",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0020_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0020-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0020-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0020-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0020-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0020-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "In which the commission believes that the <font color='#FF0000'>secret</font> service has operated with insufficient planning or control. ",
            "TestID": "control_18",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0020_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0020-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0020-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0020-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0020-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0020-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "In which the commission believes that the secret service has <font color='#FF0000'>operated</font> with insufficient planning or control. ",
            "TestID": "control_19",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0020_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0020-operated-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0020-operated-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0020-operated-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0020-operated-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0020-operated-d4-4_gen.wav"
            }
        },
        {
            "Name": "In which the commission believes that the secret service has operated with <font color='#FF0000'>insufficient</font> planning or control. ",
            "TestID": "control_20",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0020_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0020-insufficient-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0020-insufficient-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0020-insufficient-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0020-insufficient-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0020-insufficient-d3-4_gen.wav"
            }
        },
        {
            "Name": "Actions by the service since the <font color='#FF0000'>assassination</font> indicate its awareness of the necessity for substantial improvement in its administration. ",
            "TestID": "control_21",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0021_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0021-assassination-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0021-assassination-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0021-assassination-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0021-assassination-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0021-assassination-d0-4_gen.wav"
            }
        },
        {
            "Name": "Actions by the service since the assassination <font color='#FF0000'>indicate</font> its awareness of the necessity for substantial improvement in its administration. ",
            "TestID": "control_22",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0021_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0021-indicate-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0021-indicate-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0021-indicate-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0021-indicate-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0021-indicate-d3-4_gen.wav"
            }
        },
        {
            "Name": "Actions by the service since the assassination indicate its awareness of the necessity for substantial <font color='#FF0000'>improvement</font> in its administration. ",
            "TestID": "control_23",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0021_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0021-improvement-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0021-improvement-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0021-improvement-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0021-improvement-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0021-improvement-d4-4_gen.wav"
            }
        },
        {
            "Name": "Actions by the service since the assassination indicate its awareness of the necessity for substantial improvement in its <font color='#FF0000'>administration</font>. ",
            "TestID": "control_24",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0021_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0021-administration-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0021-administration-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0021-administration-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0021-administration-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0021-administration-d0-4_gen.wav"
            }
        },
        {
            "Name": "A formal and thorough <font color='#FF0000'>description</font> of the responsibilities of the advance agent is now in preparation by the service. ",
            "TestID": "control_25",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0022_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0022-description-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0022-description-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0022-description-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0022-description-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0022-description-d1-4_gen.wav"
            }
        },
        {
            "Name": "A formal and thorough description of the responsibilities of the advance <font color='#FF0000'>agent</font> is now in preparation by the service. ",
            "TestID": "control_26",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0022_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0022-agent-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0022-agent-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0022-agent-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0022-agent-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0022-agent-d0-4_gen.wav"
            }
        },
        {
            "Name": "A formal and thorough description of the responsibilities of the advance agent is now in <font color='#FF0000'>preparation</font> by the service. ",
            "TestID": "control_27",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0022_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0022-preparation-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0022-preparation-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0022-preparation-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0022-preparation-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0022-preparation-d1-4_gen.wav"
            }
        },
        {
            "Name": "Work is going <font color='#FF0000'>forward</font> ",
            "TestID": "control_28",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0023_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0023-forward-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0023-forward-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0023-forward-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0023-forward-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0023-forward-d0-4_gen.wav"
            }
        },
        {
            "Name": "Or from which it derives assistance and <font color='#FF0000'>support</font>. ",
            "TestID": "control_29",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0025_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0025-support-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0025-support-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0025-support-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0025-support-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0025-support-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> urges that the service continue this effort to overhaul and define its procedures. ",
            "TestID": "control_30",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0026_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0026-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0026-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0026-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0026-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0026-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission urges that the service continue this <font color='#FF0000'>effort</font> to overhaul and define its procedures. ",
            "TestID": "control_31",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0026_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0026-effort-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0026-effort-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0026-effort-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0026-effort-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0026-effort-d0-4_gen.wav"
            }
        },
        {
            "Name": "The commission urges that the service continue this effort to overhaul and <font color='#FF0000'>define</font> its procedures. ",
            "TestID": "control_32",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0026_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0026-define-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0026-define-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0026-define-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0026-define-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0026-define-d4-4_gen.wav"
            }
        },
        {
            "Name": "While manuals and memoranda are no guarantee of <font color='#FF0000'>effective</font> operations, ",
            "TestID": "control_33",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0027_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0027-effective-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0027-effective-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0027-effective-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0027-effective-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0027-effective-d4-4_gen.wav"
            }
        },
        {
            "Name": "No sizable <font color='#FF0000'>organization</font> can achieve efficiency without the careful analysis and demarcation of responsibility ",
            "TestID": "control_34",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0028_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0028-organization-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0028-organization-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0028-organization-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0028-organization-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0028-organization-d1-4_gen.wav"
            }
        },
        {
            "Name": "No sizable organization can <font color='#FF0000'>achieve</font> efficiency without the careful analysis and demarcation of responsibility ",
            "TestID": "control_35",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0028_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0028-achieve-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0028-achieve-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0028-achieve-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0028-achieve-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0028-achieve-d3-4_gen.wav"
            }
        },
        {
            "Name": "No sizable organization can achieve efficiency <font color='#FF0000'>without</font> the careful analysis and demarcation of responsibility ",
            "TestID": "control_36",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0028_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0028-without-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0028-without-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0028-without-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0028-without-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0028-without-d3-4_gen.wav"
            }
        },
        {
            "Name": "No sizable organization can achieve efficiency without the careful analysis and <font color='#FF0000'>demarcation</font> of responsibility ",
            "TestID": "control_37",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0028_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0028-demarcation-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0028-demarcation-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0028-demarcation-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0028-demarcation-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0028-demarcation-d4-4_gen.wav"
            }
        },
        {
            "Name": "That is <font color='#FF0000'>reflected</font> in definite and comprehensive operating procedures. ",
            "TestID": "control_38",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0029_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0029-reflected-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0029-reflected-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0029-reflected-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0029-reflected-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0029-reflected-d3-4_gen.wav"
            }
        },
        {
            "Name": "That is reflected in <font color='#FF0000'>definite</font> and comprehensive operating procedures. ",
            "TestID": "control_39",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0029_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0029-definite-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0029-definite-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0029-definite-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0029-definite-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0029-definite-d3-4_gen.wav"
            }
        },
        {
            "Name": "That is reflected in definite and <font color='#FF0000'>comprehensive</font> operating procedures. ",
            "TestID": "control_40",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0029_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0029-comprehensive-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0029-comprehensive-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0029-comprehensive-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0029-comprehensive-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0029-comprehensive-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> also recommends ",
            "TestID": "control_41",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0030_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0030-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0030-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0030-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0030-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0030-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "That the <font color='#FF0000'>secret</font> service consciously set about the task of inculcating and maintaining the highest standard of excellence and esprit for all of its personnel. ",
            "TestID": "control_42",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0031_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0031-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0031-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0031-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0031-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0031-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "That the secret service consciously set <font color='#FF0000'>about</font> the task of inculcating and maintaining the highest standard of excellence and esprit for all of its personnel. ",
            "TestID": "control_43",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0031_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0031-about-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0031-about-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0031-about-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0031-about-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0031-about-d2-4_gen.wav"
            }
        },
        {
            "Name": "That the secret service consciously set about the <font color='#FF0000'>task</font> of inculcating and maintaining the highest standard of excellence and esprit for all of its personnel. ",
            "TestID": "control_44",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0031_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0031-task-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0031-task-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0031-task-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0031-task-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0031-task-d1-4_gen.wav"
            }
        },
        {
            "Name": "That the secret service consciously set about the task of inculcating and maintaining the <font color='#FF0000'>highest</font> standard of excellence and esprit for all of its personnel. ",
            "TestID": "control_45",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0031_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0031-highest-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0031-highest-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0031-highest-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0031-highest-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0031-highest-d3-4_gen.wav"
            }
        },
        {
            "Name": "That the secret service consciously set about the task of inculcating and maintaining the highest <font color='#FF0000'>standard</font> of excellence and esprit for all of its personnel. ",
            "TestID": "control_46",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0031_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0031-standard-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0031-standard-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0031-standard-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0031-standard-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0031-standard-d1-4_gen.wav"
            }
        },
        {
            "Name": "This involves tight and unswerving <font color='#FF0000'>discipline</font> as well as the promotion of an outstanding degree of dedication and loyalty to duty. ",
            "TestID": "control_47",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0032_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0032-discipline-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0032-discipline-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0032-discipline-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0032-discipline-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0032-discipline-d0-4_gen.wav"
            }
        },
        {
            "Name": "This involves tight and unswerving discipline as well as the <font color='#FF0000'>promotion</font> of an outstanding degree of dedication and loyalty to duty. ",
            "TestID": "control_48",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0032_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0032-promotion-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0032-promotion-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0032-promotion-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0032-promotion-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0032-promotion-d4-4_gen.wav"
            }
        },
        {
            "Name": "This involves tight and unswerving discipline as well as the promotion of an outstanding degree of <font color='#FF0000'>dedication</font> and loyalty to duty. ",
            "TestID": "control_49",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0032_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0032-dedication-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0032-dedication-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0032-dedication-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0032-dedication-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0032-dedication-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> emphasizes that it finds no causal connection between the assassination ",
            "TestID": "control_50",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0033_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0033-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0033-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0033-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0033-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0033-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission emphasizes that it finds no causal <font color='#FF0000'>connection</font> between the assassination ",
            "TestID": "control_51",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0033_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0033-connection-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0033-connection-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0033-connection-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0033-connection-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0033-connection-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission emphasizes that it finds no causal connection <font color='#FF0000'>between</font> the assassination ",
            "TestID": "control_52",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0033_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0033-between-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0033-between-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0033-between-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0033-between-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0033-between-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission emphasizes that it finds no causal connection between the <font color='#FF0000'>assassination</font> ",
            "TestID": "control_53",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0033_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0033-assassination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0033-assassination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0033-assassination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0033-assassination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0033-assassination-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the <font color='#FF0000'>breach</font> of regulations which occurred on the night of november twenty one at fort worth. ",
            "TestID": "control_54",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0034_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0034-breach-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0034-breach-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0034-breach-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0034-breach-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0034-breach-d3-4_gen.wav"
            }
        },
        {
            "Name": "And the breach of regulations which <font color='#FF0000'>occurred</font> on the night of november twenty one at fort worth. ",
            "TestID": "control_55",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0034_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0034-occurred-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0034-occurred-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0034-occurred-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0034-occurred-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0034-occurred-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the breach of regulations which occurred on the night of november twenty one at <font color='#FF0000'>fort</font> worth. ",
            "TestID": "control_56",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0034_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0034-fort-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0034-fort-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0034-fort-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0034-fort-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0034-fort-d1-4_gen.wav"
            }
        },
        {
            "Name": "Nevertheless, such a <font color='#FF0000'>breach</font>, in which so many agents participated, ",
            "TestID": "control_57",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0035_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0035-breach-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0035-breach-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0035-breach-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0035-breach-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0035-breach-d1-4_gen.wav"
            }
        },
        {
            "Name": "Nevertheless, such a breach, in which so many agents <font color='#FF0000'>participated</font>, ",
            "TestID": "control_58",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0035_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0035-participated-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0035-participated-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0035-participated-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0035-participated-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0035-participated-d0-4_gen.wav"
            }
        },
        {
            "Name": "Is not <font color='#FF0000'>consistent</font> with the standards which the responsibilities of the secret service require it to meet. ",
            "TestID": "control_59",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0036_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0036-consistent-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0036-consistent-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0036-consistent-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0036-consistent-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0036-consistent-d4-4_gen.wav"
            }
        },
        {
            "Name": "Is not consistent with the standards which the responsibilities of the <font color='#FF0000'>secret</font> service require it to meet. ",
            "TestID": "control_60",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0036_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0036-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0036-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0036-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0036-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0036-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>preventive</font> intelligence ",
            "TestID": "control_61",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0037_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0037-preventive-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0037-preventive-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0037-preventive-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0037-preventive-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0037-preventive-d3-4_gen.wav"
            }
        },
        {
            "Name": "In attempting to identify those individuals who might <font color='#FF0000'>prove</font> a danger to the president, ",
            "TestID": "control_62",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0038_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0038-prove-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0038-prove-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0038-prove-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0038-prove-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0038-prove-d3-4_gen.wav"
            }
        },
        {
            "Name": "In attempting to identify those individuals who might prove a danger to the <font color='#FF0000'>president</font>, ",
            "TestID": "control_63",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0038_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0038-president-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0038-president-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0038-president-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0038-president-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0038-president-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service has largely been the passive recipient of threatening communications to the president ",
            "TestID": "control_64",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0039_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0039-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0039-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0039-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0039-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0039-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has largely been the <font color='#FF0000'>passive</font> recipient of threatening communications to the president ",
            "TestID": "control_65",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0039_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0039-passive-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0039-passive-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0039-passive-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0039-passive-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0039-passive-d4-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has largely been the passive <font color='#FF0000'>recipient</font> of threatening communications to the president ",
            "TestID": "control_66",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0039_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0039-recipient-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0039-recipient-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0039-recipient-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0039-recipient-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0039-recipient-d4-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has largely been the passive recipient of threatening communications to the <font color='#FF0000'>president</font> ",
            "TestID": "control_67",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0039_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0039-president-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0039-president-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0039-president-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0039-president-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0039-president-d0-4_gen.wav"
            }
        },
        {
            "Name": "And reports from other agencies which independently <font color='#FF0000'>evaluate</font> their information for potential sources of danger. ",
            "TestID": "control_68",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0040_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0040-evaluate-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0040-evaluate-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0040-evaluate-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0040-evaluate-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0040-evaluate-d1-4_gen.wav"
            }
        },
        {
            "Name": "And reports from other agencies which independently evaluate their <font color='#FF0000'>information</font> for potential sources of danger. ",
            "TestID": "control_69",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0040_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0040-information-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0040-information-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0040-information-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0040-information-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0040-information-d1-4_gen.wav"
            }
        },
        {
            "Name": "This was the consequence of the service's lack of an <font color='#FF0000'>adequate</font> investigative staff, ",
            "TestID": "control_70",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0041_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0041-adequate-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0041-adequate-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0041-adequate-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0041-adequate-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0041-adequate-d3-4_gen.wav"
            }
        },
        {
            "Name": "This was the consequence of the service's lack of an adequate <font color='#FF0000'>investigative</font> staff, ",
            "TestID": "control_71",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0041_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0041-investigative-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0041-investigative-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0041-investigative-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0041-investigative-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0041-investigative-d2-4_gen.wav"
            }
        },
        {
            "Name": "This was the consequence of the service's lack of an adequate investigative <font color='#FF0000'>staff</font>, ",
            "TestID": "control_72",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0041_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0041-staff-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0041-staff-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0041-staff-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0041-staff-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0041-staff-d0-4_gen.wav"
            }
        },
        {
            "Name": "Its inability to process <font color='#FF0000'>large</font> amounts of data, and its failure to provide specific descriptions of the kind of information it sought. ",
            "TestID": "control_73",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0042_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0042-large-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0042-large-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0042-large-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0042-large-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0042-large-d1-4_gen.wav"
            }
        },
        {
            "Name": "Its inability to process large amounts of data, and its failure to <font color='#FF0000'>provide</font> specific descriptions of the kind of information it sought. ",
            "TestID": "control_74",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0042_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0042-provide-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0042-provide-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0042-provide-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0042-provide-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0042-provide-d3-4_gen.wav"
            }
        },
        {
            "Name": "Its inability to process large amounts of data, and its failure to provide <font color='#FF0000'>specific</font> descriptions of the kind of information it sought. ",
            "TestID": "control_75",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0042_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0042-specific-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0042-specific-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0042-specific-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0042-specific-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0042-specific-d3-4_gen.wav"
            }
        },
        {
            "Name": "Its inability to process large amounts of data, and its failure to provide specific descriptions of the <font color='#FF0000'>kind</font> of information it sought. ",
            "TestID": "control_76",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0042_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0042-kind-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0042-kind-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0042-kind-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0042-kind-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0042-kind-d3-4_gen.wav"
            }
        },
        {
            "Name": "Its inability to process large amounts of data, and its failure to provide specific descriptions of the kind of <font color='#FF0000'>information</font> it sought. ",
            "TestID": "control_77",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0042_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0042-information-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0042-information-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0042-information-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0042-information-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0042-information-d2-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service has embarked upon a complete overhaul of its research activities. the staff of the protective research section prs ",
            "TestID": "control_78",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has <font color='#FF0000'>embarked</font> upon a complete overhaul of its research activities. the staff of the protective research section prs ",
            "TestID": "control_79",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-embarked-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-embarked-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-embarked-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-embarked-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-embarked-d0-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has embarked <font color='#FF0000'>upon</font> a complete overhaul of its research activities. the staff of the protective research section prs ",
            "TestID": "control_80",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-upon-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-upon-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-upon-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-upon-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-upon-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has embarked upon a <font color='#FF0000'>complete</font> overhaul of its research activities. the staff of the protective research section prs ",
            "TestID": "control_81",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-complete-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-complete-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-complete-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-complete-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-complete-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has embarked upon a complete overhaul of its <font color='#FF0000'>research</font> activities. the staff of the protective <font color='#FF0000'>research</font> section prs ",
            "TestID": "control_82",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-research-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-research-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-research-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-research-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-research-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has embarked upon a complete overhaul of its research activities. the <font color='#FF0000'>staff</font> of the protective research section prs ",
            "TestID": "control_83",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-staff-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-staff-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-staff-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-staff-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-staff-d0-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has embarked upon a complete overhaul of its research activities. the staff of the <font color='#FF0000'>protective</font> research section prs ",
            "TestID": "control_84",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-protective-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-protective-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-protective-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-protective-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-protective-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has embarked upon a complete overhaul of its <font color='#FF0000'>research</font> activities. the staff of the protective <font color='#FF0000'>research</font> section prs ",
            "TestID": "control_85",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-research-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-research-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-research-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-research-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-research-d4-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has embarked upon a complete overhaul of its research activities. the staff of the protective research <font color='#FF0000'>section</font> prs ",
            "TestID": "control_86",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0043_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0043-section-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0043-section-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0043-section-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0043-section-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0043-section-d0-4_gen.wav"
            }
        },
        {
            "Name": "Has been <font color='#FF0000'>augmented</font>, and a secret service inspector has been put in charge of this operation. with the assistance of the president's office of science and technology, ",
            "TestID": "control_87",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0044_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0044-augmented-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0044-augmented-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0044-augmented-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0044-augmented-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0044-augmented-d0-4_gen.wav"
            }
        },
        {
            "Name": "Has been augmented, and a <font color='#FF0000'>secret</font> service inspector has been put in charge of this operation. with the assistance of the president's office of science and technology, ",
            "TestID": "control_88",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0044_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0044-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0044-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0044-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0044-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0044-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Has been augmented, and a secret service inspector has been put in <font color='#FF0000'>charge</font> of this operation. with the assistance of the president's office of science and technology, ",
            "TestID": "control_89",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0044_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0044-charge-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0044-charge-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0044-charge-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0044-charge-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0044-charge-d2-4_gen.wav"
            }
        },
        {
            "Name": "Has been augmented, and a secret service inspector has been put in charge of this <font color='#FF0000'>operation</font>. with the assistance of the president's office of science and technology, ",
            "TestID": "control_90",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0044_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0044-operation-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0044-operation-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0044-operation-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0044-operation-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0044-operation-d1-4_gen.wav"
            }
        },
        {
            "Name": "And of the <font color='#FF0000'>advanced</font> research projects agency of the department of defense, ",
            "TestID": "control_91",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0045_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0045-advanced-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0045-advanced-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0045-advanced-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0045-advanced-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0045-advanced-d3-4_gen.wav"
            }
        },
        {
            "Name": "And of the advanced <font color='#FF0000'>research</font> projects agency of the department of defense, ",
            "TestID": "control_92",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0045_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0045-research-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0045-research-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0045-research-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0045-research-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0045-research-d2-4_gen.wav"
            }
        },
        {
            "Name": "And of the advanced research projects agency of the <font color='#FF0000'>department</font> of defense, ",
            "TestID": "control_93",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0045_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0045-department-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0045-department-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0045-department-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0045-department-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0045-department-d1-4_gen.wav"
            }
        },
        {
            "Name": "It has <font color='#FF0000'>obtained</font> the services of outside consultants, such as the rand corporation, ",
            "TestID": "control_94",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0046_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0046-obtained-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0046-obtained-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0046-obtained-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0046-obtained-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0046-obtained-d4-4_gen.wav"
            }
        },
        {
            "Name": "It has obtained the services of <font color='#FF0000'>outside</font> consultants, such as the rand corporation, ",
            "TestID": "control_95",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0046_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0046-outside-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0046-outside-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0046-outside-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0046-outside-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0046-outside-d2-4_gen.wav"
            }
        },
        {
            "Name": "It has obtained the services of outside consultants, such as the <font color='#FF0000'>rand</font> corporation, ",
            "TestID": "control_96",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0046_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0046-rand-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0046-rand-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0046-rand-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0046-rand-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0046-rand-d3-4_gen.wav"
            }
        },
        {
            "Name": "It has obtained the services of outside consultants, such as the rand <font color='#FF0000'>corporation</font>, ",
            "TestID": "control_97",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0046_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0046-corporation-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0046-corporation-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0046-corporation-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0046-corporation-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0046-corporation-d0-4_gen.wav"
            }
        },
        {
            "Name": "International business machines <font color='#FF0000'>corporation</font>, and a panel of psychiatric and psychological experts. ",
            "TestID": "control_98",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0047_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0047-corporation-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0047-corporation-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0047-corporation-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0047-corporation-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0047-corporation-d0-4_gen.wav"
            }
        },
        {
            "Name": "International business machines corporation, and a panel of <font color='#FF0000'>psychiatric</font> and psychological experts. ",
            "TestID": "control_99",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0047_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0047-psychiatric-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0047-psychiatric-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0047-psychiatric-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0047-psychiatric-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0047-psychiatric-d3-4_gen.wav"
            }
        },
        {
            "Name": "It has <font color='#FF0000'>received</font> assistance also from data processing experts at the cia ",
            "TestID": "control_100",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0048_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0048-received-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0048-received-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0048-received-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0048-received-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0048-received-d2-4_gen.wav"
            }
        },
        {
            "Name": "And from a <font color='#FF0000'>specialist</font> in psychiatric prognostication at walter reed hospital. ",
            "TestID": "control_101",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0049_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0049-specialist-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0049-specialist-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0049-specialist-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0049-specialist-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0049-specialist-d4-4_gen.wav"
            }
        },
        {
            "Name": "And from a specialist in <font color='#FF0000'>psychiatric</font> prognostication at walter reed hospital. ",
            "TestID": "control_102",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0049_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0049-psychiatric-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0049-psychiatric-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0049-psychiatric-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0049-psychiatric-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0049-psychiatric-d3-4_gen.wav"
            }
        },
        {
            "Name": "And from a specialist in psychiatric <font color='#FF0000'>prognostication</font> at walter reed hospital. ",
            "TestID": "control_103",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0049_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0049-prognostication-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0049-prognostication-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0049-prognostication-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0049-prognostication-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0049-prognostication-d0-4_gen.wav"
            }
        },
        {
            "Name": "As a <font color='#FF0000'>result</font> of these studies, the planning document submitted by the secretary of the treasury to the bureau of the budget on august thirty one, ",
            "TestID": "control_104",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0050_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0050-result-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0050-result-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0050-result-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0050-result-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0050-result-d2-4_gen.wav"
            }
        },
        {
            "Name": "As a result of these studies, the planning <font color='#FF0000'>document</font> submitted by the secretary of the treasury to the bureau of the budget on august thirty one, ",
            "TestID": "control_105",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0050_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0050-document-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0050-document-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0050-document-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0050-document-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0050-document-d1-4_gen.wav"
            }
        },
        {
            "Name": "As a result of these studies, the planning document <font color='#FF0000'>submitted</font> by the secretary of the treasury to the bureau of the budget on august thirty one, ",
            "TestID": "control_106",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0050_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0050-submitted-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0050-submitted-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0050-submitted-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0050-submitted-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0050-submitted-d2-4_gen.wav"
            }
        },
        {
            "Name": "As a result of these studies, the planning document submitted by the secretary of the treasury to the bureau of the <font color='#FF0000'>budget</font> on august thirty one, ",
            "TestID": "control_107",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0050_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0050-budget-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0050-budget-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0050-budget-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0050-budget-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0050-budget-d0-4_gen.wav"
            }
        },
        {
            "Name": "As a result of these studies, the planning document submitted by the secretary of the treasury to the bureau of the budget on <font color='#FF0000'>august</font> thirty one, ",
            "TestID": "control_108",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0050_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0050-august-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0050-august-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0050-august-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0050-august-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0050-august-d0-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>nineteen</font> sixty four, makes several significant recommendations in this field. ",
            "TestID": "control_109",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0051_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0051-nineteen-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0051-nineteen-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0051-nineteen-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0051-nineteen-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0051-nineteen-d4-4_gen.wav"
            }
        },
        {
            "Name": "Nineteen sixty four, makes several <font color='#FF0000'>significant</font> recommendations in this field. ",
            "TestID": "control_110",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0051_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0051-significant-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0051-significant-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0051-significant-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0051-significant-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0051-significant-d4-4_gen.wav"
            }
        },
        {
            "Name": "Nineteen sixty four, makes several significant recommendations in this <font color='#FF0000'>field</font>. ",
            "TestID": "control_111",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0051_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0051-field-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0051-field-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0051-field-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0051-field-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0051-field-d4-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>based</font> on the commission's investigation, the following minimum goals for improvements are indicated, ",
            "TestID": "control_112",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0052_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0052-based-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0052-based-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0052-based-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0052-based-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0052-based-d3-4_gen.wav"
            }
        },
        {
            "Name": "Based on the commission's <font color='#FF0000'>investigation</font>, the following minimum goals for improvements are indicated, ",
            "TestID": "control_113",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0052_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0052-investigation-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0052-investigation-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0052-investigation-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0052-investigation-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0052-investigation-d0-4_gen.wav"
            }
        },
        {
            "Name": "Based on the commission's investigation, the following <font color='#FF0000'>minimum</font> goals for improvements are indicated, ",
            "TestID": "control_114",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0052_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0052-minimum-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0052-minimum-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0052-minimum-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0052-minimum-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0052-minimum-d2-4_gen.wav"
            }
        },
        {
            "Name": "Based on the commission's investigation, the following minimum goals for improvements are <font color='#FF0000'>indicated</font>, ",
            "TestID": "control_115",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0052_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0052-indicated-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0052-indicated-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0052-indicated-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0052-indicated-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0052-indicated-d1-4_gen.wav"
            }
        },
        {
            "Name": "Broader and more <font color='#FF0000'>selective</font> criteria ",
            "TestID": "control_116",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0053_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0053-selective-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0053-selective-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0053-selective-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0053-selective-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0053-selective-d4-4_gen.wav"
            }
        },
        {
            "Name": "Since the <font color='#FF0000'>assassination</font>, both the secret service and the fbi have recognized ",
            "TestID": "control_117",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0054_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0054-assassination-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0054-assassination-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0054-assassination-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0054-assassination-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0054-assassination-d0-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, both the <font color='#FF0000'>secret</font> service and the fbi have recognized ",
            "TestID": "control_118",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0054_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0054-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0054-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0054-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0054-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0054-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, both the secret service and the fbi have <font color='#FF0000'>recognized</font> ",
            "TestID": "control_119",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0054_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0054-recognized-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0054-recognized-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0054-recognized-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0054-recognized-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0054-recognized-d4-4_gen.wav"
            }
        },
        {
            "Name": "That the prs files can no longer be <font color='#FF0000'>limited</font> largely to persons communicating actual threats to the president. ",
            "TestID": "control_120",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0055_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0055-limited-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0055-limited-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0055-limited-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0055-limited-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0055-limited-d1-4_gen.wav"
            }
        },
        {
            "Name": "That the prs files can no longer be limited largely to persons communicating actual threats to the <font color='#FF0000'>president</font>. ",
            "TestID": "control_121",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0055_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0055-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0055-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0055-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0055-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0055-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "On december twenty six, <font color='#FF0000'>nineteen</font> sixty three, the fbi circulated additional instructions to all its agents, ",
            "TestID": "control_122",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0056_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0056-nineteen-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0056-nineteen-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0056-nineteen-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0056-nineteen-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0056-nineteen-d2-4_gen.wav"
            }
        },
        {
            "Name": "On december twenty six, nineteen sixty three, the fbi <font color='#FF0000'>circulated</font> additional instructions to all its agents, ",
            "TestID": "control_123",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0056_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0056-circulated-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0056-circulated-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0056-circulated-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0056-circulated-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0056-circulated-d1-4_gen.wav"
            }
        },
        {
            "Name": "Specifying criteria for <font color='#FF0000'>information</font> to be furnished to the secret service in addition to that covered by the former standard, ",
            "TestID": "control_124",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0057_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0057-information-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0057-information-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0057-information-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0057-information-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0057-information-d2-4_gen.wav"
            }
        },
        {
            "Name": "Specifying criteria for information to be <font color='#FF0000'>furnished</font> to the secret service in addition to that covered by the former standard, ",
            "TestID": "control_125",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0057_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0057-furnished-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0057-furnished-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0057-furnished-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0057-furnished-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0057-furnished-d1-4_gen.wav"
            }
        },
        {
            "Name": "Specifying criteria for information to be furnished to the <font color='#FF0000'>secret</font> service in addition to that covered by the former standard, ",
            "TestID": "control_126",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0057_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0057-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0057-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0057-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0057-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0057-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "Specifying criteria for information to be furnished to the secret service in <font color='#FF0000'>addition</font> to that covered by the former standard, ",
            "TestID": "control_127",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0057_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0057-addition-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0057-addition-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0057-addition-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0057-addition-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0057-addition-d3-4_gen.wav"
            }
        },
        {
            "Name": "Specifying criteria for information to be furnished to the secret service in addition to that <font color='#FF0000'>covered</font> by the former standard, ",
            "TestID": "control_128",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0057_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0057-covered-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0057-covered-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0057-covered-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0057-covered-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0057-covered-d4-4_gen.wav"
            }
        },
        {
            "Name": "Specifying criteria for information to be furnished to the secret service in addition to that covered by the former <font color='#FF0000'>standard</font>, ",
            "TestID": "control_129",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0057_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0057-standard-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0057-standard-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0057-standard-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0057-standard-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0057-standard-d0-4_gen.wav"
            }
        },
        {
            "Name": "Which was the possibility of an <font color='#FF0000'>attempt</font> against the person or safety of the president. ",
            "TestID": "control_130",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0058_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0058-attempt-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0058-attempt-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0058-attempt-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0058-attempt-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0058-attempt-d4-4_gen.wav"
            }
        },
        {
            "Name": "Which was the possibility of an attempt <font color='#FF0000'>against</font> the person or safety of the president. ",
            "TestID": "control_131",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0058_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0058-against-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0058-against-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0058-against-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0058-against-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0058-against-d1-4_gen.wav"
            }
        },
        {
            "Name": "Which was the possibility of an attempt against the <font color='#FF0000'>person</font> or safety of the president. ",
            "TestID": "control_132",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0058_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0058-person-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0058-person-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0058-person-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0058-person-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0058-person-d2-4_gen.wav"
            }
        },
        {
            "Name": "Which was the possibility of an attempt against the person or safety of the <font color='#FF0000'>president</font>. ",
            "TestID": "control_133",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0058_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0058-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0058-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0058-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0058-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0058-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "He new instructions require fbi agents to <font color='#FF0000'>report</font> immediately information concerning quote, ",
            "TestID": "control_134",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0059_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0059-report-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0059-report-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0059-report-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0059-report-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0059-report-d3-4_gen.wav"
            }
        },
        {
            "Name": "He new instructions require fbi agents to report immediately <font color='#FF0000'>information</font> concerning quote, ",
            "TestID": "control_135",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0059_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0059-information-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0059-information-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0059-information-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0059-information-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0059-information-d4-4_gen.wav"
            }
        },
        {
            "Name": "He new instructions require fbi agents to report immediately information concerning <font color='#FF0000'>quote</font>, ",
            "TestID": "control_136",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0059_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0059-quote-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0059-quote-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0059-quote-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0059-quote-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0059-quote-d1-4_gen.wav"
            }
        },
        {
            "Name": "B who have made threats of bodily <font color='#FF0000'>harm</font> against officials or employees of federal, state or local government or officials of a foreign government, ",
            "TestID": "control_137",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0061_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0061-harm-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0061-harm-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0061-harm-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0061-harm-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0061-harm-d0-4_gen.wav"
            }
        },
        {
            "Name": "B who have made threats of bodily harm <font color='#FF0000'>against</font> officials or employees of federal, state or local government or officials of a foreign government, ",
            "TestID": "control_138",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0061_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0061-against-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0061-against-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0061-against-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0061-against-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0061-against-d1-4_gen.wav"
            }
        },
        {
            "Name": "B who have made threats of bodily harm against officials or employees of federal, <font color='#FF0000'>state</font> or local government or officials of a foreign government, ",
            "TestID": "control_139",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0061_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0061-state-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0061-state-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0061-state-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0061-state-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0061-state-d2-4_gen.wav"
            }
        },
        {
            "Name": "B who have made threats of bodily harm against officials or employees of federal, state or local <font color='#FF0000'>government</font> or officials of a foreign <font color='#FF0000'>government</font>, ",
            "TestID": "control_140",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0061_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0061-government-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0061-government-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0061-government-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0061-government-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0061-government-d2-4_gen.wav"
            }
        },
        {
            "Name": "B who have made threats of bodily harm against officials or employees of federal, state or local government or officials of a <font color='#FF0000'>foreign</font> government, ",
            "TestID": "control_141",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0061_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0061-foreign-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0061-foreign-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0061-foreign-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0061-foreign-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0061-foreign-d2-4_gen.wav"
            }
        },
        {
            "Name": "B who have made threats of bodily harm against officials or employees of federal, state or local <font color='#FF0000'>government</font> or officials of a foreign <font color='#FF0000'>government</font>, ",
            "TestID": "control_142",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0061_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0061-government-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0061-government-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0061-government-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0061-government-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0061-government-d0-4_gen.wav"
            }
        },
        {
            "Name": "And who have been <font color='#FF0000'>involved</font> in bombing or bomb making or whose past conduct indicates tendencies toward violence, and d ",
            "TestID": "control_143",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0063_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0063-involved-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0063-involved-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0063-involved-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0063-involved-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0063-involved-d2-4_gen.wav"
            }
        },
        {
            "Name": "And who have been involved in bombing or bomb making or whose <font color='#FF0000'>past</font> conduct indicates tendencies toward violence, and d ",
            "TestID": "control_144",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0063_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0063-past-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0063-past-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0063-past-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0063-past-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0063-past-d3-4_gen.wav"
            }
        },
        {
            "Name": "And who have been involved in bombing or bomb making or whose past <font color='#FF0000'>conduct</font> indicates tendencies toward violence, and d ",
            "TestID": "control_145",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0063_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0063-conduct-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0063-conduct-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0063-conduct-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0063-conduct-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0063-conduct-d0-4_gen.wav"
            }
        },
        {
            "Name": "And who have been involved in bombing or bomb making or whose past conduct indicates tendencies <font color='#FF0000'>toward</font> violence, and d ",
            "TestID": "control_146",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0063_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0063-toward-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0063-toward-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0063-toward-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0063-toward-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0063-toward-d2-4_gen.wav"
            }
        },
        {
            "Name": "Whose prior acts or statements <font color='#FF0000'>depict</font> propensity for violence and hatred against organized government, end quote. ",
            "TestID": "control_147",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0064_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0064-depict-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0064-depict-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0064-depict-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0064-depict-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0064-depict-d3-4_gen.wav"
            }
        },
        {
            "Name": "Whose prior acts or statements depict propensity for violence and <font color='#FF0000'>hatred</font> against organized government, end quote. ",
            "TestID": "control_148",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0064_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0064-hatred-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0064-hatred-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0064-hatred-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0064-hatred-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0064-hatred-d4-4_gen.wav"
            }
        },
        {
            "Name": "Whose prior acts or statements depict propensity for violence and hatred <font color='#FF0000'>against</font> organized government, end quote. ",
            "TestID": "control_149",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0064_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0064-against-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0064-against-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0064-against-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0064-against-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0064-against-d2-4_gen.wav"
            }
        },
        {
            "Name": "Whose prior acts or statements depict propensity for violence and hatred against <font color='#FF0000'>organized</font> government, end quote. ",
            "TestID": "control_150",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0064_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0064-organized-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0064-organized-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0064-organized-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0064-organized-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0064-organized-d1-4_gen.wav"
            }
        },
        {
            "Name": "Whose prior acts or statements depict propensity for violence and hatred against organized <font color='#FF0000'>government</font>, end quote. ",
            "TestID": "control_151",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0064_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0064-government-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0064-government-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0064-government-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0064-government-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0064-government-d4-4_gen.wav"
            }
        },
        {
            "Name": "Whose prior acts or statements depict propensity for violence and hatred against organized government, end <font color='#FF0000'>quote</font>. ",
            "TestID": "control_152",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0064_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0064-quote-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0064-quote-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0064-quote-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0064-quote-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0064-quote-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>volume</font> of references to the secret service has increased substantially since the new instructions went into effect, ",
            "TestID": "control_153",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0066_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0066-volume-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0066-volume-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0066-volume-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0066-volume-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0066-volume-d3-4_gen.wav"
            }
        },
        {
            "Name": "The volume of references to the <font color='#FF0000'>secret</font> service has increased substantially since the new instructions went into effect, ",
            "TestID": "control_154",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0066_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0066-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0066-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0066-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0066-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0066-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The volume of references to the secret service has <font color='#FF0000'>increased</font> substantially since the new instructions went into effect, ",
            "TestID": "control_155",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0066_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0066-increased-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0066-increased-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0066-increased-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0066-increased-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0066-increased-d3-4_gen.wav"
            }
        },
        {
            "Name": "The volume of references to the secret service has increased substantially since the new instructions <font color='#FF0000'>went</font> into effect, ",
            "TestID": "control_156",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0066_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0066-went-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0066-went-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0066-went-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0066-went-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0066-went-d1-4_gen.wav"
            }
        },
        {
            "Name": "The volume of references to the secret service has increased substantially since the new instructions went into <font color='#FF0000'>effect</font>, ",
            "TestID": "control_157",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0066_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0066-effect-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0066-effect-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0066-effect-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0066-effect-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0066-effect-d0-4_gen.wav"
            }
        },
        {
            "Name": "More than five <font color='#FF0000'>thousand</font> names were referred to the secret service in the first four months of nineteen sixty four. ",
            "TestID": "control_158",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0067_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0067-thousand-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0067-thousand-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0067-thousand-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0067-thousand-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0067-thousand-d4-4_gen.wav"
            }
        },
        {
            "Name": "More than five thousand names were <font color='#FF0000'>referred</font> to the secret service in the first four months of nineteen sixty four. ",
            "TestID": "control_159",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0067_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0067-referred-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0067-referred-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0067-referred-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0067-referred-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0067-referred-d3-4_gen.wav"
            }
        },
        {
            "Name": "More than five thousand names were referred to the <font color='#FF0000'>secret</font> service in the first four months of nineteen sixty four. ",
            "TestID": "control_160",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0067_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0067-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0067-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0067-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0067-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0067-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "More than five thousand names were referred to the secret service in the <font color='#FF0000'>first</font> four months of nineteen sixty four. ",
            "TestID": "control_161",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0067_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0067-first-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0067-first-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0067-first-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0067-first-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0067-first-d2-4_gen.wav"
            }
        },
        {
            "Name": "More than five thousand names were referred to the secret service in the first four months of <font color='#FF0000'>nineteen</font> sixty four. ",
            "TestID": "control_162",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0067_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0067-nineteen-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0067-nineteen-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0067-nineteen-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0067-nineteen-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0067-nineteen-d2-4_gen.wav"
            }
        },
        {
            "Name": "According to chief rowley, by mid june <font color='#FF0000'>nineteen</font> sixty four, ",
            "TestID": "control_163",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0068_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0068-nineteen-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0068-nineteen-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0068-nineteen-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0068-nineteen-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0068-nineteen-d2-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service had received from the fbi some nine thousand reports on members of the communist party. ",
            "TestID": "control_164",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0069_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0069-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0069-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0069-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0069-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0069-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service had <font color='#FF0000'>received</font> from the fbi some nine thousand reports on members of the communist party. ",
            "TestID": "control_165",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0069_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0069-received-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0069-received-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0069-received-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0069-received-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0069-received-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service had received <font color='#FF0000'>from</font> the fbi some nine thousand reports on members of the communist party. ",
            "TestID": "control_166",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0069_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0069-from-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0069-from-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0069-from-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0069-from-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0069-from-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service had received from the fbi some nine <font color='#FF0000'>thousand</font> reports on members of the communist party. ",
            "TestID": "control_167",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0069_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0069-thousand-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0069-thousand-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0069-thousand-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0069-thousand-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0069-thousand-d4-4_gen.wav"
            }
        },
        {
            "Name": "The secret service had received from the fbi some nine thousand reports on members of the <font color='#FF0000'>communist</font> party. ",
            "TestID": "control_168",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0069_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0069-communist-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0069-communist-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0069-communist-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0069-communist-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0069-communist-d1-4_gen.wav"
            }
        },
        {
            "Name": "Both director hoover and <font color='#FF0000'>belmont</font> expressed to the commission the great concern of the fbi, which is shared by the secret service, ",
            "TestID": "control_169",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0071-belmont-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0071-belmont-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0071-belmont-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0071-belmont-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0071-belmont-d1-4_gen.wav"
            }
        },
        {
            "Name": "Both director hoover and belmont <font color='#FF0000'>expressed</font> to the commission the great concern of the fbi, which is shared by the secret service, ",
            "TestID": "control_170",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0071-expressed-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0071-expressed-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0071-expressed-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0071-expressed-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0071-expressed-d3-4_gen.wav"
            }
        },
        {
            "Name": "Both director hoover and belmont expressed to the <font color='#FF0000'>commission</font> the great concern of the fbi, which is shared by the secret service, ",
            "TestID": "control_171",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0071-commission-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0071-commission-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0071-commission-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0071-commission-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0071-commission-d0-4_gen.wav"
            }
        },
        {
            "Name": "Both director hoover and belmont expressed to the commission the <font color='#FF0000'>great</font> concern of the fbi, which is shared by the secret service, ",
            "TestID": "control_172",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0071-great-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0071-great-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0071-great-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0071-great-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0071-great-d3-4_gen.wav"
            }
        },
        {
            "Name": "Both director hoover and belmont expressed to the commission the great <font color='#FF0000'>concern</font> of the fbi, which is shared by the secret service, ",
            "TestID": "control_173",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0071-concern-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0071-concern-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0071-concern-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0071-concern-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0071-concern-d2-4_gen.wav"
            }
        },
        {
            "Name": "Both director hoover and belmont expressed to the commission the great concern of the fbi, which is <font color='#FF0000'>shared</font> by the secret service, ",
            "TestID": "control_174",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0071-shared-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0071-shared-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0071-shared-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0071-shared-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0071-shared-d4-4_gen.wav"
            }
        },
        {
            "Name": "Both director hoover and belmont expressed to the commission the great concern of the fbi, which is shared by the <font color='#FF0000'>secret</font> service, ",
            "TestID": "control_175",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0071_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0071-secret-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0071-secret-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0071-secret-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0071-secret-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0071-secret-d0-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>result</font> in some degree of interference with the personal liberty of those involved. ",
            "TestID": "control_176",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0073_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0073-result-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0073-result-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0073-result-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0073-result-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0073-result-d3-4_gen.wav"
            }
        },
        {
            "Name": "Result in some degree of interference with the personal liberty of those <font color='#FF0000'>involved</font>. ",
            "TestID": "control_177",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0073_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0073-involved-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0073-involved-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0073-involved-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0073-involved-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0073-involved-d0-4_gen.wav"
            }
        },
        {
            "Name": "They <font color='#FF0000'>emphasized</font> the necessity that the information now being furnished be handled with judgment and care. ",
            "TestID": "control_178",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0074-emphasized-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0074-emphasized-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0074-emphasized-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0074-emphasized-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0074-emphasized-d4-4_gen.wav"
            }
        },
        {
            "Name": "They emphasized the necessity that the <font color='#FF0000'>information</font> now being furnished be handled with judgment and care. ",
            "TestID": "control_179",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0074-information-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0074-information-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0074-information-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0074-information-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0074-information-d4-4_gen.wav"
            }
        },
        {
            "Name": "They emphasized the necessity that the information now being <font color='#FF0000'>furnished</font> be handled with judgment and care. ",
            "TestID": "control_180",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0074-furnished-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0074-furnished-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0074-furnished-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0074-furnished-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0074-furnished-d4-4_gen.wav"
            }
        },
        {
            "Name": "They emphasized the necessity that the information now being furnished be <font color='#FF0000'>handled</font> with judgment and care. ",
            "TestID": "control_181",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0074-handled-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0074-handled-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0074-handled-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0074-handled-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0074-handled-d2-4_gen.wav"
            }
        },
        {
            "Name": "They emphasized the necessity that the information now being furnished be handled with <font color='#FF0000'>judgment</font> and care. ",
            "TestID": "control_182",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0074_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0074-judgment-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0074-judgment-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0074-judgment-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0074-judgment-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0074-judgment-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> shares this concern. ",
            "TestID": "control_183",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0075_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0075-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0075-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0075-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0075-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0075-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission shares this <font color='#FF0000'>concern</font>. ",
            "TestID": "control_184",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0075_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0075-concern-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0075-concern-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0075-concern-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0075-concern-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0075-concern-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>problem</font> is aggravated by the necessity that the service obtain the assistance of local law enforcement officials in evaluating the information which it receives ",
            "TestID": "control_185",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0076_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0076-problem-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0076-problem-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0076-problem-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0076-problem-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0076-problem-d4-4_gen.wav"
            }
        },
        {
            "Name": "The problem is <font color='#FF0000'>aggravated</font> by the necessity that the service obtain the assistance of local law enforcement officials in evaluating the information which it receives ",
            "TestID": "control_186",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0076_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0076-aggravated-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0076-aggravated-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0076-aggravated-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0076-aggravated-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0076-aggravated-d4-4_gen.wav"
            }
        },
        {
            "Name": "The problem is aggravated by the necessity that the service <font color='#FF0000'>obtain</font> the assistance of local law enforcement officials in evaluating the information which it receives ",
            "TestID": "control_187",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0076_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0076-obtain-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0076-obtain-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0076-obtain-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0076-obtain-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0076-obtain-d0-4_gen.wav"
            }
        },
        {
            "Name": "The problem is aggravated by the necessity that the service obtain the assistance of local law <font color='#FF0000'>enforcement</font> officials in evaluating the information which it receives ",
            "TestID": "control_188",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0076_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0076-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0076-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0076-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0076-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0076-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "The problem is aggravated by the necessity that the service obtain the assistance of local law enforcement officials in evaluating the <font color='#FF0000'>information</font> which it receives ",
            "TestID": "control_189",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0076_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0076-information-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0076-information-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0076-information-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0076-information-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0076-information-d2-4_gen.wav"
            }
        },
        {
            "Name": "And in taking <font color='#FF0000'>preventive</font> steps. ",
            "TestID": "control_190",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0077_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0077-preventive-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0077-preventive-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0077-preventive-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0077-preventive-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0077-preventive-d4-4_gen.wav"
            }
        },
        {
            "Name": "In june <font color='#FF0000'>nineteen</font> sixty four, the secret service sent to a number of federal law enforcement and intelligence agencies ",
            "TestID": "control_191",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0078_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0078-nineteen-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0078-nineteen-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0078-nineteen-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0078-nineteen-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0078-nineteen-d3-4_gen.wav"
            }
        },
        {
            "Name": "In june nineteen sixty four, the <font color='#FF0000'>secret</font> service sent to a number of federal law enforcement and intelligence agencies ",
            "TestID": "control_192",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0078_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0078-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0078-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0078-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0078-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0078-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "In june nineteen sixty four, the secret service <font color='#FF0000'>sent</font> to a number of federal law enforcement and intelligence agencies ",
            "TestID": "control_193",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0078_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0078-sent-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0078-sent-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0078-sent-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0078-sent-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0078-sent-d1-4_gen.wav"
            }
        },
        {
            "Name": "In june nineteen sixty four, the secret service sent to a number of federal law <font color='#FF0000'>enforcement</font> and intelligence agencies ",
            "TestID": "control_194",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0078_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0078-enforcement-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0078-enforcement-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0078-enforcement-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0078-enforcement-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0078-enforcement-d2-4_gen.wav"
            }
        },
        {
            "Name": "The new <font color='#FF0000'>tentative</font> criteria are useful in making clear that ",
            "TestID": "control_195",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0081_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0081-tentative-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0081-tentative-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0081-tentative-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0081-tentative-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0081-tentative-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>interest</font> of the secret service goes beyond information on individuals or groups threatening to cause harm or embarrassment to the president. ",
            "TestID": "control_196",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0082-interest-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0082-interest-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0082-interest-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0082-interest-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0082-interest-d3-4_gen.wav"
            }
        },
        {
            "Name": "The interest of the <font color='#FF0000'>secret</font> service goes beyond information on individuals or groups threatening to cause harm or embarrassment to the president. ",
            "TestID": "control_197",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0082-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0082-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0082-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0082-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0082-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The interest of the secret service goes <font color='#FF0000'>beyond</font> information on individuals or groups threatening to cause harm or embarrassment to the president. ",
            "TestID": "control_198",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0082-beyond-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0082-beyond-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0082-beyond-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0082-beyond-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0082-beyond-d3-4_gen.wav"
            }
        },
        {
            "Name": "The interest of the secret service goes beyond <font color='#FF0000'>information</font> on individuals or groups threatening to cause harm or embarrassment to the president. ",
            "TestID": "control_199",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0082-information-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0082-information-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0082-information-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0082-information-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0082-information-d2-4_gen.wav"
            }
        },
        {
            "Name": "The interest of the secret service goes beyond information on individuals or groups threatening to cause <font color='#FF0000'>harm</font> or embarrassment to the president. ",
            "TestID": "control_200",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0082-harm-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0082-harm-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0082-harm-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0082-harm-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0082-harm-d2-4_gen.wav"
            }
        },
        {
            "Name": "The interest of the secret service goes beyond information on individuals or groups threatening to cause harm or <font color='#FF0000'>embarrassment</font> to the president. ",
            "TestID": "control_201",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0082-embarrassment-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0082-embarrassment-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0082-embarrassment-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0082-embarrassment-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0082-embarrassment-d1-4_gen.wav"
            }
        },
        {
            "Name": "The interest of the secret service goes beyond information on individuals or groups threatening to cause harm or embarrassment to the <font color='#FF0000'>president</font>. ",
            "TestID": "control_202",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0082_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0082-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0082-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0082-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0082-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0082-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>information</font> is requested also concerning individuals or groups who have demonstrated an interest in the president ",
            "TestID": "control_203",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0083_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0083-information-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0083-information-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0083-information-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0083-information-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0083-information-d2-4_gen.wav"
            }
        },
        {
            "Name": "Information is <font color='#FF0000'>requested</font> also concerning individuals or groups who have demonstrated an interest in the president ",
            "TestID": "control_204",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0083_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0083-requested-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0083-requested-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0083-requested-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0083-requested-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0083-requested-d1-4_gen.wav"
            }
        },
        {
            "Name": "Information is requested also concerning individuals or groups who have <font color='#FF0000'>demonstrated</font> an interest in the president ",
            "TestID": "control_205",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0083_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0083-demonstrated-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0083-demonstrated-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0083-demonstrated-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0083-demonstrated-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0083-demonstrated-d2-4_gen.wav"
            }
        },
        {
            "Name": "Information is requested also concerning individuals or groups who have demonstrated an <font color='#FF0000'>interest</font> in the president ",
            "TestID": "control_206",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0083_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0083-interest-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0083-interest-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0083-interest-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0083-interest-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0083-interest-d4-4_gen.wav"
            }
        },
        {
            "Name": "Information is requested also concerning individuals or groups who have demonstrated an interest in the <font color='#FF0000'>president</font> ",
            "TestID": "control_207",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0083_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0083-president-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0083-president-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0083-president-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0083-president-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0083-president-d0-4_gen.wav"
            }
        },
        {
            "Name": "Or <font color='#FF0000'>quote</font>, other high government officials in the nature of a complaint coupled with an expressed or implied determination to use a means, ",
            "TestID": "control_208",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0084-quote-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0084-quote-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0084-quote-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0084-quote-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0084-quote-d2-4_gen.wav"
            }
        },
        {
            "Name": "Or quote, other high <font color='#FF0000'>government</font> officials in the nature of a complaint coupled with an expressed or implied determination to use a means, ",
            "TestID": "control_209",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0084-government-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0084-government-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0084-government-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0084-government-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0084-government-d1-4_gen.wav"
            }
        },
        {
            "Name": "Or quote, other high government officials in the nature of a <font color='#FF0000'>complaint</font> coupled with an expressed or implied determination to use a means, ",
            "TestID": "control_210",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0084-complaint-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0084-complaint-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0084-complaint-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0084-complaint-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0084-complaint-d2-4_gen.wav"
            }
        },
        {
            "Name": "Or quote, other high government officials in the nature of a complaint <font color='#FF0000'>coupled</font> with an expressed or implied determination to use a means, ",
            "TestID": "control_211",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0084-coupled-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0084-coupled-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0084-coupled-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0084-coupled-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0084-coupled-d4-4_gen.wav"
            }
        },
        {
            "Name": "Or quote, other high government officials in the nature of a complaint coupled with an <font color='#FF0000'>expressed</font> or implied determination to use a means, ",
            "TestID": "control_212",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0084-expressed-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0084-expressed-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0084-expressed-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0084-expressed-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0084-expressed-d3-4_gen.wav"
            }
        },
        {
            "Name": "Or quote, other high government officials in the nature of a complaint coupled with an expressed or <font color='#FF0000'>implied</font> determination to use a means, ",
            "TestID": "control_213",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0084-implied-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0084-implied-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0084-implied-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0084-implied-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0084-implied-d3-4_gen.wav"
            }
        },
        {
            "Name": "Or quote, other high government officials in the nature of a complaint coupled with an expressed or implied <font color='#FF0000'>determination</font> to use a means, ",
            "TestID": "control_214",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0084_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0084-determination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0084-determination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0084-determination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0084-determination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0084-determination-d4-4_gen.wav"
            }
        },
        {
            "Name": "Other than legal or peaceful, to satisfy any grievance, real or <font color='#FF0000'>imagined</font>. ",
            "TestID": "control_215",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0085_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0085-imagined-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0085-imagined-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0085-imagined-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0085-imagined-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0085-imagined-d0-4_gen.wav"
            }
        },
        {
            "Name": "Under these criteria, whether the case should be <font color='#FF0000'>referred</font> to the secret service depends on the existence of a previous history of mental instability, ",
            "TestID": "control_216",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0086_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0086-referred-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0086-referred-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0086-referred-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0086-referred-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0086-referred-d2-4_gen.wav"
            }
        },
        {
            "Name": "Under these criteria, whether the case should be referred to the <font color='#FF0000'>secret</font> service depends on the existence of a previous history of mental instability, ",
            "TestID": "control_217",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0086_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0086-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0086-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0086-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0086-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0086-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "Propensity <font color='#FF0000'>toward</font> violent action, or some similar characteristic, coupled with some evaluation of the capability of the individual or group ",
            "TestID": "control_218",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0087-toward-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0087-toward-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0087-toward-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0087-toward-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0087-toward-d1-4_gen.wav"
            }
        },
        {
            "Name": "Propensity toward <font color='#FF0000'>violent</font> action, or some similar characteristic, coupled with some evaluation of the capability of the individual or group ",
            "TestID": "control_219",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0087-violent-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0087-violent-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0087-violent-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0087-violent-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0087-violent-d2-4_gen.wav"
            }
        },
        {
            "Name": "Propensity toward violent <font color='#FF0000'>action</font>, or some similar characteristic, coupled with some evaluation of the capability of the individual or group ",
            "TestID": "control_220",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0087-action-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0087-action-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0087-action-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0087-action-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0087-action-d1-4_gen.wav"
            }
        },
        {
            "Name": "Propensity toward violent action, or some similar <font color='#FF0000'>characteristic</font>, coupled with some evaluation of the capability of the individual or group ",
            "TestID": "control_221",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0087-characteristic-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0087-characteristic-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0087-characteristic-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0087-characteristic-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0087-characteristic-d4-4_gen.wav"
            }
        },
        {
            "Name": "Propensity toward violent action, or some similar characteristic, <font color='#FF0000'>coupled</font> with some evaluation of the capability of the individual or group ",
            "TestID": "control_222",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0087-coupled-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0087-coupled-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0087-coupled-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0087-coupled-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0087-coupled-d3-4_gen.wav"
            }
        },
        {
            "Name": "Propensity toward violent action, or some similar characteristic, coupled with some <font color='#FF0000'>evaluation</font> of the capability of the individual or group ",
            "TestID": "control_223",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0087-evaluation-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0087-evaluation-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0087-evaluation-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0087-evaluation-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0087-evaluation-d0-4_gen.wav"
            }
        },
        {
            "Name": "Propensity toward violent action, or some similar characteristic, coupled with some evaluation of the capability of the individual or <font color='#FF0000'>group</font> ",
            "TestID": "control_224",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0087_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0087-group-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0087-group-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0087-group-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0087-group-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0087-group-d2-4_gen.wav"
            }
        },
        {
            "Name": "To further the <font color='#FF0000'>intention</font> to satisfy a grievance by unlawful means. ",
            "TestID": "control_225",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0088_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0088-intention-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0088-intention-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0088-intention-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0088-intention-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0088-intention-d4-4_gen.wav"
            }
        },
        {
            "Name": "While these <font color='#FF0000'>tentative</font> criteria are a step in the right direction, ",
            "TestID": "control_226",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0089_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0089-tentative-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0089-tentative-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0089-tentative-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0089-tentative-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0089-tentative-d4-4_gen.wav"
            }
        },
        {
            "Name": "While these tentative criteria are a <font color='#FF0000'>step</font> in the right direction, ",
            "TestID": "control_227",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0089_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0089-step-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0089-step-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0089-step-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0089-step-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0089-step-d0-4_gen.wav"
            }
        },
        {
            "Name": "While these tentative criteria are a step in the right <font color='#FF0000'>direction</font>, ",
            "TestID": "control_228",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0089_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0089-direction-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0089-direction-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0089-direction-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0089-direction-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0089-direction-d1-4_gen.wav"
            }
        },
        {
            "Name": "They seem unduly <font color='#FF0000'>restrictive</font> in continuing to require some manifestation of animus against a government official. ",
            "TestID": "control_229",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0090_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0090-restrictive-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0090-restrictive-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0090-restrictive-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0090-restrictive-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0090-restrictive-d1-4_gen.wav"
            }
        },
        {
            "Name": "They seem unduly restrictive in continuing to require some <font color='#FF0000'>manifestation</font> of animus against a government official. ",
            "TestID": "control_230",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0090_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0090-manifestation-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0090-manifestation-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0090-manifestation-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0090-manifestation-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0090-manifestation-d4-4_gen.wav"
            }
        },
        {
            "Name": "They seem unduly restrictive in continuing to require some manifestation of animus <font color='#FF0000'>against</font> a government official. ",
            "TestID": "control_231",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0090_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0090-against-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0090-against-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0090-against-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0090-against-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0090-against-d2-4_gen.wav"
            }
        },
        {
            "Name": "They seem unduly restrictive in continuing to require some manifestation of animus against a <font color='#FF0000'>government</font> official. ",
            "TestID": "control_232",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0090_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0090-government-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0090-government-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0090-government-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0090-government-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0090-government-d2-4_gen.wav"
            }
        },
        {
            "Name": "Chief rowley <font color='#FF0000'>believed</font> that they would ",
            "TestID": "control_233",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0092_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0092-believed-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0092-believed-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0092-believed-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0092-believed-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0092-believed-d1-4_gen.wav"
            }
        },
        {
            "Name": "Because of oswald's <font color='#FF0000'>demonstrated</font> hostility toward the secretary of the navy in his letter of january thirty, nineteen sixty two. quote, ",
            "TestID": "control_234",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0093_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0093-demonstrated-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0093-demonstrated-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0093-demonstrated-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0093-demonstrated-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0093-demonstrated-d4-4_gen.wav"
            }
        },
        {
            "Name": "Because of oswald's demonstrated hostility <font color='#FF0000'>toward</font> the secretary of the navy in his letter of january thirty, nineteen sixty two. quote, ",
            "TestID": "control_235",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0093_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0093-toward-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0093-toward-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0093-toward-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0093-toward-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0093-toward-d1-4_gen.wav"
            }
        },
        {
            "Name": "Because of oswald's demonstrated hostility toward the secretary of the navy in his letter of january thirty, <font color='#FF0000'>nineteen</font> sixty two. quote, ",
            "TestID": "control_236",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0093_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0093-nineteen-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0093-nineteen-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0093-nineteen-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0093-nineteen-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0093-nineteen-d1-4_gen.wav"
            }
        },
        {
            "Name": "Because of oswald's demonstrated hostility toward the secretary of the navy in his letter of january thirty, nineteen sixty two. <font color='#FF0000'>quote</font>, ",
            "TestID": "control_237",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0093_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0093-quote-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0093-quote-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0093-quote-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0093-quote-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0093-quote-d1-4_gen.wav"
            }
        },
        {
            "Name": "I ask you to look into this case and take the necessary steps to repair the <font color='#FF0000'>damage</font> done to me and my family. end quote. ",
            "TestID": "control_238",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0096_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0096-damage-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0096-damage-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0096-damage-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0096-damage-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0096-damage-d2-4_gen.wav"
            }
        },
        {
            "Name": "I ask you to look into this case and take the necessary steps to repair the damage done to me and my family. end <font color='#FF0000'>quote</font>. ",
            "TestID": "control_239",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0096_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0096-quote-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0096-quote-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0096-quote-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0096-quote-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0096-quote-d0-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>even</font> with the advantage of hindsight, this letter does not appear to express or imply oswald's quote, ",
            "TestID": "control_240",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0097_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0097-even-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0097-even-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0097-even-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0097-even-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0097-even-d3-4_gen.wav"
            }
        },
        {
            "Name": "Even with the <font color='#FF0000'>advantage</font> of hindsight, this letter does not appear to express or imply oswald's quote, ",
            "TestID": "control_241",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0097_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0097-advantage-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0097-advantage-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0097-advantage-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0097-advantage-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0097-advantage-d1-4_gen.wav"
            }
        },
        {
            "Name": "Even with the advantage of <font color='#FF0000'>hindsight</font>, this letter does not appear to express or imply oswald's quote, ",
            "TestID": "control_242",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0097_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0097-hindsight-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0097-hindsight-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0097-hindsight-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0097-hindsight-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0097-hindsight-d0-4_gen.wav"
            }
        },
        {
            "Name": "Even with the advantage of hindsight, this letter does not appear to express or imply oswald's <font color='#FF0000'>quote</font>, ",
            "TestID": "control_243",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0097_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0097-quote-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0097-quote-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0097-quote-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0097-quote-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0097-quote-d1-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>determination</font> to use a means other than legal or peaceful, to satisfy his grievance end quote, within the meaning of the new criteria. ",
            "TestID": "control_244",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0098_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0098-determination-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0098-determination-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0098-determination-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0098-determination-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0098-determination-d1-4_gen.wav"
            }
        },
        {
            "Name": "Determination to use a means other than legal or peaceful, to satisfy his grievance end <font color='#FF0000'>quote</font>, within the meaning of the new criteria. ",
            "TestID": "control_245",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0098_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0098-quote-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0098-quote-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0098-quote-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0098-quote-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0098-quote-d1-4_gen.wav"
            }
        },
        {
            "Name": "Determination to use a means other than legal or peaceful, to satisfy his grievance end quote, <font color='#FF0000'>within</font> the meaning of the new criteria. ",
            "TestID": "control_246",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0098_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0098-within-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0098-within-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0098-within-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0098-within-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0098-within-d2-4_gen.wav"
            }
        },
        {
            "Name": "It is <font color='#FF0000'>apparent</font> that a good deal of further consideration and experimentation will be required before adequate criteria can be framed. ",
            "TestID": "control_247",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0099-apparent-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0099-apparent-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0099-apparent-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0099-apparent-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0099-apparent-d4-4_gen.wav"
            }
        },
        {
            "Name": "It is apparent that a good deal of further <font color='#FF0000'>consideration</font> and experimentation will be required before adequate criteria can be framed. ",
            "TestID": "control_248",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0099-consideration-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0099-consideration-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0099-consideration-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0099-consideration-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0099-consideration-d1-4_gen.wav"
            }
        },
        {
            "Name": "It is apparent that a good deal of further consideration and <font color='#FF0000'>experimentation</font> will be required before adequate criteria can be framed. ",
            "TestID": "control_249",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0099-experimentation-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0099-experimentation-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0099-experimentation-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0099-experimentation-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0099-experimentation-d4-4_gen.wav"
            }
        },
        {
            "Name": "It is apparent that a good deal of further consideration and experimentation will be <font color='#FF0000'>required</font> before adequate criteria can be framed. ",
            "TestID": "control_250",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0099-required-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0099-required-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0099-required-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0099-required-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0099-required-d1-4_gen.wav"
            }
        },
        {
            "Name": "It is apparent that a good deal of further consideration and experimentation will be required before <font color='#FF0000'>adequate</font> criteria can be framed. ",
            "TestID": "control_251",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0099-adequate-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0099-adequate-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0099-adequate-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0099-adequate-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0099-adequate-d2-4_gen.wav"
            }
        },
        {
            "Name": "It is apparent that a good deal of further consideration and experimentation will be required before adequate criteria can be <font color='#FF0000'>framed</font>. ",
            "TestID": "control_252",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0099_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0099-framed-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0099-framed-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0099-framed-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0099-framed-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0099-framed-d1-4_gen.wav"
            }
        },
        {
            "Name": "Were all men who <font color='#FF0000'>acted</font> alone in their criminal acts against our leaders. none had a serious record of prior violence. ",
            "TestID": "control_253",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0103_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0103-acted-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0103-acted-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0103-acted-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0103-acted-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0103-acted-d3-4_gen.wav"
            }
        },
        {
            "Name": "Were all men who acted <font color='#FF0000'>alone</font> in their criminal acts against our leaders. none had a serious record of prior violence. ",
            "TestID": "control_254",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0103_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0103-alone-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0103-alone-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0103-alone-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0103-alone-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0103-alone-d4-4_gen.wav"
            }
        },
        {
            "Name": "Were all men who acted alone in their criminal acts <font color='#FF0000'>against</font> our leaders. none had a serious record of prior violence. ",
            "TestID": "control_255",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0103_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0103-against-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0103-against-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0103-against-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0103-against-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0103-against-d1-4_gen.wav"
            }
        },
        {
            "Name": "Were all men who acted alone in their criminal acts against our leaders. none had a serious <font color='#FF0000'>record</font> of prior violence. ",
            "TestID": "control_256",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0103_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0103-record-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0103-record-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0103-record-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0103-record-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0103-record-d1-4_gen.wav"
            }
        },
        {
            "Name": "Each of them was a failure in his work and in his relations with others, a <font color='#FF0000'>victim</font> of delusions and fancies which led to the conviction ",
            "TestID": "control_257",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0104_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0104-victim-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0104-victim-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0104-victim-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0104-victim-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0104-victim-d2-4_gen.wav"
            }
        },
        {
            "Name": "Each of them was a failure in his work and in his relations with others, a victim of delusions and fancies which led to the <font color='#FF0000'>conviction</font> ",
            "TestID": "control_258",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0104_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0104-conviction-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0104-conviction-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0104-conviction-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0104-conviction-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0104-conviction-d0-4_gen.wav"
            }
        },
        {
            "Name": "That society and its leaders had <font color='#FF0000'>combined</font> to thwart him. it will require every available resource of our government ",
            "TestID": "control_259",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0105_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0105-combined-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0105-combined-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0105-combined-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0105-combined-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0105-combined-d4-4_gen.wav"
            }
        },
        {
            "Name": "That society and its leaders had combined to <font color='#FF0000'>thwart</font> him. it will require every available resource of our government ",
            "TestID": "control_260",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0105_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0105-thwart-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0105-thwart-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0105-thwart-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0105-thwart-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0105-thwart-d3-4_gen.wav"
            }
        },
        {
            "Name": "That society and its leaders had combined to thwart him. it will require every available resource of our <font color='#FF0000'>government</font> ",
            "TestID": "control_261",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0105_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0105-government-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0105-government-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0105-government-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0105-government-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0105-government-d1-4_gen.wav"
            }
        },
        {
            "Name": "To devise a practical <font color='#FF0000'>system</font> which has any reasonable possibility of revealing such malcontents. ",
            "TestID": "control_262",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0106_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0106-system-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0106-system-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0106-system-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0106-system-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0106-system-d1-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>liaison</font> with other agencies regarding intelligence. ",
            "TestID": "control_263",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0107_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0107-liaison-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0107-liaison-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0107-liaison-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0107-liaison-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0107-liaison-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service's liaison with the agencies that supply information to it has been too casual. ",
            "TestID": "control_264",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0108_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0108-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0108-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0108-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0108-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0108-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service's <font color='#FF0000'>liaison</font> with the agencies that supply information to it has been too casual. ",
            "TestID": "control_265",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0108_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0108-liaison-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0108-liaison-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0108-liaison-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0108-liaison-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0108-liaison-d1-4_gen.wav"
            }
        },
        {
            "Name": "The secret service's liaison with the agencies that supply <font color='#FF0000'>information</font> to it has been too casual. ",
            "TestID": "control_266",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0108_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0108-information-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0108-information-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0108-information-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0108-information-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0108-information-d1-4_gen.wav"
            }
        },
        {
            "Name": "Since the <font color='#FF0000'>assassination</font>, the service has recognized that these relationships must be far more formal ",
            "TestID": "control_267",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0109_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0109-assassination-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0109-assassination-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0109-assassination-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0109-assassination-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0109-assassination-d1-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, the service has <font color='#FF0000'>recognized</font> that these relationships must be far more formal ",
            "TestID": "control_268",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0109_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0109-recognized-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0109-recognized-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0109-recognized-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0109-recognized-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0109-recognized-d0-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, the service has recognized that these relationships <font color='#FF0000'>must</font> be far more formal ",
            "TestID": "control_269",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0109_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0109-must-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0109-must-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0109-must-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0109-must-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0109-must-d3-4_gen.wav"
            }
        },
        {
            "Name": "And each agency <font color='#FF0000'>given</font> clear understanding of the assistance which the secret service expects. ",
            "TestID": "control_270",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0110_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0110-given-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0110-given-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0110-given-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0110-given-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0110-given-d2-4_gen.wav"
            }
        },
        {
            "Name": "And each agency given clear understanding of the assistance which the <font color='#FF0000'>secret</font> service expects. ",
            "TestID": "control_271",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0110_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0110-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0110-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0110-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0110-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0110-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "Once the <font color='#FF0000'>secret</font> service has formulated its new standards for collection of information, it should enter into written agreements with each federal agency ",
            "TestID": "control_272",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0111_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0111-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0111-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0111-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0111-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0111-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "Once the secret service has <font color='#FF0000'>formulated</font> its new standards for collection of information, it should enter into written agreements with each federal agency ",
            "TestID": "control_273",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0111_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0111-formulated-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0111-formulated-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0111-formulated-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0111-formulated-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0111-formulated-d1-4_gen.wav"
            }
        },
        {
            "Name": "Once the secret service has formulated its new standards for <font color='#FF0000'>collection</font> of information, it should enter into written agreements with each federal agency ",
            "TestID": "control_274",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0111_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0111-collection-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0111-collection-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0111-collection-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0111-collection-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0111-collection-d2-4_gen.wav"
            }
        },
        {
            "Name": "Once the secret service has formulated its new standards for collection of <font color='#FF0000'>information</font>, it should enter into written agreements with each federal agency ",
            "TestID": "control_275",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0111_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0111-information-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0111-information-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0111-information-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0111-information-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0111-information-d1-4_gen.wav"
            }
        },
        {
            "Name": "Once the secret service has formulated its new standards for collection of information, it should enter into <font color='#FF0000'>written</font> agreements with each federal agency ",
            "TestID": "control_276",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0111_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0111-written-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0111-written-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0111-written-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0111-written-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0111-written-d2-4_gen.wav"
            }
        },
        {
            "Name": "And the leading <font color='#FF0000'>state</font> and local agencies that might be a source of such information. ",
            "TestID": "control_277",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0112_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0112-state-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0112-state-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0112-state-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0112-state-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0112-state-d1-4_gen.wav"
            }
        },
        {
            "Name": "And the leading state and local agencies that might be a source of such <font color='#FF0000'>information</font>. ",
            "TestID": "control_278",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0112_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0112-information-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0112-information-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0112-information-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0112-information-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0112-information-d1-4_gen.wav"
            }
        },
        {
            "Name": "Such agreements should <font color='#FF0000'>describe</font> in detail the information which is sought, the manner in which it will be provided to the secret service, ",
            "TestID": "control_279",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0113_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0113-describe-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0113-describe-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0113-describe-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0113-describe-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0113-describe-d3-4_gen.wav"
            }
        },
        {
            "Name": "Such agreements should describe in detail the <font color='#FF0000'>information</font> which is sought, the manner in which it will be provided to the secret service, ",
            "TestID": "control_280",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0113_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0113-information-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0113-information-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0113-information-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0113-information-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0113-information-d3-4_gen.wav"
            }
        },
        {
            "Name": "Such agreements should describe in detail the information which is sought, the manner in which it will be <font color='#FF0000'>provided</font> to the secret service, ",
            "TestID": "control_281",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0113_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0113-provided-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0113-provided-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0113-provided-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0113-provided-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0113-provided-d3-4_gen.wav"
            }
        },
        {
            "Name": "Such agreements should describe in detail the information which is sought, the manner in which it will be provided to the <font color='#FF0000'>secret</font> service, ",
            "TestID": "control_282",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0113_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0113-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0113-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0113-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0113-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0113-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "And the <font color='#FF0000'>respective</font> responsibilities for any further investigation that may be required. ",
            "TestID": "control_283",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0114_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0114-respective-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0114-respective-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0114-respective-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0114-respective-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0114-respective-d3-4_gen.wav"
            }
        },
        {
            "Name": "And the respective responsibilities for any further <font color='#FF0000'>investigation</font> that may be required. ",
            "TestID": "control_284",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0114_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0114-investigation-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0114-investigation-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0114-investigation-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0114-investigation-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0114-investigation-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the respective responsibilities for any further investigation that may be <font color='#FF0000'>required</font>. ",
            "TestID": "control_285",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0114_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0114-required-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0114-required-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0114-required-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0114-required-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0114-required-d1-4_gen.wav"
            }
        },
        {
            "Name": "This is especially necessary with <font color='#FF0000'>regard</font> to the fbi and cia, ",
            "TestID": "control_286",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0115_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0115-regard-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0115-regard-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0115-regard-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0115-regard-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0115-regard-d3-4_gen.wav"
            }
        },
        {
            "Name": "Which carry the major responsibility for supplying <font color='#FF0000'>information</font> about potential threats, ",
            "TestID": "control_287",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0116_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0116-information-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0116-information-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0116-information-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0116-information-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0116-information-d1-4_gen.wav"
            }
        },
        {
            "Name": "Which carry the major responsibility for supplying information <font color='#FF0000'>about</font> potential threats, ",
            "TestID": "control_288",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0116_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0116-about-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0116-about-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0116-about-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0116-about-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0116-about-d0-4_gen.wav"
            }
        },
        {
            "Name": "Particularly those arising from <font color='#FF0000'>organized</font> groups, within their special jurisdiction. ",
            "TestID": "control_289",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0117_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0117-organized-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0117-organized-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0117-organized-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0117-organized-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0117-organized-d4-4_gen.wav"
            }
        },
        {
            "Name": "Particularly those arising from organized groups, <font color='#FF0000'>within</font> their special jurisdiction. ",
            "TestID": "control_290",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0117_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0117-within-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0117-within-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0117-within-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0117-within-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0117-within-d2-4_gen.wav"
            }
        },
        {
            "Name": "Particularly those arising from organized groups, within their special <font color='#FF0000'>jurisdiction</font>. ",
            "TestID": "control_291",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0117_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0117-jurisdiction-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0117-jurisdiction-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0117-jurisdiction-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0117-jurisdiction-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0117-jurisdiction-d1-4_gen.wav"
            }
        },
        {
            "Name": "Since these agencies are already <font color='#FF0000'>obliged</font> constantly to evaluate the activities of such groups, ",
            "TestID": "control_292",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0118_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0118-obliged-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0118-obliged-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0118-obliged-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0118-obliged-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0118-obliged-d1-4_gen.wav"
            }
        },
        {
            "Name": "Since these agencies are already obliged constantly to <font color='#FF0000'>evaluate</font> the activities of such groups, ",
            "TestID": "control_293",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0118_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0118-evaluate-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0118-evaluate-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0118-evaluate-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0118-evaluate-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0118-evaluate-d3-4_gen.wav"
            }
        },
        {
            "Name": "They should be responsible for advising the <font color='#FF0000'>secret</font> service if information develops indicating the existence of an assassination plot ",
            "TestID": "control_294",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0119_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0119-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0119-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0119-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0119-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0119-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "They should be responsible for advising the secret service if <font color='#FF0000'>information</font> develops indicating the existence of an assassination plot ",
            "TestID": "control_295",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0119_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0119-information-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0119-information-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0119-information-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0119-information-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0119-information-d4-4_gen.wav"
            }
        },
        {
            "Name": "They should be responsible for advising the secret service if information develops indicating the existence of an <font color='#FF0000'>assassination</font> plot ",
            "TestID": "control_296",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0119_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0119-assassination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0119-assassination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0119-assassination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0119-assassination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0119-assassination-d4-4_gen.wav"
            }
        },
        {
            "Name": "They should be responsible for advising the secret service if information develops indicating the existence of an assassination <font color='#FF0000'>plot</font> ",
            "TestID": "control_297",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0119_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0119-plot-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0119-plot-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0119-plot-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0119-plot-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0119-plot-d0-4_gen.wav"
            }
        },
        {
            "Name": "And for reporting such events as a <font color='#FF0000'>change</font> in leadership or dogma which indicate that the group may present a danger to the president. ",
            "TestID": "control_298",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0120_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0120-change-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0120-change-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0120-change-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0120-change-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0120-change-d2-4_gen.wav"
            }
        },
        {
            "Name": "And for reporting such events as a change in <font color='#FF0000'>leadership</font> or dogma which indicate that the group may present a danger to the president. ",
            "TestID": "control_299",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0120_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0120-leadership-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0120-leadership-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0120-leadership-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0120-leadership-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0120-leadership-d0-4_gen.wav"
            }
        },
        {
            "Name": "And for reporting such events as a change in leadership or dogma which <font color='#FF0000'>indicate</font> that the group may present a danger to the president. ",
            "TestID": "control_300",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0120_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0120-indicate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0120-indicate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0120-indicate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0120-indicate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0120-indicate-d4-4_gen.wav"
            }
        },
        {
            "Name": "And for reporting such events as a change in leadership or dogma which indicate that the <font color='#FF0000'>group</font> may present a danger to the president. ",
            "TestID": "control_301",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0120_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0120-group-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0120-group-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0120-group-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0120-group-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0120-group-d2-4_gen.wav"
            }
        },
        {
            "Name": "And for reporting such events as a change in leadership or dogma which indicate that the group may <font color='#FF0000'>present</font> a danger to the president. ",
            "TestID": "control_302",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0120_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0120-present-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0120-present-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0120-present-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0120-present-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0120-present-d0-4_gen.wav"
            }
        },
        {
            "Name": "And for reporting such events as a change in leadership or dogma which indicate that the group may present a danger to the <font color='#FF0000'>president</font>. ",
            "TestID": "control_303",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0120_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0120-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0120-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0120-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0120-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0120-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>detailed</font> formal agreements embodying these arrangements should be worked out between the secret service and both of these agencies. ",
            "TestID": "control_304",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0121_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0121-detailed-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0121-detailed-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0121-detailed-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0121-detailed-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0121-detailed-d2-4_gen.wav"
            }
        },
        {
            "Name": "Detailed formal agreements embodying these arrangements should be <font color='#FF0000'>worked</font> out between the secret service and both of these agencies. ",
            "TestID": "control_305",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0121_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0121-worked-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0121-worked-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0121-worked-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0121-worked-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0121-worked-d2-4_gen.wav"
            }
        },
        {
            "Name": "Detailed formal agreements embodying these arrangements should be worked out <font color='#FF0000'>between</font> the secret service and both of these agencies. ",
            "TestID": "control_306",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0121_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0121-between-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0121-between-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0121-between-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0121-between-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0121-between-d1-4_gen.wav"
            }
        },
        {
            "Name": "Detailed formal agreements embodying these arrangements should be worked out between the <font color='#FF0000'>secret</font> service and both of these agencies. ",
            "TestID": "control_307",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0121_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0121-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0121-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0121-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0121-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0121-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "It should be made clear that the <font color='#FF0000'>secret</font> service will in no way seek to duplicate the intelligence ",
            "TestID": "control_308",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0122_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0122-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0122-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0122-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0122-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0122-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "It should be made clear that the secret service will in no way seek to <font color='#FF0000'>duplicate</font> the intelligence ",
            "TestID": "control_309",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0122_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0122-duplicate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0122-duplicate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0122-duplicate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0122-duplicate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0122-duplicate-d4-4_gen.wav"
            }
        },
        {
            "Name": "And <font color='#FF0000'>investigative</font> capabilities of the agencies now operating in this field but will continue ",
            "TestID": "control_310",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0123_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0123-investigative-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0123-investigative-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0123-investigative-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0123-investigative-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0123-investigative-d4-4_gen.wav"
            }
        },
        {
            "Name": "And investigative capabilities of the agencies now operating in this <font color='#FF0000'>field</font> but will continue ",
            "TestID": "control_311",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0123_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0123-field-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0123-field-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0123-field-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0123-field-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0123-field-d4-4_gen.wav"
            }
        },
        {
            "Name": "To use the data <font color='#FF0000'>developed</font> by these agencies to carry out its special duties. ",
            "TestID": "control_312",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0124_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0124-developed-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0124-developed-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0124-developed-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0124-developed-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0124-developed-d1-4_gen.wav"
            }
        },
        {
            "Name": "Once experience has been <font color='#FF0000'>gained</font> in implementing such agreements with the federal and leading state and local agencies, ",
            "TestID": "control_313",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0125_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0125-gained-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0125-gained-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0125-gained-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0125-gained-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0125-gained-d0-4_gen.wav"
            }
        },
        {
            "Name": "Once experience has been gained in implementing such agreements with the federal and leading <font color='#FF0000'>state</font> and local agencies, ",
            "TestID": "control_314",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0125_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0125-state-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0125-state-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0125-state-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0125-state-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0125-state-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service, through its field offices, ",
            "TestID": "control_315",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0126_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0126-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0126-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0126-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0126-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0126-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service, through its <font color='#FF0000'>field</font> offices, ",
            "TestID": "control_316",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0126_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0126-field-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0126-field-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0126-field-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0126-field-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0126-field-d3-4_gen.wav"
            }
        },
        {
            "Name": "Should <font color='#FF0000'>negotiate</font> similar arrangements with such other state and local law enforcement agencies as may provide meaningful assistance. ",
            "TestID": "control_317",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0127_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0127-negotiate-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0127-negotiate-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0127-negotiate-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0127-negotiate-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0127-negotiate-d3-4_gen.wav"
            }
        },
        {
            "Name": "Should negotiate similar arrangements with such other <font color='#FF0000'>state</font> and local law enforcement agencies as may provide meaningful assistance. ",
            "TestID": "control_318",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0127_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0127-state-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0127-state-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0127-state-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0127-state-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0127-state-d0-4_gen.wav"
            }
        },
        {
            "Name": "Should negotiate similar arrangements with such other state and local law <font color='#FF0000'>enforcement</font> agencies as may provide meaningful assistance. ",
            "TestID": "control_319",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0127_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0127-enforcement-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0127-enforcement-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0127-enforcement-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0127-enforcement-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0127-enforcement-d2-4_gen.wav"
            }
        },
        {
            "Name": "Should negotiate similar arrangements with such other state and local law enforcement agencies as may <font color='#FF0000'>provide</font> meaningful assistance. ",
            "TestID": "control_320",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0127_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0127-provide-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0127-provide-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0127-provide-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0127-provide-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0127-provide-d3-4_gen.wav"
            }
        },
        {
            "Name": "Much useful <font color='#FF0000'>information</font> will come to the attention of local law enforcement agencies in the regular course of their activities, ",
            "TestID": "control_321",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0128_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0128-information-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0128-information-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0128-information-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0128-information-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0128-information-d0-4_gen.wav"
            }
        },
        {
            "Name": "Much useful information will come to the <font color='#FF0000'>attention</font> of local law enforcement agencies in the regular course of their activities, ",
            "TestID": "control_322",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0128_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0128-attention-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0128-attention-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0128-attention-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0128-attention-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0128-attention-d4-4_gen.wav"
            }
        },
        {
            "Name": "Much useful information will come to the attention of local law <font color='#FF0000'>enforcement</font> agencies in the regular course of their activities, ",
            "TestID": "control_323",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0128_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0128-enforcement-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0128-enforcement-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0128-enforcement-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0128-enforcement-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0128-enforcement-d0-4_gen.wav"
            }
        },
        {
            "Name": "And this source should not be <font color='#FF0000'>neglected</font> by undue concentration on relationships with other federal agencies. ",
            "TestID": "control_324",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0129_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0129-neglected-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0129-neglected-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0129-neglected-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0129-neglected-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0129-neglected-d0-4_gen.wav"
            }
        },
        {
            "Name": "And this source should not be neglected by undue <font color='#FF0000'>concentration</font> on relationships with other federal agencies. ",
            "TestID": "control_325",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0129_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0129-concentration-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0129-concentration-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0129-concentration-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0129-concentration-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0129-concentration-d4-4_gen.wav"
            }
        },
        {
            "Name": "Unless a <font color='#FF0000'>system</font> is established for the frequent formal review of activities thereunder. in this regard ",
            "TestID": "control_326",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0131_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0131-system-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0131-system-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0131-system-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0131-system-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0131-system-d4-4_gen.wav"
            }
        },
        {
            "Name": "Unless a system is <font color='#FF0000'>established</font> for the frequent formal review of activities thereunder. in this regard ",
            "TestID": "control_327",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0131_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0131-established-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0131-established-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0131-established-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0131-established-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0131-established-d1-4_gen.wav"
            }
        },
        {
            "Name": "Unless a system is established for the <font color='#FF0000'>frequent</font> formal review of activities thereunder. in this regard ",
            "TestID": "control_328",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0131_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0131-frequent-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0131-frequent-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0131-frequent-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0131-frequent-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0131-frequent-d3-4_gen.wav"
            }
        },
        {
            "Name": "Unless a system is established for the frequent formal review of activities thereunder. in this <font color='#FF0000'>regard</font> ",
            "TestID": "control_329",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0131_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0131-regard-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0131-regard-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0131-regard-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0131-regard-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0131-regard-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> notes with approval several recent measures taken and proposed by the secret service to improve its liaison arrangements. ",
            "TestID": "control_330",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0132-commission-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0132-commission-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0132-commission-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0132-commission-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0132-commission-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission notes with approval several <font color='#FF0000'>recent</font> measures taken and proposed by the secret service to improve its liaison arrangements. ",
            "TestID": "control_331",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0132-recent-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0132-recent-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0132-recent-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0132-recent-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0132-recent-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission notes with approval several recent measures <font color='#FF0000'>taken</font> and proposed by the secret service to improve its liaison arrangements. ",
            "TestID": "control_332",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0132-taken-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0132-taken-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0132-taken-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0132-taken-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0132-taken-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission notes with approval several recent measures taken and <font color='#FF0000'>proposed</font> by the secret service to improve its liaison arrangements. ",
            "TestID": "control_333",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0132-proposed-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0132-proposed-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0132-proposed-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0132-proposed-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0132-proposed-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission notes with approval several recent measures taken and proposed by the <font color='#FF0000'>secret</font> service to improve its liaison arrangements. ",
            "TestID": "control_334",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0132-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0132-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0132-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0132-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0132-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "The commission notes with approval several recent measures taken and proposed by the secret service to <font color='#FF0000'>improve</font> its liaison arrangements. ",
            "TestID": "control_335",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0132-improve-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0132-improve-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0132-improve-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0132-improve-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0132-improve-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission notes with approval several recent measures taken and proposed by the secret service to improve its <font color='#FF0000'>liaison</font> arrangements. ",
            "TestID": "control_336",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0132_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0132-liaison-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0132-liaison-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0132-liaison-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0132-liaison-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0132-liaison-d1-4_gen.wav"
            }
        },
        {
            "Name": "According to secretary <font color='#FF0000'>dillon</font>, ",
            "TestID": "control_337",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0135_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0135-dillon-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0135-dillon-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0135-dillon-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0135-dillon-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0135-dillon-d0-4_gen.wav"
            }
        },
        {
            "Name": "The committee will <font color='#FF0000'>include</font> representatives of the president's office of science and technology, department of defense, cia, ",
            "TestID": "control_338",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0136_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0136-include-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0136-include-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0136-include-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0136-include-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0136-include-d4-4_gen.wav"
            }
        },
        {
            "Name": "The committee will include representatives of the president's office of science and technology, <font color='#FF0000'>department</font> of defense, cia, ",
            "TestID": "control_339",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0136_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0136-department-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0136-department-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0136-department-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0136-department-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0136-department-d4-4_gen.wav"
            }
        },
        {
            "Name": "Fbi, and the <font color='#FF0000'>secret</font> service. ",
            "TestID": "control_340",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0137_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0137-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0137-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0137-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0137-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0137-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "In <font color='#FF0000'>addition</font>, the department of the treasury has requested five additional agents for its protective research section ",
            "TestID": "control_341",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0138_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0138-addition-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0138-addition-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0138-addition-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0138-addition-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0138-addition-d4-4_gen.wav"
            }
        },
        {
            "Name": "In addition, the <font color='#FF0000'>department</font> of the treasury has requested five additional agents for its protective research section ",
            "TestID": "control_342",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0138_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0138-department-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0138-department-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0138-department-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0138-department-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0138-department-d3-4_gen.wav"
            }
        },
        {
            "Name": "In addition, the department of the treasury has <font color='#FF0000'>requested</font> five additional agents for its protective research section ",
            "TestID": "control_343",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0138_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0138-requested-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0138-requested-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0138-requested-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0138-requested-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0138-requested-d2-4_gen.wav"
            }
        },
        {
            "Name": "In addition, the department of the treasury has requested five additional agents for its <font color='#FF0000'>protective</font> research section ",
            "TestID": "control_344",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0138_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0138-protective-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0138-protective-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0138-protective-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0138-protective-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0138-protective-d4-4_gen.wav"
            }
        },
        {
            "Name": "In addition, the department of the treasury has requested five additional agents for its protective <font color='#FF0000'>research</font> section ",
            "TestID": "control_345",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0138_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0138-research-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0138-research-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0138-research-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0138-research-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0138-research-d1-4_gen.wav"
            }
        },
        {
            "Name": "In addition, the department of the treasury has requested five additional agents for its protective research <font color='#FF0000'>section</font> ",
            "TestID": "control_346",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0138_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0138-section-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0138-section-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0138-section-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0138-section-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0138-section-d4-4_gen.wav"
            }
        },
        {
            "Name": "To serve as <font color='#FF0000'>liaison</font> officers with law enforcement and intelligence agencies. on the basis of the department's review during the past several months, ",
            "TestID": "control_347",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0139_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0139-liaison-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0139-liaison-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0139-liaison-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0139-liaison-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0139-liaison-d4-4_gen.wav"
            }
        },
        {
            "Name": "To serve as liaison officers with law <font color='#FF0000'>enforcement</font> and intelligence agencies. on the basis of the department's review during the past several months, ",
            "TestID": "control_348",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0139_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0139-enforcement-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0139-enforcement-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0139-enforcement-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0139-enforcement-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0139-enforcement-d2-4_gen.wav"
            }
        },
        {
            "Name": "To serve as liaison officers with law enforcement and intelligence agencies. on the basis of the department's review during the <font color='#FF0000'>past</font> several months, ",
            "TestID": "control_349",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0139_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0139-past-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0139-past-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0139-past-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0139-past-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0139-past-d2-4_gen.wav"
            }
        },
        {
            "Name": "Secretary <font color='#FF0000'>dillon</font> testified that the use of such liaison officers is the only effective way to insure that adequate liaison is maintained. ",
            "TestID": "control_350",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0140-dillon-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0140-dillon-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0140-dillon-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0140-dillon-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0140-dillon-d1-4_gen.wav"
            }
        },
        {
            "Name": "Secretary dillon <font color='#FF0000'>testified</font> that the use of such liaison officers is the only effective way to insure that adequate liaison is maintained. ",
            "TestID": "control_351",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0140-testified-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0140-testified-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0140-testified-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0140-testified-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0140-testified-d0-4_gen.wav"
            }
        },
        {
            "Name": "Secretary dillon testified that the use of such <font color='#FF0000'>liaison</font> officers is the only effective way to insure that adequate <font color='#FF0000'>liaison</font> is maintained. ",
            "TestID": "control_352",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d2-4_gen.wav"
            }
        },
        {
            "Name": "Secretary dillon testified that the use of such liaison officers is the only <font color='#FF0000'>effective</font> way to insure that adequate liaison is maintained. ",
            "TestID": "control_353",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0140-effective-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0140-effective-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0140-effective-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0140-effective-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0140-effective-d2-4_gen.wav"
            }
        },
        {
            "Name": "Secretary dillon testified that the use of such liaison officers is the only effective way to insure that <font color='#FF0000'>adequate</font> liaison is maintained. ",
            "TestID": "control_354",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0140-adequate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0140-adequate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0140-adequate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0140-adequate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0140-adequate-d4-4_gen.wav"
            }
        },
        {
            "Name": "Secretary dillon testified that the use of such <font color='#FF0000'>liaison</font> officers is the only effective way to insure that adequate <font color='#FF0000'>liaison</font> is maintained. ",
            "TestID": "control_355",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0140-liaison-d1-4_gen.wav"
            }
        },
        {
            "Name": "Secretary dillon testified that the use of such liaison officers is the only effective way to insure that adequate liaison is <font color='#FF0000'>maintained</font>. ",
            "TestID": "control_356",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0140_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0140-maintained-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0140-maintained-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0140-maintained-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0140-maintained-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0140-maintained-d0-4_gen.wav"
            }
        },
        {
            "Name": "As a beginning <font color='#FF0000'>step</font> to improve liaison with local law enforcement officials, the secret service on august twenty six nineteen sixty four, ",
            "TestID": "control_357",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0141-step-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0141-step-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0141-step-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0141-step-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0141-step-d1-4_gen.wav"
            }
        },
        {
            "Name": "As a beginning step to <font color='#FF0000'>improve</font> liaison with local law enforcement officials, the secret service on august twenty six nineteen sixty four, ",
            "TestID": "control_358",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0141-improve-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0141-improve-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0141-improve-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0141-improve-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0141-improve-d3-4_gen.wav"
            }
        },
        {
            "Name": "As a beginning step to improve <font color='#FF0000'>liaison</font> with local law enforcement officials, the secret service on august twenty six nineteen sixty four, ",
            "TestID": "control_359",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0141-liaison-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0141-liaison-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0141-liaison-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0141-liaison-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0141-liaison-d4-4_gen.wav"
            }
        },
        {
            "Name": "As a beginning step to improve liaison with local law <font color='#FF0000'>enforcement</font> officials, the secret service on august twenty six nineteen sixty four, ",
            "TestID": "control_360",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0141-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0141-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0141-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0141-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0141-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "As a beginning step to improve liaison with local law enforcement officials, the <font color='#FF0000'>secret</font> service on august twenty six nineteen sixty four, ",
            "TestID": "control_361",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0141-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0141-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0141-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0141-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0141-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "As a beginning step to improve liaison with local law enforcement officials, the secret service on <font color='#FF0000'>august</font> twenty six nineteen sixty four, ",
            "TestID": "control_362",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0141-august-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0141-august-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0141-august-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0141-august-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0141-august-d2-4_gen.wav"
            }
        },
        {
            "Name": "As a beginning step to improve liaison with local law enforcement officials, the secret service on august twenty six <font color='#FF0000'>nineteen</font> sixty four, ",
            "TestID": "control_363",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0141_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0141-nineteen-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0141-nineteen-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0141-nineteen-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0141-nineteen-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0141-nineteen-d2-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>directed</font> its field representatives to send a form request for intelligence information to all local, ",
            "TestID": "control_364",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0142-directed-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0142-directed-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0142-directed-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0142-directed-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0142-directed-d3-4_gen.wav"
            }
        },
        {
            "Name": "Directed its <font color='#FF0000'>field</font> representatives to send a form request for intelligence information to all local, ",
            "TestID": "control_365",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0142-field-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0142-field-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0142-field-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0142-field-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0142-field-d3-4_gen.wav"
            }
        },
        {
            "Name": "Directed its field representatives to <font color='#FF0000'>send</font> a form request for intelligence information to all local, ",
            "TestID": "control_366",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0142-send-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0142-send-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0142-send-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0142-send-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0142-send-d3-4_gen.wav"
            }
        },
        {
            "Name": "Directed its field representatives to send a <font color='#FF0000'>form</font> request for intelligence information to all local, ",
            "TestID": "control_367",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0142-form-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0142-form-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0142-form-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0142-form-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0142-form-d2-4_gen.wav"
            }
        },
        {
            "Name": "Directed its field representatives to send a form <font color='#FF0000'>request</font> for intelligence information to all local, ",
            "TestID": "control_368",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0142-request-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0142-request-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0142-request-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0142-request-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0142-request-d0-4_gen.wav"
            }
        },
        {
            "Name": "Directed its field representatives to send a form request for intelligence <font color='#FF0000'>information</font> to all local, ",
            "TestID": "control_369",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0142_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0142-information-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0142-information-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0142-information-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0142-information-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0142-information-d0-4_gen.wav"
            }
        },
        {
            "Name": "County and <font color='#FF0000'>state</font> law enforcement agencies in their districts. ",
            "TestID": "control_370",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0143_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0143-state-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0143-state-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0143-state-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0143-state-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0143-state-d2-4_gen.wav"
            }
        },
        {
            "Name": "County and state law <font color='#FF0000'>enforcement</font> agencies in their districts. ",
            "TestID": "control_371",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0143_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0143-enforcement-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0143-enforcement-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0143-enforcement-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0143-enforcement-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0143-enforcement-d2-4_gen.wav"
            }
        },
        {
            "Name": "Each of these efforts appears <font color='#FF0000'>sound</font>, ",
            "TestID": "control_372",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0144_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0144-sound-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0144-sound-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0144-sound-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0144-sound-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0144-sound-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the <font color='#FF0000'>commission</font> recommends that these and the other measures suggested by the <font color='#FF0000'>commission</font> be pursued vigorously by secret service. ",
            "TestID": "control_373",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0145_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0145-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0145-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0145-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0145-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0145-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "And the commission recommends that these and the other measures <font color='#FF0000'>suggested</font> by the commission be pursued vigorously by secret service. ",
            "TestID": "control_374",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0145_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0145-suggested-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0145-suggested-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0145-suggested-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0145-suggested-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0145-suggested-d1-4_gen.wav"
            }
        },
        {
            "Name": "And the <font color='#FF0000'>commission</font> recommends that these and the other measures suggested by the <font color='#FF0000'>commission</font> be pursued vigorously by secret service. ",
            "TestID": "control_375",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0145_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0145-commission-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0145-commission-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0145-commission-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0145-commission-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0145-commission-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the commission recommends that these and the other measures suggested by the commission be <font color='#FF0000'>pursued</font> vigorously by secret service. ",
            "TestID": "control_376",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0145_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0145-pursued-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0145-pursued-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0145-pursued-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0145-pursued-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0145-pursued-d2-4_gen.wav"
            }
        },
        {
            "Name": "And the commission recommends that these and the other measures suggested by the commission be pursued vigorously by <font color='#FF0000'>secret</font> service. ",
            "TestID": "control_377",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0145_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0145-secret-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0145-secret-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0145-secret-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0145-secret-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0145-secret-d0-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>automatic</font> data processing ",
            "TestID": "control_378",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0146_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0146-automatic-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0146-automatic-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0146-automatic-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0146-automatic-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0146-automatic-d3-4_gen.wav"
            }
        },
        {
            "Name": "Unless the <font color='#FF0000'>secret</font> service is able to deal rapidly and accurately with a growing body of data, ",
            "TestID": "control_379",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0147_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0147-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0147-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0147-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0147-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0147-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>increased</font> information supplied by other agencies will be wasted. ",
            "TestID": "control_380",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0148_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0148-increased-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0148-increased-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0148-increased-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0148-increased-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0148-increased-d3-4_gen.wav"
            }
        },
        {
            "Name": "The increased <font color='#FF0000'>information</font> supplied by other agencies will be wasted. ",
            "TestID": "control_381",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0148_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0148-information-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0148-information-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0148-information-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0148-information-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0148-information-d4-4_gen.wav"
            }
        },
        {
            "Name": "The increased information <font color='#FF0000'>supplied</font> by other agencies will be wasted. ",
            "TestID": "control_382",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0148_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0148-supplied-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0148-supplied-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0148-supplied-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0148-supplied-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0148-supplied-d2-4_gen.wav"
            }
        },
        {
            "Name": "The increased information supplied by other agencies will be <font color='#FF0000'>wasted</font>. ",
            "TestID": "control_383",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0148_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0148-wasted-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0148-wasted-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0148-wasted-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0148-wasted-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0148-wasted-d0-4_gen.wav"
            }
        },
        {
            "Name": "Prs <font color='#FF0000'>must</font> develop the capacity to classify its subjects on a more sophisticated basis than the present geographic breakdown. ",
            "TestID": "control_384",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0149_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0149-must-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0149-must-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0149-must-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0149-must-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0149-must-d3-4_gen.wav"
            }
        },
        {
            "Name": "Prs must <font color='#FF0000'>develop</font> the capacity to classify its subjects on a more sophisticated basis than the present geographic breakdown. ",
            "TestID": "control_385",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0149_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0149-develop-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0149-develop-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0149-develop-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0149-develop-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0149-develop-d0-4_gen.wav"
            }
        },
        {
            "Name": "Prs must develop the capacity to classify its subjects on a more <font color='#FF0000'>sophisticated</font> basis than the present geographic breakdown. ",
            "TestID": "control_386",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0149_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0149-sophisticated-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0149-sophisticated-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0149-sophisticated-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0149-sophisticated-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0149-sophisticated-d4-4_gen.wav"
            }
        },
        {
            "Name": "Prs must develop the capacity to classify its subjects on a more sophisticated basis than the <font color='#FF0000'>present</font> geographic breakdown. ",
            "TestID": "control_387",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0149_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0149-present-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0149-present-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0149-present-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0149-present-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0149-present-d3-4_gen.wav"
            }
        },
        {
            "Name": "Prs must develop the capacity to classify its subjects on a more sophisticated basis than the present <font color='#FF0000'>geographic</font> breakdown. ",
            "TestID": "control_388",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0149_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0149-geographic-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0149-geographic-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0149-geographic-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0149-geographic-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0149-geographic-d4-4_gen.wav"
            }
        },
        {
            "Name": "Prs must develop the capacity to classify its subjects on a more sophisticated basis than the present geographic <font color='#FF0000'>breakdown</font>. ",
            "TestID": "control_389",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0149_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0149-breakdown-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0149-breakdown-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0149-breakdown-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0149-breakdown-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0149-breakdown-d1-4_gen.wav"
            }
        },
        {
            "Name": "Its <font color='#FF0000'>present</font> manual filing system is obsolete, ",
            "TestID": "control_390",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0150_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0150-present-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0150-present-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0150-present-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0150-present-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0150-present-d3-4_gen.wav"
            }
        },
        {
            "Name": "Its present manual filing <font color='#FF0000'>system</font> is obsolete, ",
            "TestID": "control_391",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0150_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0150-system-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0150-system-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0150-system-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0150-system-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0150-system-d1-4_gen.wav"
            }
        },
        {
            "Name": "Its present manual filing system is <font color='#FF0000'>obsolete</font>, ",
            "TestID": "control_392",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0150_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0150-obsolete-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0150-obsolete-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0150-obsolete-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0150-obsolete-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0150-obsolete-d0-4_gen.wav"
            }
        },
        {
            "Name": "It makes no use of the <font color='#FF0000'>recent</font> developments in automatic data processing which are widely used in the business world and in other government offices. ",
            "TestID": "control_393",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0151_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0151-recent-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0151-recent-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0151-recent-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0151-recent-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0151-recent-d3-4_gen.wav"
            }
        },
        {
            "Name": "It makes no use of the recent developments in <font color='#FF0000'>automatic</font> data processing which are widely used in the business world and in other government offices. ",
            "TestID": "control_394",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0151_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0151-automatic-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0151-automatic-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0151-automatic-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0151-automatic-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0151-automatic-d1-4_gen.wav"
            }
        },
        {
            "Name": "It makes no use of the recent developments in automatic data processing which are widely <font color='#FF0000'>used</font> in the business world and in other government offices. ",
            "TestID": "control_395",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0151_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0151-used-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0151-used-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0151-used-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0151-used-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0151-used-d1-4_gen.wav"
            }
        },
        {
            "Name": "It makes no use of the recent developments in automatic data processing which are widely used in the business <font color='#FF0000'>world</font> and in other government offices. ",
            "TestID": "control_396",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0151_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0151-world-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0151-world-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0151-world-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0151-world-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0151-world-d2-4_gen.wav"
            }
        },
        {
            "Name": "It makes no use of the recent developments in automatic data processing which are widely used in the business world and in other <font color='#FF0000'>government</font> offices. ",
            "TestID": "control_397",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0151_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0151-government-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0151-government-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0151-government-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0151-government-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0151-government-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service and the department of the treasury now recognize this critical need. ",
            "TestID": "control_398",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0152_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0152-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0152-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0152-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0152-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0152-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service and the <font color='#FF0000'>department</font> of the treasury now recognize this critical need. ",
            "TestID": "control_399",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0152_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0152-department-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0152-department-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0152-department-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0152-department-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0152-department-d2-4_gen.wav"
            }
        },
        {
            "Name": "In the planning <font color='#FF0000'>document</font> currently under review by the bureau of the budget, the department recommends that it be permitted to hire five qualified persons quote, ",
            "TestID": "control_400",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0153_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0153-document-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0153-document-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0153-document-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0153-document-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0153-document-d4-4_gen.wav"
            }
        },
        {
            "Name": "In the planning document currently under review by the bureau of the <font color='#FF0000'>budget</font>, the department recommends that it be permitted to hire five qualified persons quote, ",
            "TestID": "control_401",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0153_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0153-budget-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0153-budget-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0153-budget-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0153-budget-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0153-budget-d1-4_gen.wav"
            }
        },
        {
            "Name": "In the planning document currently under review by the bureau of the budget, the <font color='#FF0000'>department</font> recommends that it be permitted to hire five qualified persons quote, ",
            "TestID": "control_402",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0153_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0153-department-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0153-department-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0153-department-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0153-department-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0153-department-d3-4_gen.wav"
            }
        },
        {
            "Name": "In the planning document currently under review by the bureau of the budget, the department recommends that it be <font color='#FF0000'>permitted</font> to hire five qualified persons quote, ",
            "TestID": "control_403",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0153_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0153-permitted-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0153-permitted-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0153-permitted-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0153-permitted-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0153-permitted-d3-4_gen.wav"
            }
        },
        {
            "Name": "In the planning document currently under review by the bureau of the budget, the department recommends that it be permitted to hire five <font color='#FF0000'>qualified</font> persons quote, ",
            "TestID": "control_404",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0153_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0153-qualified-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0153-qualified-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0153-qualified-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0153-qualified-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0153-qualified-d2-4_gen.wav"
            }
        },
        {
            "Name": "In the planning document currently under review by the bureau of the budget, the department recommends that it be permitted to hire five qualified persons <font color='#FF0000'>quote</font>, ",
            "TestID": "control_405",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0153_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0153-quote-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0153-quote-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0153-quote-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0153-quote-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0153-quote-d3-4_gen.wav"
            }
        },
        {
            "Name": "To <font color='#FF0000'>plan</font> and develop a workable and efficient automated file and retrieval system end quote. ",
            "TestID": "control_406",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0154_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0154-plan-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0154-plan-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0154-plan-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0154-plan-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0154-plan-d3-4_gen.wav"
            }
        },
        {
            "Name": "To plan and <font color='#FF0000'>develop</font> a workable and efficient automated file and retrieval system end quote. ",
            "TestID": "control_407",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0154_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0154-develop-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0154-develop-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0154-develop-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0154-develop-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0154-develop-d2-4_gen.wav"
            }
        },
        {
            "Name": "To plan and develop a workable and <font color='#FF0000'>efficient</font> automated file and retrieval system end quote. ",
            "TestID": "control_408",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0154_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0154-efficient-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0154-efficient-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0154-efficient-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0154-efficient-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0154-efficient-d3-4_gen.wav"
            }
        },
        {
            "Name": "To plan and develop a workable and efficient <font color='#FF0000'>automated</font> file and retrieval system end quote. ",
            "TestID": "control_409",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0154_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0154-automated-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0154-automated-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0154-automated-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0154-automated-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0154-automated-d3-4_gen.wav"
            }
        },
        {
            "Name": "To plan and develop a workable and efficient automated file and retrieval <font color='#FF0000'>system</font> end quote. ",
            "TestID": "control_410",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0154_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0154-system-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0154-system-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0154-system-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0154-system-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0154-system-d1-4_gen.wav"
            }
        },
        {
            "Name": "To plan and develop a workable and efficient automated file and retrieval system end <font color='#FF0000'>quote</font>. ",
            "TestID": "control_411",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0154_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0154-quote-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0154-quote-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0154-quote-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0154-quote-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0154-quote-d0-4_gen.wav"
            }
        },
        {
            "Name": "Also the <font color='#FF0000'>department</font> requests the sum of one hundred thousand dollars to conduct a detailed feasibility study, ",
            "TestID": "control_412",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0155_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0155-department-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0155-department-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0155-department-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0155-department-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0155-department-d3-4_gen.wav"
            }
        },
        {
            "Name": "Also the department requests the sum of one <font color='#FF0000'>hundred</font> thousand dollars to conduct a detailed feasibility study, ",
            "TestID": "control_413",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0155_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0155-hundred-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0155-hundred-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0155-hundred-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0155-hundred-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0155-hundred-d0-4_gen.wav"
            }
        },
        {
            "Name": "Also the department requests the sum of one hundred <font color='#FF0000'>thousand</font> dollars to conduct a detailed feasibility study, ",
            "TestID": "control_414",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0155_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0155-thousand-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0155-thousand-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0155-thousand-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0155-thousand-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0155-thousand-d2-4_gen.wav"
            }
        },
        {
            "Name": "Also the department requests the sum of one hundred thousand dollars to <font color='#FF0000'>conduct</font> a detailed feasibility study, ",
            "TestID": "control_415",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0155_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0155-conduct-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0155-conduct-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0155-conduct-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0155-conduct-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0155-conduct-d3-4_gen.wav"
            }
        },
        {
            "Name": "Also the department requests the sum of one hundred thousand dollars to conduct a <font color='#FF0000'>detailed</font> feasibility study, ",
            "TestID": "control_416",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0155_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0155-detailed-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0155-detailed-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0155-detailed-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0155-detailed-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0155-detailed-d2-4_gen.wav"
            }
        },
        {
            "Name": "This money would be <font color='#FF0000'>used</font> to compensate consultants, to lease standard equipment or to purchase specially designed pilot equipment. ",
            "TestID": "control_417",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0156-used-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0156-used-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0156-used-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0156-used-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0156-used-d3-4_gen.wav"
            }
        },
        {
            "Name": "This money would be used to <font color='#FF0000'>compensate</font> consultants, to lease standard equipment or to purchase specially designed pilot equipment. ",
            "TestID": "control_418",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0156-compensate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0156-compensate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0156-compensate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0156-compensate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0156-compensate-d4-4_gen.wav"
            }
        },
        {
            "Name": "This money would be used to compensate consultants, to lease <font color='#FF0000'>standard</font> equipment or to purchase specially designed pilot equipment. ",
            "TestID": "control_419",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0156-standard-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0156-standard-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0156-standard-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0156-standard-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0156-standard-d4-4_gen.wav"
            }
        },
        {
            "Name": "This money would be used to compensate consultants, to lease standard <font color='#FF0000'>equipment</font> or to purchase specially designed pilot <font color='#FF0000'>equipment</font>. ",
            "TestID": "control_420",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d0-4_gen.wav"
            }
        },
        {
            "Name": "This money would be used to compensate consultants, to lease standard equipment or to purchase specially <font color='#FF0000'>designed</font> pilot equipment. ",
            "TestID": "control_421",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0156-designed-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0156-designed-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0156-designed-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0156-designed-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0156-designed-d1-4_gen.wav"
            }
        },
        {
            "Name": "This money would be used to compensate consultants, to lease standard equipment or to purchase specially designed <font color='#FF0000'>pilot</font> equipment. ",
            "TestID": "control_422",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0156-pilot-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0156-pilot-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0156-pilot-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0156-pilot-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0156-pilot-d4-4_gen.wav"
            }
        },
        {
            "Name": "This money would be used to compensate consultants, to lease standard <font color='#FF0000'>equipment</font> or to purchase specially designed pilot <font color='#FF0000'>equipment</font>. ",
            "TestID": "control_423",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0156_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0156-equipment-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>department</font> hopes to design a practical system which will fully meet the needs of the protective research section of the secret service. ",
            "TestID": "control_424",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0158-department-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0158-department-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0158-department-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0158-department-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0158-department-d3-4_gen.wav"
            }
        },
        {
            "Name": "The department hopes to <font color='#FF0000'>design</font> a practical system which will fully meet the needs of the protective research section of the secret service. ",
            "TestID": "control_425",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0158-design-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0158-design-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0158-design-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0158-design-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0158-design-d2-4_gen.wav"
            }
        },
        {
            "Name": "The department hopes to design a practical <font color='#FF0000'>system</font> which will fully meet the needs of the protective research section of the secret service. ",
            "TestID": "control_426",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0158-system-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0158-system-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0158-system-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0158-system-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0158-system-d4-4_gen.wav"
            }
        },
        {
            "Name": "The department hopes to design a practical system which will fully meet the needs of the <font color='#FF0000'>protective</font> research section of the secret service. ",
            "TestID": "control_427",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0158-protective-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0158-protective-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0158-protective-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0158-protective-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0158-protective-d2-4_gen.wav"
            }
        },
        {
            "Name": "The department hopes to design a practical system which will fully meet the needs of the protective <font color='#FF0000'>research</font> section of the secret service. ",
            "TestID": "control_428",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0158-research-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0158-research-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0158-research-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0158-research-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0158-research-d2-4_gen.wav"
            }
        },
        {
            "Name": "The department hopes to design a practical system which will fully meet the needs of the protective research <font color='#FF0000'>section</font> of the secret service. ",
            "TestID": "control_429",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0158-section-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0158-section-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0158-section-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0158-section-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0158-section-d1-4_gen.wav"
            }
        },
        {
            "Name": "The department hopes to design a practical system which will fully meet the needs of the protective research section of the <font color='#FF0000'>secret</font> service. ",
            "TestID": "control_430",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0158_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0158-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0158-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0158-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0158-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0158-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> recommends that prompt and favorable consideration be given to this request. ",
            "TestID": "control_431",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0159_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0159-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0159-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0159-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0159-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0159-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that <font color='#FF0000'>prompt</font> and favorable consideration be given to this request. ",
            "TestID": "control_432",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0159_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0159-prompt-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0159-prompt-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0159-prompt-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0159-prompt-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0159-prompt-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that prompt and favorable <font color='#FF0000'>consideration</font> be given to this request. ",
            "TestID": "control_433",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0159_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0159-consideration-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0159-consideration-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0159-consideration-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0159-consideration-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0159-consideration-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that prompt and favorable consideration be <font color='#FF0000'>given</font> to this request. ",
            "TestID": "control_434",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0159_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0159-given-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0159-given-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0159-given-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0159-given-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0159-given-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that prompt and favorable consideration be given to this <font color='#FF0000'>request</font>. ",
            "TestID": "control_435",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0159_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0159-request-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0159-request-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0159-request-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0159-request-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0159-request-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> further recommends that the secret service coordinate its planning as closely as possible with all of the federal agencies from which it receives information. ",
            "TestID": "control_436",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0160_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0160-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0160-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0160-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0160-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0160-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission further recommends that the <font color='#FF0000'>secret</font> service coordinate its planning as closely as possible with all of the federal agencies from which it receives information. ",
            "TestID": "control_437",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0160_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0160-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0160-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0160-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0160-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0160-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission further recommends that the secret service <font color='#FF0000'>coordinate</font> its planning as closely as possible with all of the federal agencies from which it receives information. ",
            "TestID": "control_438",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0160_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0160-coordinate-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0160-coordinate-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0160-coordinate-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0160-coordinate-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0160-coordinate-d0-4_gen.wav"
            }
        },
        {
            "Name": "The commission further recommends that the secret service coordinate its planning as closely as possible with all of the federal agencies from which it receives <font color='#FF0000'>information</font>. ",
            "TestID": "control_439",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0160_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0160-information-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0160-information-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0160-information-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0160-information-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0160-information-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service should not and does not plan to develop its own intelligence gathering facilities to duplicate the existing facilities of other federal agencies. ",
            "TestID": "control_440",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0161_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0161-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0161-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0161-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0161-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0161-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should not and does not <font color='#FF0000'>plan</font> to develop its own intelligence gathering facilities to duplicate the existing facilities of other federal agencies. ",
            "TestID": "control_441",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0161_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0161-plan-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0161-plan-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0161-plan-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0161-plan-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0161-plan-d1-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should not and does not plan to <font color='#FF0000'>develop</font> its own intelligence gathering facilities to duplicate the existing facilities of other federal agencies. ",
            "TestID": "control_442",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0161_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0161-develop-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0161-develop-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0161-develop-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0161-develop-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0161-develop-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should not and does not plan to develop its own intelligence gathering facilities to <font color='#FF0000'>duplicate</font> the existing facilities of other federal agencies. ",
            "TestID": "control_443",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0161_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0161-duplicate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0161-duplicate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0161-duplicate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0161-duplicate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0161-duplicate-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service should attempt to develop a system compatible with those of the agencies from which most of its data will come. note, ",
            "TestID": "control_444",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0163_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0163-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0163-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0163-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0163-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0163-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should <font color='#FF0000'>attempt</font> to develop a system compatible with those of the agencies from which most of its data will come. note, ",
            "TestID": "control_445",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0163_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0163-attempt-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0163-attempt-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0163-attempt-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0163-attempt-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0163-attempt-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should attempt to <font color='#FF0000'>develop</font> a system compatible with those of the agencies from which most of its data will come. note, ",
            "TestID": "control_446",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0163_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0163-develop-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0163-develop-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0163-develop-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0163-develop-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0163-develop-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should attempt to develop a <font color='#FF0000'>system</font> compatible with those of the agencies from which most of its data will come. note, ",
            "TestID": "control_447",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0163_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0163-system-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0163-system-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0163-system-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0163-system-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0163-system-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should attempt to develop a system compatible with those of the agencies <font color='#FF0000'>from</font> which most of its data will come. note, ",
            "TestID": "control_448",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0163_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0163-from-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0163-from-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0163-from-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0163-from-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0163-from-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should attempt to develop a system compatible with those of the agencies from which <font color='#FF0000'>most</font> of its data will come. note, ",
            "TestID": "control_449",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0163_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0163-most-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0163-most-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0163-most-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0163-most-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0163-most-d1-4_gen.wav"
            }
        },
        {
            "Name": "In evaluating data processing techniques of the <font color='#FF0000'>secret</font> service, ",
            "TestID": "control_450",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0164_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0164-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0164-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0164-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0164-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0164-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> had occasion to become informed to a limited extent, about the data processing techniques of other federal intelligence and law enforcement agencies. ",
            "TestID": "control_451",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission had <font color='#FF0000'>occasion</font> to become informed to a limited extent, about the data processing techniques of other federal intelligence and law enforcement agencies. ",
            "TestID": "control_452",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-occasion-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-occasion-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-occasion-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-occasion-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-occasion-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission had occasion to <font color='#FF0000'>become</font> informed to a limited extent, about the data processing techniques of other federal intelligence and law enforcement agencies. ",
            "TestID": "control_453",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-become-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-become-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-become-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-become-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-become-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission had occasion to become <font color='#FF0000'>informed</font> to a limited extent, about the data processing techniques of other federal intelligence and law enforcement agencies. ",
            "TestID": "control_454",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-informed-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-informed-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-informed-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-informed-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-informed-d1-4_gen.wav"
            }
        },
        {
            "Name": "The commission had occasion to become informed to a <font color='#FF0000'>limited</font> extent, about the data processing techniques of other federal intelligence and law enforcement agencies. ",
            "TestID": "control_455",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-limited-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-limited-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-limited-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-limited-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-limited-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission had occasion to become informed to a limited <font color='#FF0000'>extent</font>, about the data processing techniques of other federal intelligence and law enforcement agencies. ",
            "TestID": "control_456",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-extent-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-extent-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-extent-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-extent-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-extent-d1-4_gen.wav"
            }
        },
        {
            "Name": "The commission had occasion to become informed to a limited extent, <font color='#FF0000'>about</font> the data processing techniques of other federal intelligence and law enforcement agencies. ",
            "TestID": "control_457",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-about-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-about-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-about-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-about-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-about-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission had occasion to become informed to a limited extent, about the data processing techniques of other federal intelligence and law <font color='#FF0000'>enforcement</font> agencies. ",
            "TestID": "control_458",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0165_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0165-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0165-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0165-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0165-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0165-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "To <font color='#FF0000'>develop</font> coordinated and mutually compatible systems, even where such coordination would not seem inconsistent ",
            "TestID": "control_459",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0167_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0167-develop-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0167-develop-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0167-develop-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0167-develop-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0167-develop-d3-4_gen.wav"
            }
        },
        {
            "Name": "To develop <font color='#FF0000'>coordinated</font> and mutually compatible systems, even where such coordination would not seem inconsistent ",
            "TestID": "control_460",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0167_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0167-coordinated-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0167-coordinated-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0167-coordinated-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0167-coordinated-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0167-coordinated-d4-4_gen.wav"
            }
        },
        {
            "Name": "To develop coordinated and mutually compatible systems, <font color='#FF0000'>even</font> where such coordination would not seem inconsistent ",
            "TestID": "control_461",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0167_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0167-even-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0167-even-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0167-even-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0167-even-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0167-even-d4-4_gen.wav"
            }
        },
        {
            "Name": "To develop coordinated and mutually compatible systems, even where such <font color='#FF0000'>coordination</font> would not seem inconsistent ",
            "TestID": "control_462",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0167_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0167-coordination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0167-coordination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0167-coordination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0167-coordination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0167-coordination-d4-4_gen.wav"
            }
        },
        {
            "Name": "To develop coordinated and mutually compatible systems, even where such coordination would not seem <font color='#FF0000'>inconsistent</font> ",
            "TestID": "control_463",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0167_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0167-inconsistent-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0167-inconsistent-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0167-inconsistent-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0167-inconsistent-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0167-inconsistent-d4-4_gen.wav"
            }
        },
        {
            "Name": "With the particular purposes of the agency <font color='#FF0000'>involved</font>. the commission recognizes that this is a controversial area ",
            "TestID": "control_464",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0168_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0168-involved-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0168-involved-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0168-involved-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0168-involved-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0168-involved-d0-4_gen.wav"
            }
        },
        {
            "Name": "With the particular purposes of the agency involved. the <font color='#FF0000'>commission</font> recognizes that this is a controversial area ",
            "TestID": "control_465",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0168_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0168-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0168-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0168-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0168-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0168-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "And that many strongly <font color='#FF0000'>held</font> views are advanced in resistance to any suggestion that an effort be made to impose any degree of coordination. ",
            "TestID": "control_466",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0169_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0169-held-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0169-held-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0169-held-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0169-held-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0169-held-d1-4_gen.wav"
            }
        },
        {
            "Name": "And that many strongly held views are <font color='#FF0000'>advanced</font> in resistance to any suggestion that an effort be made to impose any degree of coordination. ",
            "TestID": "control_467",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0169_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0169-advanced-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0169-advanced-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0169-advanced-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0169-advanced-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0169-advanced-d1-4_gen.wav"
            }
        },
        {
            "Name": "And that many strongly held views are advanced in resistance to any <font color='#FF0000'>suggestion</font> that an effort be made to impose any degree of coordination. ",
            "TestID": "control_468",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0169_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0169-suggestion-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0169-suggestion-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0169-suggestion-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0169-suggestion-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0169-suggestion-d4-4_gen.wav"
            }
        },
        {
            "Name": "And that many strongly held views are advanced in resistance to any suggestion that an <font color='#FF0000'>effort</font> be made to impose any degree of coordination. ",
            "TestID": "control_469",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0169_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0169-effort-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0169-effort-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0169-effort-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0169-effort-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0169-effort-d3-4_gen.wav"
            }
        },
        {
            "Name": "And that many strongly held views are advanced in resistance to any suggestion that an effort be made to impose any degree of <font color='#FF0000'>coordination</font>. ",
            "TestID": "control_470",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0169_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0169-coordination-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0169-coordination-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0169-coordination-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0169-coordination-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0169-coordination-d0-4_gen.wav"
            }
        },
        {
            "Name": "This matter is obviously <font color='#FF0000'>beyond</font> the jurisdiction of the commission, ",
            "TestID": "control_471",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0170_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0170-beyond-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0170-beyond-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0170-beyond-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0170-beyond-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0170-beyond-d2-4_gen.wav"
            }
        },
        {
            "Name": "This matter is obviously beyond the <font color='#FF0000'>jurisdiction</font> of the commission, ",
            "TestID": "control_472",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0170_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0170-jurisdiction-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0170-jurisdiction-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0170-jurisdiction-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0170-jurisdiction-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0170-jurisdiction-d2-4_gen.wav"
            }
        },
        {
            "Name": "This matter is obviously beyond the jurisdiction of the <font color='#FF0000'>commission</font>, ",
            "TestID": "control_473",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0170_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0170-commission-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0170-commission-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0170-commission-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0170-commission-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0170-commission-d4-4_gen.wav"
            }
        },
        {
            "Name": "But it seems to <font color='#FF0000'>warrant</font> further study before each agency becomes irrevocably committed to separate action. ",
            "TestID": "control_474",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0171_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0171-warrant-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0171-warrant-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0171-warrant-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0171-warrant-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0171-warrant-d2-4_gen.wav"
            }
        },
        {
            "Name": "But it seems to warrant further study before each agency becomes irrevocably <font color='#FF0000'>committed</font> to separate action. ",
            "TestID": "control_475",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0171_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0171-committed-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0171-committed-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0171-committed-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0171-committed-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0171-committed-d4-4_gen.wav"
            }
        },
        {
            "Name": "But it seems to warrant further study before each agency becomes irrevocably committed to <font color='#FF0000'>separate</font> action. ",
            "TestID": "control_476",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0171_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0171-separate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0171-separate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0171-separate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0171-separate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0171-separate-d4-4_gen.wav"
            }
        },
        {
            "Name": "But it seems to warrant further study before each agency becomes irrevocably committed to separate <font color='#FF0000'>action</font>. ",
            "TestID": "control_477",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0171_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0171-action-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0171-action-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0171-action-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0171-action-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0171-action-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> therefore recommends that the president consider ordering an inquiry into the possibility ",
            "TestID": "control_478",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0172_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0172-commission-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0172-commission-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0172-commission-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0172-commission-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0172-commission-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission therefore recommends that the <font color='#FF0000'>president</font> consider ordering an inquiry into the possibility ",
            "TestID": "control_479",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0172_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0172-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0172-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0172-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0172-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0172-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "That <font color='#FF0000'>coordination</font> might be achieved to a greater extent than seems now to be contemplated, without interference with the primary mission of each agency involved. ",
            "TestID": "control_480",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0173-coordination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0173-coordination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0173-coordination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0173-coordination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0173-coordination-d4-4_gen.wav"
            }
        },
        {
            "Name": "That coordination might be <font color='#FF0000'>achieved</font> to a greater extent than seems now to be contemplated, without interference with the primary mission of each agency involved. ",
            "TestID": "control_481",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0173-achieved-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0173-achieved-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0173-achieved-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0173-achieved-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0173-achieved-d1-4_gen.wav"
            }
        },
        {
            "Name": "That coordination might be achieved to a greater <font color='#FF0000'>extent</font> than seems now to be contemplated, without interference with the primary mission of each agency involved. ",
            "TestID": "control_482",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0173-extent-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0173-extent-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0173-extent-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0173-extent-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0173-extent-d0-4_gen.wav"
            }
        },
        {
            "Name": "That coordination might be achieved to a greater extent than seems now to be <font color='#FF0000'>contemplated</font>, without interference with the primary mission of each agency involved. ",
            "TestID": "control_483",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0173-contemplated-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0173-contemplated-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0173-contemplated-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0173-contemplated-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0173-contemplated-d0-4_gen.wav"
            }
        },
        {
            "Name": "That coordination might be achieved to a greater extent than seems now to be contemplated, <font color='#FF0000'>without</font> interference with the primary mission of each agency involved. ",
            "TestID": "control_484",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0173-without-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0173-without-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0173-without-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0173-without-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0173-without-d2-4_gen.wav"
            }
        },
        {
            "Name": "That coordination might be achieved to a greater extent than seems now to be contemplated, without interference with the primary <font color='#FF0000'>mission</font> of each agency involved. ",
            "TestID": "control_485",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0173-mission-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0173-mission-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0173-mission-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0173-mission-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0173-mission-d1-4_gen.wav"
            }
        },
        {
            "Name": "That coordination might be achieved to a greater extent than seems now to be contemplated, without interference with the primary mission of each agency <font color='#FF0000'>involved</font>. ",
            "TestID": "control_486",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0173_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0173-involved-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0173-involved-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0173-involved-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0173-involved-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0173-involved-d0-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>protective</font> research participation in advance arrangements. ",
            "TestID": "control_487",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0174_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0174-protective-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0174-protective-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0174-protective-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0174-protective-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0174-protective-d3-4_gen.wav"
            }
        },
        {
            "Name": "Protective <font color='#FF0000'>research</font> participation in advance arrangements. ",
            "TestID": "control_488",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0174_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0174-research-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0174-research-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0174-research-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0174-research-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0174-research-d2-4_gen.wav"
            }
        },
        {
            "Name": "Protective research <font color='#FF0000'>participation</font> in advance arrangements. ",
            "TestID": "control_489",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0174_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0174-participation-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0174-participation-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0174-participation-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0174-participation-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0174-participation-d1-4_gen.wav"
            }
        },
        {
            "Name": "Since the <font color='#FF0000'>assassination</font>, secret service procedures have been changed to require that a member of prs accompany each advance survey team ",
            "TestID": "control_490",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0175_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0175-assassination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0175-assassination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0175-assassination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0175-assassination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0175-assassination-d4-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, <font color='#FF0000'>secret</font> service procedures have been changed to require that a member of prs accompany each advance survey team ",
            "TestID": "control_491",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0175_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0175-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0175-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0175-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0175-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0175-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, secret service procedures have been <font color='#FF0000'>changed</font> to require that a member of prs accompany each advance survey team ",
            "TestID": "control_492",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0175_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0175-changed-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0175-changed-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0175-changed-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0175-changed-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0175-changed-d1-4_gen.wav"
            }
        },
        {
            "Name": "To <font color='#FF0000'>establish</font> liaison with local intelligence gathering agencies and to provide for the immediate evaluation of information received from them. ",
            "TestID": "control_493",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0176_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0176-establish-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0176-establish-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0176-establish-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0176-establish-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0176-establish-d3-4_gen.wav"
            }
        },
        {
            "Name": "To establish <font color='#FF0000'>liaison</font> with local intelligence gathering agencies and to provide for the immediate evaluation of information received from them. ",
            "TestID": "control_494",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0176_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0176-liaison-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0176-liaison-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0176-liaison-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0176-liaison-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0176-liaison-d4-4_gen.wav"
            }
        },
        {
            "Name": "To establish liaison with local intelligence gathering agencies and to <font color='#FF0000'>provide</font> for the immediate evaluation of information received from them. ",
            "TestID": "control_495",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0176_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0176-provide-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0176-provide-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0176-provide-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0176-provide-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0176-provide-d2-4_gen.wav"
            }
        },
        {
            "Name": "To establish liaison with local intelligence gathering agencies and to provide for the <font color='#FF0000'>immediate</font> evaluation of information received from them. ",
            "TestID": "control_496",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0176_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0176-immediate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0176-immediate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0176-immediate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0176-immediate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0176-immediate-d4-4_gen.wav"
            }
        },
        {
            "Name": "To establish liaison with local intelligence gathering agencies and to provide for the immediate <font color='#FF0000'>evaluation</font> of information received from them. ",
            "TestID": "control_497",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0176_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0176-evaluation-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0176-evaluation-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0176-evaluation-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0176-evaluation-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0176-evaluation-d2-4_gen.wav"
            }
        },
        {
            "Name": "To establish liaison with local intelligence gathering agencies and to provide for the immediate evaluation of <font color='#FF0000'>information</font> received from them. ",
            "TestID": "control_498",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0176_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0176-information-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0176-information-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0176-information-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0176-information-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0176-information-d4-4_gen.wav"
            }
        },
        {
            "Name": "To establish liaison with local intelligence gathering agencies and to provide for the immediate evaluation of information <font color='#FF0000'>received</font> from them. ",
            "TestID": "control_499",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0176_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0176-received-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0176-received-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0176-received-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0176-received-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0176-received-d3-4_gen.wav"
            }
        },
        {
            "Name": "This prs <font color='#FF0000'>agent</font> will also be responsible for establishing an informal local liaison committee ",
            "TestID": "control_500",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0177_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0177-agent-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0177-agent-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0177-agent-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0177-agent-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0177-agent-d0-4_gen.wav"
            }
        },
        {
            "Name": "This prs agent will also be responsible for establishing an informal local <font color='#FF0000'>liaison</font> committee ",
            "TestID": "control_501",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0177_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0177-liaison-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0177-liaison-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0177-liaison-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0177-liaison-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0177-liaison-d1-4_gen.wav"
            }
        },
        {
            "Name": "To make <font color='#FF0000'>certain</font> that all protective intelligence activities are coordinated. ",
            "TestID": "control_502",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0178_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0178-certain-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0178-certain-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0178-certain-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0178-certain-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0178-certain-d3-4_gen.wav"
            }
        },
        {
            "Name": "To make certain that all <font color='#FF0000'>protective</font> intelligence activities are coordinated. ",
            "TestID": "control_503",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0178_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0178-protective-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0178-protective-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0178-protective-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0178-protective-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0178-protective-d3-4_gen.wav"
            }
        },
        {
            "Name": "To make certain that all protective intelligence activities are <font color='#FF0000'>coordinated</font>. ",
            "TestID": "control_504",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0178_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0178-coordinated-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0178-coordinated-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0178-coordinated-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0178-coordinated-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0178-coordinated-d4-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>based</font> on its experience during this period, the secret service now recommends that additional personnel be made available to prs ",
            "TestID": "control_505",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0179_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0179-based-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0179-based-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0179-based-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0179-based-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0179-based-d3-4_gen.wav"
            }
        },
        {
            "Name": "Based on its experience during this <font color='#FF0000'>period</font>, the secret service now recommends that additional personnel be made available to prs ",
            "TestID": "control_506",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0179_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0179-period-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0179-period-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0179-period-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0179-period-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0179-period-d0-4_gen.wav"
            }
        },
        {
            "Name": "Based on its experience during this period, the <font color='#FF0000'>secret</font> service now recommends that additional personnel be made available to prs ",
            "TestID": "control_507",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0179_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0179-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0179-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0179-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0179-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0179-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "So that these arrangements can be made <font color='#FF0000'>permanent</font> without adversely affecting the operations of the service's field offices. ",
            "TestID": "control_508",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0180_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0180-permanent-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0180-permanent-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0180-permanent-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0180-permanent-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0180-permanent-d4-4_gen.wav"
            }
        },
        {
            "Name": "So that these arrangements can be made permanent <font color='#FF0000'>without</font> adversely affecting the operations of the service's field offices. ",
            "TestID": "control_509",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0180_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0180-without-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0180-without-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0180-without-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0180-without-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0180-without-d3-4_gen.wav"
            }
        },
        {
            "Name": "So that these arrangements can be made permanent without adversely affecting the operations of the service's <font color='#FF0000'>field</font> offices. ",
            "TestID": "control_510",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0180_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0180-field-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0180-field-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0180-field-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0180-field-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0180-field-d3-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> regards this as a most useful innovation and urges that the practice be continued. ",
            "TestID": "control_511",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0181_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0181-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0181-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0181-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0181-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0181-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission regards this as a <font color='#FF0000'>most</font> useful innovation and urges that the practice be continued. ",
            "TestID": "control_512",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0181_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0181-most-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0181-most-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0181-most-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0181-most-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0181-most-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission regards this as a most useful <font color='#FF0000'>innovation</font> and urges that the practice be continued. ",
            "TestID": "control_513",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0181_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0181-innovation-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0181-innovation-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0181-innovation-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0181-innovation-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0181-innovation-d0-4_gen.wav"
            }
        },
        {
            "Name": "The commission regards this as a most useful innovation and urges that the practice be <font color='#FF0000'>continued</font>. ",
            "TestID": "control_514",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0181_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0181-continued-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0181-continued-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0181-continued-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0181-continued-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0181-continued-d4-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>liaison</font> with local law enforcement agencies ",
            "TestID": "control_515",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0182_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0182-liaison-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0182-liaison-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0182-liaison-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0182-liaison-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0182-liaison-d4-4_gen.wav"
            }
        },
        {
            "Name": "Liaison with local law <font color='#FF0000'>enforcement</font> agencies ",
            "TestID": "control_516",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0182_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0182-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0182-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0182-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0182-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0182-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "Advice by the <font color='#FF0000'>secret</font> service to local police in metropolitan areas relating to the assistance expected in connection with a presidential visit ",
            "TestID": "control_517",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0183_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0183-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0183-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0183-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0183-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0183-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Advice by the secret service to local police in <font color='#FF0000'>metropolitan</font> areas relating to the assistance expected in connection with a presidential visit ",
            "TestID": "control_518",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0183_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0183-metropolitan-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0183-metropolitan-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0183-metropolitan-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0183-metropolitan-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0183-metropolitan-d1-4_gen.wav"
            }
        },
        {
            "Name": "Advice by the secret service to local police in metropolitan areas relating to the assistance <font color='#FF0000'>expected</font> in connection with a presidential visit ",
            "TestID": "control_519",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0183_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0183-expected-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0183-expected-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0183-expected-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0183-expected-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0183-expected-d2-4_gen.wav"
            }
        },
        {
            "Name": "Advice by the secret service to local police in metropolitan areas relating to the assistance expected in <font color='#FF0000'>connection</font> with a presidential visit ",
            "TestID": "control_520",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0183_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0183-connection-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0183-connection-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0183-connection-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0183-connection-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0183-connection-d2-4_gen.wav"
            }
        },
        {
            "Name": "Advice by the secret service to local police in metropolitan areas relating to the assistance expected in connection with a presidential <font color='#FF0000'>visit</font> ",
            "TestID": "control_521",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0183_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0183-visit-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0183-visit-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0183-visit-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0183-visit-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0183-visit-d1-4_gen.wav"
            }
        },
        {
            "Name": "Has hitherto been <font color='#FF0000'>handled</font> on an informal basis. ",
            "TestID": "control_522",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0184_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0184-handled-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0184-handled-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0184-handled-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0184-handled-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0184-handled-d0-4_gen.wav"
            }
        },
        {
            "Name": "The service should consider preparing formal explanations of the <font color='#FF0000'>cooperation</font> anticipated during a presidential visit to a city, ",
            "TestID": "control_523",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0185_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0185-cooperation-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0185-cooperation-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0185-cooperation-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0185-cooperation-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0185-cooperation-d3-4_gen.wav"
            }
        },
        {
            "Name": "The service should consider preparing formal explanations of the cooperation <font color='#FF0000'>anticipated</font> during a presidential visit to a city, ",
            "TestID": "control_524",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0185_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0185-anticipated-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0185-anticipated-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0185-anticipated-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0185-anticipated-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0185-anticipated-d2-4_gen.wav"
            }
        },
        {
            "Name": "The service should consider preparing formal explanations of the cooperation anticipated during a presidential <font color='#FF0000'>visit</font> to a city, ",
            "TestID": "control_525",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0185_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0185-visit-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0185-visit-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0185-visit-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0185-visit-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0185-visit-d3-4_gen.wav"
            }
        },
        {
            "Name": "Thus, the local chief of police could be <font color='#FF0000'>given</font> a master plan, prepared for the occasion, of all protective measures to be taken during the visit, ",
            "TestID": "control_526",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0187_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0187-given-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0187-given-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0187-given-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0187-given-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0187-given-d2-4_gen.wav"
            }
        },
        {
            "Name": "Thus, the local chief of police could be given a master <font color='#FF0000'>plan</font>, prepared for the occasion, of all protective measures to be taken during the visit, ",
            "TestID": "control_527",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0187_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0187-plan-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0187-plan-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0187-plan-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0187-plan-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0187-plan-d4-4_gen.wav"
            }
        },
        {
            "Name": "Thus, the local chief of police could be given a master plan, <font color='#FF0000'>prepared</font> for the occasion, of all protective measures to be taken during the visit, ",
            "TestID": "control_528",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0187_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0187-prepared-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0187-prepared-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0187-prepared-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0187-prepared-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0187-prepared-d2-4_gen.wav"
            }
        },
        {
            "Name": "Thus, the local chief of police could be given a master plan, prepared for the <font color='#FF0000'>occasion</font>, of all protective measures to be taken during the visit, ",
            "TestID": "control_529",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0187_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0187-occasion-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0187-occasion-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0187-occasion-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0187-occasion-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0187-occasion-d4-4_gen.wav"
            }
        },
        {
            "Name": "Thus, the local chief of police could be given a master plan, prepared for the occasion, of all <font color='#FF0000'>protective</font> measures to be taken during the visit, ",
            "TestID": "control_530",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0187_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0187-protective-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0187-protective-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0187-protective-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0187-protective-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0187-protective-d4-4_gen.wav"
            }
        },
        {
            "Name": "Thus, the local chief of police could be given a master plan, prepared for the occasion, of all protective measures to be <font color='#FF0000'>taken</font> during the visit, ",
            "TestID": "control_531",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0187_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0187-taken-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0187-taken-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0187-taken-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0187-taken-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0187-taken-d2-4_gen.wav"
            }
        },
        {
            "Name": "Thus, the local chief of police could be given a master plan, prepared for the occasion, of all protective measures to be taken during the <font color='#FF0000'>visit</font>, ",
            "TestID": "control_532",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0187_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0187-visit-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0187-visit-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0187-visit-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0187-visit-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0187-visit-d0-4_gen.wav"
            }
        },
        {
            "Name": "Each <font color='#FF0000'>patrolman</font> might be given a prepared booklet of instructions explaining what is expected of him. the secret service has expressed concern ",
            "TestID": "control_533",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-patrolman-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-patrolman-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-patrolman-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-patrolman-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-patrolman-d3-4_gen.wav"
            }
        },
        {
            "Name": "Each patrolman might be <font color='#FF0000'>given</font> a prepared booklet of instructions explaining what is expected of him. the secret service has expressed concern ",
            "TestID": "control_534",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-given-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-given-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-given-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-given-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-given-d2-4_gen.wav"
            }
        },
        {
            "Name": "Each patrolman might be given a <font color='#FF0000'>prepared</font> booklet of instructions explaining what is expected of him. the secret service has expressed concern ",
            "TestID": "control_535",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-prepared-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-prepared-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-prepared-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-prepared-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-prepared-d2-4_gen.wav"
            }
        },
        {
            "Name": "Each patrolman might be given a prepared <font color='#FF0000'>booklet</font> of instructions explaining what is expected of him. the secret service has expressed concern ",
            "TestID": "control_536",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-booklet-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-booklet-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-booklet-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-booklet-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-booklet-d4-4_gen.wav"
            }
        },
        {
            "Name": "Each patrolman might be given a prepared booklet of instructions explaining what is <font color='#FF0000'>expected</font> of him. the secret service has expressed concern ",
            "TestID": "control_537",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-expected-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-expected-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-expected-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-expected-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-expected-d0-4_gen.wav"
            }
        },
        {
            "Name": "Each patrolman might be given a prepared booklet of instructions explaining what is expected of him. the <font color='#FF0000'>secret</font> service has expressed concern ",
            "TestID": "control_538",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "Each patrolman might be given a prepared booklet of instructions explaining what is expected of him. the secret service has <font color='#FF0000'>expressed</font> concern ",
            "TestID": "control_539",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-expressed-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-expressed-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-expressed-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-expressed-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-expressed-d3-4_gen.wav"
            }
        },
        {
            "Name": "Each patrolman might be given a prepared booklet of instructions explaining what is expected of him. the secret service has expressed <font color='#FF0000'>concern</font> ",
            "TestID": "control_540",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0188_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0188-concern-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0188-concern-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0188-concern-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0188-concern-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0188-concern-d0-4_gen.wav"
            }
        },
        {
            "Name": "That <font color='#FF0000'>written</font> instructions might come into the hands of local newspapers, to the prejudice of the precautions described. ",
            "TestID": "control_541",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0189_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0189-written-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0189-written-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0189-written-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0189-written-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0189-written-d3-4_gen.wav"
            }
        },
        {
            "Name": "That written instructions might come into the hands of local newspapers, to the prejudice of the precautions <font color='#FF0000'>described</font>. ",
            "TestID": "control_542",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0189_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0189-described-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0189-described-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0189-described-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0189-described-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0189-described-d0-4_gen.wav"
            }
        },
        {
            "Name": "However, the instructions <font color='#FF0000'>must</font> be communicated to the local police in any event and can be leaked to the press whether or not they are in writing. ",
            "TestID": "control_543",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0190_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0190-must-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0190-must-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0190-must-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0190-must-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0190-must-d2-4_gen.wav"
            }
        },
        {
            "Name": "However, the instructions must be <font color='#FF0000'>communicated</font> to the local police in any event and can be leaked to the press whether or not they are in writing. ",
            "TestID": "control_544",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0190_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0190-communicated-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0190-communicated-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0190-communicated-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0190-communicated-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0190-communicated-d1-4_gen.wav"
            }
        },
        {
            "Name": "However, the instructions must be communicated to the local police in any <font color='#FF0000'>event</font> and can be leaked to the press whether or not they are in writing. ",
            "TestID": "control_545",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0190_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0190-event-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0190-event-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0190-event-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0190-event-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0190-event-d0-4_gen.wav"
            }
        },
        {
            "Name": "However, the instructions must be communicated to the local police in any event and can be <font color='#FF0000'>leaked</font> to the press whether or not they are in writing. ",
            "TestID": "control_546",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0190_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0190-leaked-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0190-leaked-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0190-leaked-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0190-leaked-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0190-leaked-d2-4_gen.wav"
            }
        },
        {
            "Name": "More importantly, the lack of carefully <font color='#FF0000'>prepared</font> and carefully transmitted instructions for typical visits to cities ",
            "TestID": "control_547",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0191_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0191-prepared-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0191-prepared-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0191-prepared-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0191-prepared-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0191-prepared-d1-4_gen.wav"
            }
        },
        {
            "Name": "More importantly, the lack of carefully prepared and carefully <font color='#FF0000'>transmitted</font> instructions for typical visits to cities ",
            "TestID": "control_548",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0191_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0191-transmitted-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0191-transmitted-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0191-transmitted-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0191-transmitted-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0191-transmitted-d1-4_gen.wav"
            }
        },
        {
            "Name": "And should not be <font color='#FF0000'>relied</font> upon to the detriment of the imaginative application of judgment in special cases. ",
            "TestID": "control_549",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0194_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0194-relied-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0194-relied-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0194-relied-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0194-relied-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0194-relied-d2-4_gen.wav"
            }
        },
        {
            "Name": "And should not be relied <font color='#FF0000'>upon</font> to the detriment of the imaginative application of judgment in special cases. ",
            "TestID": "control_550",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0194_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0194-upon-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0194-upon-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0194-upon-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0194-upon-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0194-upon-d1-4_gen.wav"
            }
        },
        {
            "Name": "And should not be relied upon to the <font color='#FF0000'>detriment</font> of the imaginative application of judgment in special cases. ",
            "TestID": "control_551",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0194_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0194-detriment-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0194-detriment-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0194-detriment-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0194-detriment-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0194-detriment-d4-4_gen.wav"
            }
        },
        {
            "Name": "And should not be relied upon to the detriment of the <font color='#FF0000'>imaginative</font> application of judgment in special cases. ",
            "TestID": "control_552",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0194_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0194-imaginative-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0194-imaginative-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0194-imaginative-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0194-imaginative-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0194-imaginative-d4-4_gen.wav"
            }
        },
        {
            "Name": "And should not be relied upon to the detriment of the imaginative <font color='#FF0000'>application</font> of judgment in special cases. ",
            "TestID": "control_553",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0194_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0194-application-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0194-application-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0194-application-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0194-application-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0194-application-d2-4_gen.wav"
            }
        },
        {
            "Name": "And should not be relied upon to the detriment of the imaginative application of <font color='#FF0000'>judgment</font> in special cases. ",
            "TestID": "control_554",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0194_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0194-judgment-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0194-judgment-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0194-judgment-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0194-judgment-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0194-judgment-d4-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>inspection</font> of buildings ",
            "TestID": "control_555",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0195_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0195-inspection-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0195-inspection-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0195-inspection-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0195-inspection-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0195-inspection-d3-4_gen.wav"
            }
        },
        {
            "Name": "Since the <font color='#FF0000'>assassination</font> of president kennedy, the secret service has been experimenting with new techniques in the inspection of buildings along a motorcade route. ",
            "TestID": "control_556",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0196_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0196-assassination-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0196-assassination-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0196-assassination-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0196-assassination-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0196-assassination-d1-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination of <font color='#FF0000'>president</font> kennedy, the secret service has been experimenting with new techniques in the inspection of buildings along a motorcade route. ",
            "TestID": "control_557",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0196_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0196-president-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0196-president-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0196-president-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0196-president-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0196-president-d1-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination of president kennedy, the <font color='#FF0000'>secret</font> service has been experimenting with new techniques in the inspection of buildings along a motorcade route. ",
            "TestID": "control_558",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0196_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0196-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0196-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0196-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0196-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0196-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination of president kennedy, the secret service has been experimenting with new techniques in the <font color='#FF0000'>inspection</font> of buildings along a motorcade route. ",
            "TestID": "control_559",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0196_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0196-inspection-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0196-inspection-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0196-inspection-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0196-inspection-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0196-inspection-d3-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination of president kennedy, the secret service has been experimenting with new techniques in the inspection of buildings along a <font color='#FF0000'>motorcade</font> route. ",
            "TestID": "control_560",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0196_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0196-motorcade-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0196-motorcade-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0196-motorcade-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0196-motorcade-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0196-motorcade-d1-4_gen.wav"
            }
        },
        {
            "Name": "According to secretary <font color='#FF0000'>dillon</font>, ",
            "TestID": "control_561",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0197_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0197-dillon-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0197-dillon-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0197-dillon-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0197-dillon-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0197-dillon-d1-4_gen.wav"
            }
        },
        {
            "Name": "The studies <font color='#FF0000'>indicate</font> that there is some utility in attempting to designate certain buildings as involving a higher risk than others. ",
            "TestID": "control_562",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0198_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0198-indicate-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0198-indicate-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0198-indicate-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0198-indicate-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0198-indicate-d0-4_gen.wav"
            }
        },
        {
            "Name": "The studies indicate that there is some utility in attempting to <font color='#FF0000'>designate</font> certain buildings as involving a higher risk than others. ",
            "TestID": "control_563",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0198_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0198-designate-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0198-designate-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0198-designate-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0198-designate-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0198-designate-d1-4_gen.wav"
            }
        },
        {
            "Name": "The studies indicate that there is some utility in attempting to designate <font color='#FF0000'>certain</font> buildings as involving a higher risk than others. ",
            "TestID": "control_564",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0198_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0198-certain-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0198-certain-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0198-certain-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0198-certain-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0198-certain-d3-4_gen.wav"
            }
        },
        {
            "Name": "The studies indicate that there is some utility in attempting to designate certain buildings as involving a higher <font color='#FF0000'>risk</font> than others. ",
            "TestID": "control_565",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0198_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0198-risk-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0198-risk-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0198-risk-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0198-risk-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0198-risk-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> strongly encourages these efforts to improve protection along a motorcade route. ",
            "TestID": "control_566",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0199_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0199-commission-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0199-commission-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0199-commission-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0199-commission-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0199-commission-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission strongly encourages these efforts to <font color='#FF0000'>improve</font> protection along a motorcade route. ",
            "TestID": "control_567",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0199_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0199-improve-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0199-improve-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0199-improve-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0199-improve-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0199-improve-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission strongly encourages these efforts to improve <font color='#FF0000'>protection</font> along a motorcade route. ",
            "TestID": "control_568",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0199_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0199-protection-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0199-protection-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0199-protection-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0199-protection-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0199-protection-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission strongly encourages these efforts to improve protection along a <font color='#FF0000'>motorcade</font> route. ",
            "TestID": "control_569",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0199_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0199-motorcade-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0199-motorcade-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0199-motorcade-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0199-motorcade-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0199-motorcade-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service should utilize the personnel of other federal law enforcement offices ",
            "TestID": "control_570",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0200_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0200-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0200-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0200-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0200-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0200-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service should utilize the personnel of other federal law <font color='#FF0000'>enforcement</font> offices ",
            "TestID": "control_571",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0200_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0200-enforcement-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0200-enforcement-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0200-enforcement-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0200-enforcement-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0200-enforcement-d2-4_gen.wav"
            }
        },
        {
            "Name": "In the locality to assure <font color='#FF0000'>adequate</font> manpower for this task, as it is now doing. ",
            "TestID": "control_572",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0201_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0201-adequate-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0201-adequate-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0201-adequate-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0201-adequate-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0201-adequate-d2-4_gen.wav"
            }
        },
        {
            "Name": "In the locality to assure adequate manpower for this <font color='#FF0000'>task</font>, as it is now doing. ",
            "TestID": "control_573",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0201_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0201-task-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0201-task-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0201-task-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0201-task-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0201-task-d1-4_gen.wav"
            }
        },
        {
            "Name": "Lack of <font color='#FF0000'>adequate</font> resources is an unacceptable excuse for failing to improve advance precautions ",
            "TestID": "control_574",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0202_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0202-adequate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0202-adequate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0202-adequate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0202-adequate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0202-adequate-d4-4_gen.wav"
            }
        },
        {
            "Name": "Lack of adequate resources is an unacceptable excuse for failing to <font color='#FF0000'>improve</font> advance precautions ",
            "TestID": "control_575",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0202_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0202-improve-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0202-improve-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0202-improve-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0202-improve-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0202-improve-d3-4_gen.wav"
            }
        },
        {
            "Name": "In this crucial area of presidential <font color='#FF0000'>protection</font>. ",
            "TestID": "control_576",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0203_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0203-protection-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0203-protection-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0203-protection-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0203-protection-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0203-protection-d0-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>secret</font> service personnel and facilities ",
            "TestID": "control_577",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0204_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0204-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0204-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0204-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0204-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0204-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Testimony and other evidence before the <font color='#FF0000'>commission</font> ",
            "TestID": "control_578",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0205_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0205-commission-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0205-commission-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0205-commission-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0205-commission-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0205-commission-d0-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>suggest</font> that the secret service is trying to accomplish its job with too few people and without adequate modern equipment. ",
            "TestID": "control_579",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0206-suggest-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0206-suggest-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0206-suggest-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0206-suggest-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0206-suggest-d3-4_gen.wav"
            }
        },
        {
            "Name": "Suggest that the <font color='#FF0000'>secret</font> service is trying to accomplish its job with too few people and without adequate modern equipment. ",
            "TestID": "control_580",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0206-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0206-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0206-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0206-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0206-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Suggest that the secret service is trying to <font color='#FF0000'>accomplish</font> its job with too few people and without adequate modern equipment. ",
            "TestID": "control_581",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0206-accomplish-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0206-accomplish-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0206-accomplish-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0206-accomplish-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0206-accomplish-d3-4_gen.wav"
            }
        },
        {
            "Name": "Suggest that the secret service is trying to accomplish its job with too few people and <font color='#FF0000'>without</font> adequate modern equipment. ",
            "TestID": "control_582",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0206-without-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0206-without-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0206-without-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0206-without-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0206-without-d3-4_gen.wav"
            }
        },
        {
            "Name": "Suggest that the secret service is trying to accomplish its job with too few people and without <font color='#FF0000'>adequate</font> modern equipment. ",
            "TestID": "control_583",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0206-adequate-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0206-adequate-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0206-adequate-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0206-adequate-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0206-adequate-d2-4_gen.wav"
            }
        },
        {
            "Name": "Suggest that the secret service is trying to accomplish its job with too few people and without adequate <font color='#FF0000'>modern</font> equipment. ",
            "TestID": "control_584",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0206-modern-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0206-modern-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0206-modern-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0206-modern-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0206-modern-d1-4_gen.wav"
            }
        },
        {
            "Name": "Suggest that the secret service is trying to accomplish its job with too few people and without adequate modern <font color='#FF0000'>equipment</font>. ",
            "TestID": "control_585",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0206_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0206-equipment-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0206-equipment-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0206-equipment-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0206-equipment-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0206-equipment-d1-4_gen.wav"
            }
        },
        {
            "Name": "Although chief rowley does not <font color='#FF0000'>complain</font> about the pay scale for secret service agents, ",
            "TestID": "control_586",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0207_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0207-complain-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0207-complain-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0207-complain-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0207-complain-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0207-complain-d3-4_gen.wav"
            }
        },
        {
            "Name": "Although chief rowley does not complain <font color='#FF0000'>about</font> the pay scale for secret service agents, ",
            "TestID": "control_587",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0207_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0207-about-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0207-about-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0207-about-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0207-about-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0207-about-d2-4_gen.wav"
            }
        },
        {
            "Name": "Although chief rowley does not complain about the pay scale for <font color='#FF0000'>secret</font> service agents, ",
            "TestID": "control_588",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0207_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0207-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0207-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0207-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0207-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0207-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>assistant</font> to the director of the fbi testified that ",
            "TestID": "control_589",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0209_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0209-assistant-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0209-assistant-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0209-assistant-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0209-assistant-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0209-assistant-d0-4_gen.wav"
            }
        },
        {
            "Name": "The assistant to the director of the fbi <font color='#FF0000'>testified</font> that ",
            "TestID": "control_590",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0209_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0209-testified-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0209-testified-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0209-testified-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0209-testified-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0209-testified-d4-4_gen.wav"
            }
        },
        {
            "Name": "While these statistics <font color='#FF0000'>relate</font> to the activities of secret service agents stationed in field offices and not the white house detail, ",
            "TestID": "control_591",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0212_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0212-relate-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0212-relate-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0212-relate-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0212-relate-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0212-relate-d0-4_gen.wav"
            }
        },
        {
            "Name": "While these statistics relate to the activities of <font color='#FF0000'>secret</font> service agents stationed in field offices and not the white house detail, ",
            "TestID": "control_592",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0212_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0212-secret-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0212-secret-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0212-secret-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0212-secret-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0212-secret-d4-4_gen.wav"
            }
        },
        {
            "Name": "While these statistics relate to the activities of secret service agents <font color='#FF0000'>stationed</font> in field offices and not the white house detail, ",
            "TestID": "control_593",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0212_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0212-stationed-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0212-stationed-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0212-stationed-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0212-stationed-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0212-stationed-d3-4_gen.wav"
            }
        },
        {
            "Name": "While these statistics relate to the activities of secret service agents stationed in <font color='#FF0000'>field</font> offices and not the white house detail, ",
            "TestID": "control_594",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0212_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0212-field-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0212-field-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0212-field-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0212-field-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0212-field-d3-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>field</font> agents supplement those on the detail, particularly when the president is traveling. ",
            "TestID": "control_595",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0213_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0213-field-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0213-field-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0213-field-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0213-field-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0213-field-d3-4_gen.wav"
            }
        },
        {
            "Name": "Field agents <font color='#FF0000'>supplement</font> those on the detail, particularly when the president is traveling. ",
            "TestID": "control_596",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0213_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0213-supplement-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0213-supplement-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0213-supplement-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0213-supplement-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0213-supplement-d4-4_gen.wav"
            }
        },
        {
            "Name": "Field agents supplement those on the detail, particularly when the <font color='#FF0000'>president</font> is traveling. ",
            "TestID": "control_597",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0213_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0213-president-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0213-president-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0213-president-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0213-president-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0213-president-d1-4_gen.wav"
            }
        },
        {
            "Name": "Although the <font color='#FF0000'>commission</font> does not know whether the cases involved are entirely comparable, ",
            "TestID": "control_598",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0214_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0214-commission-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0214-commission-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0214-commission-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0214-commission-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0214-commission-d2-4_gen.wav"
            }
        },
        {
            "Name": "Although the commission does not know whether the cases <font color='#FF0000'>involved</font> are entirely comparable, ",
            "TestID": "control_599",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0214_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0214-involved-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0214-involved-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0214-involved-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0214-involved-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0214-involved-d1-4_gen.wav"
            }
        },
        {
            "Name": "These figures <font color='#FF0000'>suggest</font> that the agents of the secret service are substantially overworked. ",
            "TestID": "control_600",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0215_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0215-suggest-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0215-suggest-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0215-suggest-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0215-suggest-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0215-suggest-d0-4_gen.wav"
            }
        },
        {
            "Name": "These figures suggest that the agents of the <font color='#FF0000'>secret</font> service are substantially overworked. ",
            "TestID": "control_601",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0215_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0215-secret-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0215-secret-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0215-secret-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0215-secret-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0215-secret-d4-4_gen.wav"
            }
        },
        {
            "Name": "These figures suggest that the agents of the secret service are substantially <font color='#FF0000'>overworked</font>. ",
            "TestID": "control_602",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0215_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0215-overworked-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0215-overworked-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0215-overworked-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0215-overworked-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0215-overworked-d1-4_gen.wav"
            }
        },
        {
            "Name": "In its <font color='#FF0000'>budget</font> request for the fiscal year beginning july one, nineteen sixty four, ",
            "TestID": "control_603",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0216_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0216-budget-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0216-budget-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0216-budget-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0216-budget-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0216-budget-d2-4_gen.wav"
            }
        },
        {
            "Name": "In its budget <font color='#FF0000'>request</font> for the fiscal year beginning july one, nineteen sixty four, ",
            "TestID": "control_604",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0216_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0216-request-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0216-request-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0216-request-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0216-request-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0216-request-d0-4_gen.wav"
            }
        },
        {
            "Name": "In its budget request for the fiscal year beginning july one, <font color='#FF0000'>nineteen</font> sixty four, ",
            "TestID": "control_605",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0216_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0216-nineteen-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0216-nineteen-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0216-nineteen-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0216-nineteen-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0216-nineteen-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service sought funds for twenty five new positions, primarily in field offices. this increase has been approved by the congress. ",
            "TestID": "control_606",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0217_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0217-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0217-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0217-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0217-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0217-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service sought funds for twenty five new positions, primarily in <font color='#FF0000'>field</font> offices. this increase has been approved by the congress. ",
            "TestID": "control_607",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0217_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0217-field-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0217-field-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0217-field-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0217-field-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0217-field-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service sought funds for twenty five new positions, primarily in field offices. this increase has been <font color='#FF0000'>approved</font> by the congress. ",
            "TestID": "control_608",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0217_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0217-approved-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0217-approved-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0217-approved-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0217-approved-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0217-approved-d3-4_gen.wav"
            }
        },
        {
            "Name": "Chief rowley <font color='#FF0000'>explained</font> that this would not provide enough additional manpower to take all the measures which he considers required. ",
            "TestID": "control_609",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0218_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0218-explained-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0218-explained-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0218-explained-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0218-explained-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0218-explained-d1-4_gen.wav"
            }
        },
        {
            "Name": "Chief rowley explained that this would not <font color='#FF0000'>provide</font> enough additional manpower to take all the measures which he considers required. ",
            "TestID": "control_610",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0218_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0218-provide-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0218-provide-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0218-provide-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0218-provide-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0218-provide-d1-4_gen.wav"
            }
        },
        {
            "Name": "Chief rowley explained that this would not provide <font color='#FF0000'>enough</font> additional manpower to take all the measures which he considers required. ",
            "TestID": "control_611",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0218_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0218-enough-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0218-enough-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0218-enough-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0218-enough-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0218-enough-d3-4_gen.wav"
            }
        },
        {
            "Name": "Chief rowley explained that this would not provide enough additional manpower to take all the measures which he considers <font color='#FF0000'>required</font>. ",
            "TestID": "control_612",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0218_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0218-required-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0218-required-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0218-required-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0218-required-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0218-required-d4-4_gen.wav"
            }
        },
        {
            "Name": "However, the <font color='#FF0000'>nineteen</font> sixty four to sixty five budget request was submitted in november <font color='#FF0000'>nineteen</font> sixty three ",
            "TestID": "control_613",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0219_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d3-4_gen.wav"
            }
        },
        {
            "Name": "However, the nineteen sixty four to sixty five <font color='#FF0000'>budget</font> request was submitted in november nineteen sixty three ",
            "TestID": "control_614",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0219_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0219-budget-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0219-budget-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0219-budget-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0219-budget-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0219-budget-d2-4_gen.wav"
            }
        },
        {
            "Name": "However, the nineteen sixty four to sixty five budget <font color='#FF0000'>request</font> was submitted in november nineteen sixty three ",
            "TestID": "control_615",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0219_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0219-request-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0219-request-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0219-request-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0219-request-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0219-request-d1-4_gen.wav"
            }
        },
        {
            "Name": "However, the nineteen sixty four to sixty five budget request was <font color='#FF0000'>submitted</font> in november nineteen sixty three ",
            "TestID": "control_616",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0219_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0219-submitted-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0219-submitted-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0219-submitted-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0219-submitted-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0219-submitted-d3-4_gen.wav"
            }
        },
        {
            "Name": "However, the <font color='#FF0000'>nineteen</font> sixty four to sixty five budget request was submitted in november <font color='#FF0000'>nineteen</font> sixty three ",
            "TestID": "control_617",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0219_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0219-nineteen-d1-4_gen.wav"
            }
        },
        {
            "Name": "And requests for additional personnel were not made because of the studies then being <font color='#FF0000'>conducted</font>. ",
            "TestID": "control_618",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0220_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0220-conducted-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0220-conducted-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0220-conducted-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0220-conducted-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0220-conducted-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service has now presented its recommendations to the bureau of the budget. the plan proposed by the service ",
            "TestID": "control_619",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0221_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0221-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0221-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0221-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0221-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0221-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has now <font color='#FF0000'>presented</font> its recommendations to the bureau of the budget. the plan proposed by the service ",
            "TestID": "control_620",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0221_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0221-presented-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0221-presented-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0221-presented-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0221-presented-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0221-presented-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has now presented its recommendations to the bureau of the <font color='#FF0000'>budget</font>. the plan proposed by the service ",
            "TestID": "control_621",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0221_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0221-budget-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0221-budget-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0221-budget-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0221-budget-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0221-budget-d1-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has now presented its recommendations to the bureau of the budget. the <font color='#FF0000'>plan</font> proposed by the service ",
            "TestID": "control_622",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0221_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0221-plan-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0221-plan-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0221-plan-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0221-plan-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0221-plan-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has now presented its recommendations to the bureau of the budget. the plan <font color='#FF0000'>proposed</font> by the service ",
            "TestID": "control_623",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0221_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0221-proposed-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0221-proposed-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0221-proposed-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0221-proposed-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0221-proposed-d4-4_gen.wav"
            }
        },
        {
            "Name": "Would take approximately twenty months to <font color='#FF0000'>implement</font> and require expenditures of approximately three million dollars during that period. ",
            "TestID": "control_624",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0222_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0222-implement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0222-implement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0222-implement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0222-implement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0222-implement-d1-4_gen.wav"
            }
        },
        {
            "Name": "Would take approximately twenty months to implement and require expenditures of approximately three <font color='#FF0000'>million</font> dollars during that period. ",
            "TestID": "control_625",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0222_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0222-million-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0222-million-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0222-million-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0222-million-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0222-million-d2-4_gen.wav"
            }
        },
        {
            "Name": "Would take approximately twenty months to implement and require expenditures of approximately three million dollars during that <font color='#FF0000'>period</font>. ",
            "TestID": "control_626",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0222_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0222-period-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0222-period-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0222-period-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0222-period-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0222-period-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>plan</font> provides for an additional two hundred five agents for the secret service. seventeen of this number are proposed for the protective research section, ",
            "TestID": "control_627",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-plan-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-plan-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-plan-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-plan-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-plan-d3-4_gen.wav"
            }
        },
        {
            "Name": "The plan provides for an additional two <font color='#FF0000'>hundred</font> five agents for the secret service. seventeen of this number are proposed for the protective research section, ",
            "TestID": "control_628",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-hundred-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-hundred-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-hundred-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-hundred-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-hundred-d2-4_gen.wav"
            }
        },
        {
            "Name": "The plan provides for an additional two hundred five agents for the <font color='#FF0000'>secret</font> service. seventeen of this number are proposed for the protective research section, ",
            "TestID": "control_629",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-secret-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-secret-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-secret-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-secret-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-secret-d4-4_gen.wav"
            }
        },
        {
            "Name": "The plan provides for an additional two hundred five agents for the secret service. <font color='#FF0000'>seventeen</font> of this number are proposed for the protective research section, ",
            "TestID": "control_630",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-seventeen-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-seventeen-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-seventeen-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-seventeen-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-seventeen-d3-4_gen.wav"
            }
        },
        {
            "Name": "The plan provides for an additional two hundred five agents for the secret service. seventeen of this number are <font color='#FF0000'>proposed</font> for the protective research section, ",
            "TestID": "control_631",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-proposed-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-proposed-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-proposed-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-proposed-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-proposed-d2-4_gen.wav"
            }
        },
        {
            "Name": "The plan provides for an additional two hundred five agents for the secret service. seventeen of this number are proposed for the <font color='#FF0000'>protective</font> research section, ",
            "TestID": "control_632",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-protective-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-protective-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-protective-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-protective-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-protective-d2-4_gen.wav"
            }
        },
        {
            "Name": "The plan provides for an additional two hundred five agents for the secret service. seventeen of this number are proposed for the protective <font color='#FF0000'>research</font> section, ",
            "TestID": "control_633",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-research-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-research-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-research-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-research-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-research-d2-4_gen.wav"
            }
        },
        {
            "Name": "The plan provides for an additional two hundred five agents for the secret service. seventeen of this number are proposed for the protective research <font color='#FF0000'>section</font>, ",
            "TestID": "control_634",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0223_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0223-section-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0223-section-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0223-section-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0223-section-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0223-section-d0-4_gen.wav"
            }
        },
        {
            "Name": "One <font color='#FF0000'>hundred</font> forty five are proposed for the field offices to handle the increased volume of security investigations ",
            "TestID": "control_635",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0224_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0224-hundred-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0224-hundred-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0224-hundred-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0224-hundred-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0224-hundred-d2-4_gen.wav"
            }
        },
        {
            "Name": "One hundred forty five are <font color='#FF0000'>proposed</font> for the field offices to handle the increased volume of security investigations ",
            "TestID": "control_636",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0224_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0224-proposed-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0224-proposed-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0224-proposed-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0224-proposed-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0224-proposed-d2-4_gen.wav"
            }
        },
        {
            "Name": "One hundred forty five are proposed for the <font color='#FF0000'>field</font> offices to handle the increased volume of security investigations ",
            "TestID": "control_637",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0224_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0224-field-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0224-field-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0224-field-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0224-field-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0224-field-d3-4_gen.wav"
            }
        },
        {
            "Name": "One hundred forty five are proposed for the field offices to handle the <font color='#FF0000'>increased</font> volume of security investigations ",
            "TestID": "control_638",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0224_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0224-increased-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0224-increased-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0224-increased-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0224-increased-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0224-increased-d3-4_gen.wav"
            }
        },
        {
            "Name": "One hundred forty five are proposed for the field offices to handle the increased <font color='#FF0000'>volume</font> of security investigations ",
            "TestID": "control_639",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0224_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0224-volume-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0224-volume-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0224-volume-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0224-volume-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0224-volume-d2-4_gen.wav"
            }
        },
        {
            "Name": "And be available to <font color='#FF0000'>protect</font> the president or vice president when they travel, ",
            "TestID": "control_640",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0225_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0225-protect-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0225-protect-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0225-protect-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0225-protect-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0225-protect-d3-4_gen.wav"
            }
        },
        {
            "Name": "And be available to protect the <font color='#FF0000'>president</font> or vice <font color='#FF0000'>president</font> when they travel, ",
            "TestID": "control_641",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0225_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0225-president-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0225-president-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0225-president-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0225-president-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0225-president-d2-4_gen.wav"
            }
        },
        {
            "Name": "And be available to protect the <font color='#FF0000'>president</font> or vice <font color='#FF0000'>president</font> when they travel, ",
            "TestID": "control_642",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0225_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0225-president-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0225-president-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0225-president-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0225-president-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0225-president-d1-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>eighteen</font> agents are proposed for a rotating pool which will go through an intensive training cycle and also be available to supplement the white house detail ",
            "TestID": "control_643",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0226_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0226-eighteen-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0226-eighteen-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0226-eighteen-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0226-eighteen-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0226-eighteen-d3-4_gen.wav"
            }
        },
        {
            "Name": "Eighteen agents are <font color='#FF0000'>proposed</font> for a rotating pool which will go through an intensive training cycle and also be available to supplement the white house detail ",
            "TestID": "control_644",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0226_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0226-proposed-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0226-proposed-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0226-proposed-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0226-proposed-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0226-proposed-d2-4_gen.wav"
            }
        },
        {
            "Name": "Eighteen agents are proposed for a rotating pool which will go through an <font color='#FF0000'>intensive</font> training cycle and also be available to supplement the white house detail ",
            "TestID": "control_645",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0226_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0226-intensive-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0226-intensive-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0226-intensive-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0226-intensive-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0226-intensive-d3-4_gen.wav"
            }
        },
        {
            "Name": "Eighteen agents are proposed for a rotating pool which will go through an intensive training cycle and also be available to <font color='#FF0000'>supplement</font> the white house detail ",
            "TestID": "control_646",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0226_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0226-supplement-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0226-supplement-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0226-supplement-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0226-supplement-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0226-supplement-d4-4_gen.wav"
            }
        },
        {
            "Name": "In case of <font color='#FF0000'>unexpected</font> need, and twenty five additional agents are recommended to provide the vice president full protection. ",
            "TestID": "control_647",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0227_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0227-unexpected-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0227-unexpected-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0227-unexpected-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0227-unexpected-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0227-unexpected-d1-4_gen.wav"
            }
        },
        {
            "Name": "In case of unexpected need, and twenty five additional agents are <font color='#FF0000'>recommended</font> to provide the vice president full protection. ",
            "TestID": "control_648",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0227_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0227-recommended-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0227-recommended-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0227-recommended-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0227-recommended-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0227-recommended-d2-4_gen.wav"
            }
        },
        {
            "Name": "In case of unexpected need, and twenty five additional agents are recommended to <font color='#FF0000'>provide</font> the vice president full protection. ",
            "TestID": "control_649",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0227_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0227-provide-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0227-provide-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0227-provide-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0227-provide-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0227-provide-d2-4_gen.wav"
            }
        },
        {
            "Name": "In case of unexpected need, and twenty five additional agents are recommended to provide the vice <font color='#FF0000'>president</font> full protection. ",
            "TestID": "control_650",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0227_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0227-president-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0227-president-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0227-president-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0227-president-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0227-president-d1-4_gen.wav"
            }
        },
        {
            "Name": "In case of unexpected need, and twenty five additional agents are recommended to provide the vice president full <font color='#FF0000'>protection</font>. ",
            "TestID": "control_651",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0227_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0227-protection-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0227-protection-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0227-protection-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0227-protection-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0227-protection-d0-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> urges that the bureau of the budget review these recommendations with the secret service and authorize a request for the necessary supplemental appropriation, ",
            "TestID": "control_652",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0228_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0228-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0228-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0228-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0228-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0228-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission urges that the bureau of the <font color='#FF0000'>budget</font> review these recommendations with the secret service and authorize a request for the necessary supplemental appropriation, ",
            "TestID": "control_653",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0228_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0228-budget-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0228-budget-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0228-budget-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0228-budget-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0228-budget-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission urges that the bureau of the budget review these recommendations with the <font color='#FF0000'>secret</font> service and authorize a request for the necessary supplemental appropriation, ",
            "TestID": "control_654",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0228_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0228-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0228-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0228-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0228-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0228-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission urges that the bureau of the budget review these recommendations with the secret service and authorize a <font color='#FF0000'>request</font> for the necessary supplemental appropriation, ",
            "TestID": "control_655",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0228_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0228-request-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0228-request-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0228-request-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0228-request-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0228-request-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission urges that the bureau of the budget review these recommendations with the secret service and authorize a request for the necessary supplemental <font color='#FF0000'>appropriation</font>, ",
            "TestID": "control_656",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0228_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0228-appropriation-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0228-appropriation-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0228-appropriation-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0228-appropriation-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0228-appropriation-d1-4_gen.wav"
            }
        },
        {
            "Name": "As soon as it can be <font color='#FF0000'>justified</font>. the congress has often stressed that it will support any reasonable request for funds for the protection of the president. ",
            "TestID": "control_657",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0229_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0229-justified-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0229-justified-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0229-justified-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0229-justified-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0229-justified-d1-4_gen.wav"
            }
        },
        {
            "Name": "As soon as it can be justified. the congress has <font color='#FF0000'>often</font> stressed that it will support any reasonable request for funds for the protection of the president. ",
            "TestID": "control_658",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0229_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0229-often-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0229-often-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0229-often-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0229-often-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0229-often-d3-4_gen.wav"
            }
        },
        {
            "Name": "As soon as it can be justified. the congress has often <font color='#FF0000'>stressed</font> that it will support any reasonable request for funds for the protection of the president. ",
            "TestID": "control_659",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0229_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0229-stressed-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0229-stressed-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0229-stressed-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0229-stressed-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0229-stressed-d1-4_gen.wav"
            }
        },
        {
            "Name": "As soon as it can be justified. the congress has often stressed that it will <font color='#FF0000'>support</font> any reasonable request for funds for the protection of the president. ",
            "TestID": "control_660",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0229_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0229-support-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0229-support-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0229-support-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0229-support-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0229-support-d0-4_gen.wav"
            }
        },
        {
            "Name": "As soon as it can be justified. the congress has often stressed that it will support any reasonable <font color='#FF0000'>request</font> for funds for the protection of the president. ",
            "TestID": "control_661",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0229_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0229-request-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0229-request-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0229-request-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0229-request-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0229-request-d2-4_gen.wav"
            }
        },
        {
            "Name": "As soon as it can be justified. the congress has often stressed that it will support any reasonable request for funds for the <font color='#FF0000'>protection</font> of the president. ",
            "TestID": "control_662",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0229_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0229-protection-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0229-protection-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0229-protection-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0229-protection-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0229-protection-d4-4_gen.wav"
            }
        },
        {
            "Name": "As soon as it can be justified. the congress has often stressed that it will support any reasonable request for funds for the protection of the <font color='#FF0000'>president</font>. ",
            "TestID": "control_663",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0229_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0229-president-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0229-president-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0229-president-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0229-president-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0229-president-d0-4_gen.wav"
            }
        },
        {
            "Name": "Before the <font color='#FF0000'>assassination</font> the secret service infrequently requested other federal law enforcement agencies to provide personnel ",
            "TestID": "control_664",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0231_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0231-assassination-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0231-assassination-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0231-assassination-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0231-assassination-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0231-assassination-d1-4_gen.wav"
            }
        },
        {
            "Name": "Before the assassination the <font color='#FF0000'>secret</font> service infrequently requested other federal law enforcement agencies to provide personnel ",
            "TestID": "control_665",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0231_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0231-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0231-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0231-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0231-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0231-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Before the assassination the secret service infrequently <font color='#FF0000'>requested</font> other federal law enforcement agencies to provide personnel ",
            "TestID": "control_666",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0231_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0231-requested-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0231-requested-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0231-requested-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0231-requested-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0231-requested-d2-4_gen.wav"
            }
        },
        {
            "Name": "Before the assassination the secret service infrequently requested other federal law <font color='#FF0000'>enforcement</font> agencies to provide personnel ",
            "TestID": "control_667",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0231_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0231-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0231-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0231-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0231-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0231-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "Before the assassination the secret service infrequently requested other federal law enforcement agencies to <font color='#FF0000'>provide</font> personnel ",
            "TestID": "control_668",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0231_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0231-provide-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0231-provide-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0231-provide-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0231-provide-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0231-provide-d3-4_gen.wav"
            }
        },
        {
            "Name": "To <font color='#FF0000'>assist</font> in its protection functions. ",
            "TestID": "control_669",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0232_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0232-assist-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0232-assist-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0232-assist-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0232-assist-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0232-assist-d3-4_gen.wav"
            }
        },
        {
            "Name": "To assist in its <font color='#FF0000'>protection</font> functions. ",
            "TestID": "control_670",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0232_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0232-protection-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0232-protection-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0232-protection-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0232-protection-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0232-protection-d4-4_gen.wav"
            }
        },
        {
            "Name": "Since the <font color='#FF0000'>assassination</font>, the service has experimented with the use of agents borrowed for short periods from such agencies. ",
            "TestID": "control_671",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0233_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0233-assassination-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0233-assassination-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0233-assassination-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0233-assassination-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0233-assassination-d0-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, the service has <font color='#FF0000'>experimented</font> with the use of agents borrowed for short periods from such agencies. ",
            "TestID": "control_672",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0233_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0233-experimented-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0233-experimented-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0233-experimented-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0233-experimented-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0233-experimented-d4-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, the service has experimented with the use of agents <font color='#FF0000'>borrowed</font> for short periods from such agencies. ",
            "TestID": "control_673",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0233_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0233-borrowed-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0233-borrowed-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0233-borrowed-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0233-borrowed-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0233-borrowed-d2-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, the service has experimented with the use of agents borrowed for <font color='#FF0000'>short</font> periods from such agencies. ",
            "TestID": "control_674",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0233_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0233-short-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0233-short-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0233-short-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0233-short-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0233-short-d3-4_gen.wav"
            }
        },
        {
            "Name": "Since the assassination, the service has experimented with the use of agents borrowed for short periods <font color='#FF0000'>from</font> such agencies. ",
            "TestID": "control_675",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0233_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0233-from-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0233-from-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0233-from-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0233-from-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0233-from-d2-4_gen.wav"
            }
        },
        {
            "Name": "It has <font color='#FF0000'>used</font> other treasury law enforcement agents on special experiments in building and route surveys in places to which the president frequently travels. ",
            "TestID": "control_676",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0234_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0234-used-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0234-used-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0234-used-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0234-used-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0234-used-d2-4_gen.wav"
            }
        },
        {
            "Name": "It has used other treasury law <font color='#FF0000'>enforcement</font> agents on special experiments in building and route surveys in places to which the president frequently travels. ",
            "TestID": "control_677",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0234_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0234-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0234-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0234-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0234-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0234-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "It has used other treasury law enforcement agents on special experiments in building and route surveys in places to which the <font color='#FF0000'>president</font> frequently travels. ",
            "TestID": "control_678",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0234_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0234-president-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0234-president-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0234-president-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0234-president-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0234-president-d2-4_gen.wav"
            }
        },
        {
            "Name": "It has also <font color='#FF0000'>used</font> other federal law enforcement agents during presidential visits to cities in which such agents are stationed. ",
            "TestID": "control_679",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0235_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0235-used-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0235-used-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0235-used-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0235-used-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0235-used-d2-4_gen.wav"
            }
        },
        {
            "Name": "It has also used other federal law <font color='#FF0000'>enforcement</font> agents during presidential visits to cities in which such agents are stationed. ",
            "TestID": "control_680",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0235_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0235-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0235-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0235-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0235-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0235-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "It has also used other federal law enforcement agents during presidential visits to cities in which such agents are <font color='#FF0000'>stationed</font>. ",
            "TestID": "control_681",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0235_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0235-stationed-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0235-stationed-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0235-stationed-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0235-stationed-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0235-stationed-d0-4_gen.wav"
            }
        },
        {
            "Name": "Thus, in the four months following the <font color='#FF0000'>assassination</font>, ",
            "TestID": "control_682",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0236_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0236-assassination-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0236-assassination-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0236-assassination-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0236-assassination-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0236-assassination-d0-4_gen.wav"
            }
        },
        {
            "Name": "The fbi on <font color='#FF0000'>sixteen</font> separate occasions, supplied a total of one hundred thirty nine agents to assist in protection work during a presidential visit, ",
            "TestID": "control_683",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0237_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0237-sixteen-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0237-sixteen-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0237-sixteen-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0237-sixteen-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0237-sixteen-d3-4_gen.wav"
            }
        },
        {
            "Name": "The fbi on sixteen <font color='#FF0000'>separate</font> occasions, supplied a total of one hundred thirty nine agents to assist in protection work during a presidential visit, ",
            "TestID": "control_684",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0237_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0237-separate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0237-separate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0237-separate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0237-separate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0237-separate-d4-4_gen.wav"
            }
        },
        {
            "Name": "The fbi on sixteen separate occasions, <font color='#FF0000'>supplied</font> a total of one hundred thirty nine agents to assist in protection work during a presidential visit, ",
            "TestID": "control_685",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0237_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0237-supplied-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0237-supplied-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0237-supplied-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0237-supplied-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0237-supplied-d3-4_gen.wav"
            }
        },
        {
            "Name": "The fbi on sixteen separate occasions, supplied a total of one <font color='#FF0000'>hundred</font> thirty nine agents to assist in protection work during a presidential visit, ",
            "TestID": "control_686",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0237_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0237-hundred-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0237-hundred-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0237-hundred-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0237-hundred-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0237-hundred-d2-4_gen.wav"
            }
        },
        {
            "Name": "The fbi on sixteen separate occasions, supplied a total of one hundred thirty nine agents to <font color='#FF0000'>assist</font> in protection work during a presidential visit, ",
            "TestID": "control_687",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0237_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0237-assist-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0237-assist-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0237-assist-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0237-assist-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0237-assist-d3-4_gen.wav"
            }
        },
        {
            "Name": "The fbi on sixteen separate occasions, supplied a total of one hundred thirty nine agents to assist in <font color='#FF0000'>protection</font> work during a presidential visit, ",
            "TestID": "control_688",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0237_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0237-protection-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0237-protection-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0237-protection-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0237-protection-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0237-protection-d2-4_gen.wav"
            }
        },
        {
            "Name": "The fbi on sixteen separate occasions, supplied a total of one hundred thirty nine agents to assist in protection work during a presidential <font color='#FF0000'>visit</font>, ",
            "TestID": "control_689",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0237_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0237-visit-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0237-visit-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0237-visit-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0237-visit-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0237-visit-d0-4_gen.wav"
            }
        },
        {
            "Name": "From february <font color='#FF0000'>eleven</font> through june thirty, nineteen sixty four, ",
            "TestID": "control_690",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0239_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0239-eleven-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0239-eleven-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0239-eleven-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0239-eleven-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0239-eleven-d1-4_gen.wav"
            }
        },
        {
            "Name": "From february eleven through june thirty, <font color='#FF0000'>nineteen</font> sixty four, ",
            "TestID": "control_691",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0239_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0239-nineteen-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0239-nineteen-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0239-nineteen-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0239-nineteen-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0239-nineteen-d2-4_gen.wav"
            }
        },
        {
            "Name": "The service had the <font color='#FF0000'>advantage</font> of nine thousand five hundred hours of work by other enforcement agencies. ",
            "TestID": "control_692",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0240_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0240-advantage-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0240-advantage-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0240-advantage-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0240-advantage-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0240-advantage-d2-4_gen.wav"
            }
        },
        {
            "Name": "The service had the advantage of nine <font color='#FF0000'>thousand</font> five hundred hours of work by other enforcement agencies. ",
            "TestID": "control_693",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0240_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0240-thousand-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0240-thousand-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0240-thousand-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0240-thousand-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0240-thousand-d2-4_gen.wav"
            }
        },
        {
            "Name": "The service had the advantage of nine thousand five <font color='#FF0000'>hundred</font> hours of work by other enforcement agencies. ",
            "TestID": "control_694",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0240_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0240-hundred-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0240-hundred-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0240-hundred-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0240-hundred-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0240-hundred-d2-4_gen.wav"
            }
        },
        {
            "Name": "The service had the advantage of nine thousand five hundred hours of work by other <font color='#FF0000'>enforcement</font> agencies. ",
            "TestID": "control_695",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0240_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0240-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0240-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0240-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0240-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0240-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "The fbi has <font color='#FF0000'>indicated</font> that it is willing to continue to make such assistance available, ",
            "TestID": "control_696",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0241_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0241-indicated-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0241-indicated-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0241-indicated-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0241-indicated-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0241-indicated-d1-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>even</font> though it agrees with the secret service that it is preferable for the service to have enough agents to handle all protective demands. ",
            "TestID": "control_697",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0242_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0242-even-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0242-even-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0242-even-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0242-even-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0242-even-d3-4_gen.wav"
            }
        },
        {
            "Name": "Even though it agrees with the <font color='#FF0000'>secret</font> service that it is preferable for the service to have enough agents to handle all protective demands. ",
            "TestID": "control_698",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0242_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0242-secret-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0242-secret-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0242-secret-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0242-secret-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0242-secret-d1-4_gen.wav"
            }
        },
        {
            "Name": "Even though it agrees with the secret service that it is preferable for the service to have <font color='#FF0000'>enough</font> agents to handle all protective demands. ",
            "TestID": "control_699",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0242_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0242-enough-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0242-enough-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0242-enough-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0242-enough-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0242-enough-d3-4_gen.wav"
            }
        },
        {
            "Name": "Even though it agrees with the secret service that it is preferable for the service to have enough agents to handle all <font color='#FF0000'>protective</font> demands. ",
            "TestID": "control_700",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0242_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0242-protective-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0242-protective-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0242-protective-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0242-protective-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0242-protective-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> endorses these efforts to supplement the service's own personnel by obtaining for short periods of time, ",
            "TestID": "control_701",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0243_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0243-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0243-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0243-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0243-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0243-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission endorses these efforts to <font color='#FF0000'>supplement</font> the service's own personnel by obtaining for short periods of time, ",
            "TestID": "control_702",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0243_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0243-supplement-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0243-supplement-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0243-supplement-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0243-supplement-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0243-supplement-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission endorses these efforts to supplement the service's own personnel by obtaining for <font color='#FF0000'>short</font> periods of time, ",
            "TestID": "control_703",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0243_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0243-short-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0243-short-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0243-short-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0243-short-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0243-short-d3-4_gen.wav"
            }
        },
        {
            "Name": "The assistance of <font color='#FF0000'>trained</font> federal law enforcement officers. ",
            "TestID": "control_704",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0244_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0244-trained-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0244-trained-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0244-trained-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0244-trained-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0244-trained-d3-4_gen.wav"
            }
        },
        {
            "Name": "The assistance of trained federal law <font color='#FF0000'>enforcement</font> officers. ",
            "TestID": "control_705",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0244_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0244-enforcement-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0244-enforcement-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0244-enforcement-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0244-enforcement-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0244-enforcement-d1-4_gen.wav"
            }
        },
        {
            "Name": "In view of the ever increasing mobility of <font color='#FF0000'>american</font> presidents, it seems unlikely that the service could or should increase its own staff to a size ",
            "TestID": "control_706",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0245_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0245-american-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0245-american-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0245-american-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0245-american-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0245-american-d1-4_gen.wav"
            }
        },
        {
            "Name": "In view of the ever increasing mobility of american presidents, it seems unlikely that the service could or should increase its own <font color='#FF0000'>staff</font> to a size ",
            "TestID": "control_707",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0245_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0245-staff-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0245-staff-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0245-staff-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0245-staff-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0245-staff-d4-4_gen.wav"
            }
        },
        {
            "Name": "Which would <font color='#FF0000'>permit</font> it to provide adequate protective manpower for all situations. ",
            "TestID": "control_708",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0246_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0246-permit-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0246-permit-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0246-permit-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0246-permit-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0246-permit-d3-4_gen.wav"
            }
        },
        {
            "Name": "Which would permit it to <font color='#FF0000'>provide</font> adequate protective manpower for all situations. ",
            "TestID": "control_709",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0246_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0246-provide-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0246-provide-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0246-provide-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0246-provide-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0246-provide-d2-4_gen.wav"
            }
        },
        {
            "Name": "Which would permit it to provide <font color='#FF0000'>adequate</font> protective manpower for all situations. ",
            "TestID": "control_710",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0246_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0246-adequate-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0246-adequate-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0246-adequate-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0246-adequate-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0246-adequate-d4-4_gen.wav"
            }
        },
        {
            "Name": "Which would permit it to provide adequate <font color='#FF0000'>protective</font> manpower for all situations. ",
            "TestID": "control_711",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0246_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0246-protective-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0246-protective-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0246-protective-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0246-protective-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0246-protective-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> recommends that the agencies involved determine how much periodic assistance they can provide, and that each such agency ",
            "TestID": "control_712",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0247_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0247-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0247-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0247-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0247-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0247-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that the agencies <font color='#FF0000'>involved</font> determine how much periodic assistance they can provide, and that each such agency ",
            "TestID": "control_713",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0247_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0247-involved-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0247-involved-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0247-involved-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0247-involved-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0247-involved-d0-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that the agencies involved <font color='#FF0000'>determine</font> how much periodic assistance they can provide, and that each such agency ",
            "TestID": "control_714",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0247_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0247-determine-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0247-determine-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0247-determine-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0247-determine-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0247-determine-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that the agencies involved determine how much <font color='#FF0000'>periodic</font> assistance they can provide, and that each such agency ",
            "TestID": "control_715",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0247_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0247-periodic-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0247-periodic-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0247-periodic-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0247-periodic-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0247-periodic-d2-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that the agencies involved determine how much periodic assistance they can <font color='#FF0000'>provide</font>, and that each such agency ",
            "TestID": "control_716",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0247_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0247-provide-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0247-provide-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0247-provide-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0247-provide-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0247-provide-d2-4_gen.wav"
            }
        },
        {
            "Name": "And the <font color='#FF0000'>secret</font> service enter into a formal agreement defining such arrangements. ",
            "TestID": "control_717",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0248_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0248-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0248-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0248-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0248-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0248-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "And the secret service enter into a formal <font color='#FF0000'>agreement</font> defining such arrangements. ",
            "TestID": "control_718",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0248_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0248-agreement-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0248-agreement-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0248-agreement-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0248-agreement-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0248-agreement-d4-4_gen.wav"
            }
        },
        {
            "Name": "It may eventually be desirable to codify the practice in an <font color='#FF0000'>executive</font> order. ",
            "TestID": "control_719",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0249_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0249-executive-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0249-executive-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0249-executive-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0249-executive-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0249-executive-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service will be better able to plan its own long range personnel requirements if it knows with reasonable certainty ",
            "TestID": "control_720",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0250_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0250-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0250-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0250-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0250-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0250-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service will be better able to <font color='#FF0000'>plan</font> its own long range personnel requirements if it knows with reasonable certainty ",
            "TestID": "control_721",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0250_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0250-plan-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0250-plan-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0250-plan-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0250-plan-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0250-plan-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service will be better able to plan its own long <font color='#FF0000'>range</font> personnel requirements if it knows with reasonable certainty ",
            "TestID": "control_722",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0250_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0250-range-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0250-range-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0250-range-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0250-range-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0250-range-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>amount</font> of assistance that it can expect from other agencies. ",
            "TestID": "control_723",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0251_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0251-amount-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0251-amount-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0251-amount-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0251-amount-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0251-amount-d3-4_gen.wav"
            }
        },
        {
            "Name": "The amount of assistance that it can <font color='#FF0000'>expect</font> from other agencies. ",
            "TestID": "control_724",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0251_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0251-expect-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0251-expect-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0251-expect-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0251-expect-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0251-expect-d4-4_gen.wav"
            }
        },
        {
            "Name": "The occasional use of personnel <font color='#FF0000'>from</font> other federal agencies to assist in protecting the president has a further advantage. it symbolizes the reality ",
            "TestID": "control_725",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0252_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0252-from-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0252-from-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0252-from-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0252-from-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0252-from-d2-4_gen.wav"
            }
        },
        {
            "Name": "The occasional use of personnel from other federal agencies to <font color='#FF0000'>assist</font> in protecting the president has a further advantage. it symbolizes the reality ",
            "TestID": "control_726",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0252_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0252-assist-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0252-assist-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0252-assist-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0252-assist-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0252-assist-d2-4_gen.wav"
            }
        },
        {
            "Name": "The occasional use of personnel from other federal agencies to assist in protecting the <font color='#FF0000'>president</font> has a further advantage. it symbolizes the reality ",
            "TestID": "control_727",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0252_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0252-president-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0252-president-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0252-president-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0252-president-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0252-president-d0-4_gen.wav"
            }
        },
        {
            "Name": "The occasional use of personnel from other federal agencies to assist in protecting the president has a further <font color='#FF0000'>advantage</font>. it symbolizes the reality ",
            "TestID": "control_728",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0252_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0252-advantage-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0252-advantage-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0252-advantage-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0252-advantage-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0252-advantage-d4-4_gen.wav"
            }
        },
        {
            "Name": "That the job of protecting the <font color='#FF0000'>president</font> has not been and cannot be exclusively the responsibility of the secret service. ",
            "TestID": "control_729",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0253_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0253-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0253-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0253-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0253-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0253-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "That the job of protecting the president has not been and <font color='#FF0000'>cannot</font> be exclusively the responsibility of the secret service. ",
            "TestID": "control_730",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0253_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0253-cannot-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0253-cannot-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0253-cannot-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0253-cannot-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0253-cannot-d0-4_gen.wav"
            }
        },
        {
            "Name": "That the job of protecting the president has not been and cannot be exclusively the responsibility of the <font color='#FF0000'>secret</font> service. ",
            "TestID": "control_731",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0253_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0253-secret-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0253-secret-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0253-secret-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0253-secret-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0253-secret-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service in the past has sometimes guarded its right to be acknowledged as the sole protector of the chief executive. ",
            "TestID": "control_732",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0254_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0254-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0254-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0254-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0254-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0254-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service in the <font color='#FF0000'>past</font> has sometimes guarded its right to be acknowledged as the sole protector of the chief executive. ",
            "TestID": "control_733",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0254_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0254-past-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0254-past-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0254-past-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0254-past-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0254-past-d0-4_gen.wav"
            }
        },
        {
            "Name": "The secret service in the past has sometimes <font color='#FF0000'>guarded</font> its right to be acknowledged as the sole protector of the chief executive. ",
            "TestID": "control_734",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0254_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0254-guarded-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0254-guarded-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0254-guarded-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0254-guarded-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0254-guarded-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service in the past has sometimes guarded its right to be <font color='#FF0000'>acknowledged</font> as the sole protector of the chief executive. ",
            "TestID": "control_735",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0254_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0254-acknowledged-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0254-acknowledged-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0254-acknowledged-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0254-acknowledged-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0254-acknowledged-d0-4_gen.wav"
            }
        },
        {
            "Name": "The secret service in the past has sometimes guarded its right to be acknowledged as the sole protector of the chief <font color='#FF0000'>executive</font>. ",
            "TestID": "control_736",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0254_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0254-executive-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0254-executive-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0254-executive-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0254-executive-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0254-executive-d0-4_gen.wav"
            }
        },
        {
            "Name": "Protecting the <font color='#FF0000'>president</font> is a difficult and complex task which requires full use of the best resources of many parts of our government. ",
            "TestID": "control_737",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0256_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0256-president-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0256-president-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0256-president-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0256-president-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0256-president-d1-4_gen.wav"
            }
        },
        {
            "Name": "Protecting the president is a <font color='#FF0000'>difficult</font> and complex task which requires full use of the best resources of many parts of our government. ",
            "TestID": "control_738",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0256_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0256-difficult-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0256-difficult-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0256-difficult-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0256-difficult-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0256-difficult-d4-4_gen.wav"
            }
        },
        {
            "Name": "Protecting the president is a difficult and complex <font color='#FF0000'>task</font> which requires full use of the best resources of many parts of our government. ",
            "TestID": "control_739",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0256_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0256-task-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0256-task-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0256-task-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0256-task-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0256-task-d4-4_gen.wav"
            }
        },
        {
            "Name": "Protecting the president is a difficult and complex task which requires full use of the <font color='#FF0000'>best</font> resources of many parts of our government. ",
            "TestID": "control_740",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0256_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0256-best-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0256-best-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0256-best-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0256-best-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0256-best-d3-4_gen.wav"
            }
        },
        {
            "Name": "Protecting the president is a difficult and complex task which requires full use of the best resources of many parts of our <font color='#FF0000'>government</font>. ",
            "TestID": "control_741",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0256_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0256-government-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0256-government-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0256-government-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0256-government-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0256-government-d1-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>recognition</font> that the responsibility must be shared increases the likelihood that it will be met. ",
            "TestID": "control_742",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0257_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0257-recognition-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0257-recognition-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0257-recognition-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0257-recognition-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0257-recognition-d3-4_gen.wav"
            }
        },
        {
            "Name": "Recognition that the responsibility <font color='#FF0000'>must</font> be shared increases the likelihood that it will be met. ",
            "TestID": "control_743",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0257_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0257-must-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0257-must-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0257-must-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0257-must-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0257-must-d3-4_gen.wav"
            }
        },
        {
            "Name": "Recognition that the responsibility must be <font color='#FF0000'>shared</font> increases the likelihood that it will be met. ",
            "TestID": "control_744",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0257_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0257-shared-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0257-shared-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0257-shared-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0257-shared-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0257-shared-d4-4_gen.wav"
            }
        },
        {
            "Name": "Recognition that the responsibility must be shared increases the <font color='#FF0000'>likelihood</font> that it will be met. ",
            "TestID": "control_745",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0257_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0257-likelihood-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0257-likelihood-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0257-likelihood-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0257-likelihood-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0257-likelihood-d4-4_gen.wav"
            }
        },
        {
            "Name": "Much of the <font color='#FF0000'>secret</font> service work requires the development and use of highly sophisticated equipment, ",
            "TestID": "control_746",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0258_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0258-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0258-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0258-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0258-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0258-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "Much of the secret service work requires the <font color='#FF0000'>development</font> and use of highly sophisticated equipment, ",
            "TestID": "control_747",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0258_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0258-development-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0258-development-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0258-development-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0258-development-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0258-development-d3-4_gen.wav"
            }
        },
        {
            "Name": "Much of the secret service work requires the development and use of highly <font color='#FF0000'>sophisticated</font> equipment, ",
            "TestID": "control_748",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0258_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0258-sophisticated-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0258-sophisticated-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0258-sophisticated-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0258-sophisticated-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0258-sophisticated-d2-4_gen.wav"
            }
        },
        {
            "Name": "Much of the secret service work requires the development and use of highly sophisticated <font color='#FF0000'>equipment</font>, ",
            "TestID": "control_749",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0258_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0258-equipment-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0258-equipment-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0258-equipment-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0258-equipment-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0258-equipment-d0-4_gen.wav"
            }
        },
        {
            "Name": "Some of which <font color='#FF0000'>must</font> be specially designed to fit unique requirements. even before the assassination, and to a far greater extent thereafter, ",
            "TestID": "control_750",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0259_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0259-must-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0259-must-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0259-must-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0259-must-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0259-must-d2-4_gen.wav"
            }
        },
        {
            "Name": "Some of which must be specially <font color='#FF0000'>designed</font> to fit unique requirements. even before the assassination, and to a far greater extent thereafter, ",
            "TestID": "control_751",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0259_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0259-designed-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0259-designed-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0259-designed-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0259-designed-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0259-designed-d0-4_gen.wav"
            }
        },
        {
            "Name": "Some of which must be specially designed to fit <font color='#FF0000'>unique</font> requirements. even before the assassination, and to a far greater extent thereafter, ",
            "TestID": "control_752",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0259_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0259-unique-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0259-unique-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0259-unique-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0259-unique-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0259-unique-d4-4_gen.wav"
            }
        },
        {
            "Name": "Some of which must be specially designed to fit unique requirements. <font color='#FF0000'>even</font> before the assassination, and to a far greater extent thereafter, ",
            "TestID": "control_753",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0259_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0259-even-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0259-even-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0259-even-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0259-even-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0259-even-d3-4_gen.wav"
            }
        },
        {
            "Name": "Some of which must be specially designed to fit unique requirements. even before the <font color='#FF0000'>assassination</font>, and to a far greater extent thereafter, ",
            "TestID": "control_754",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0259_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0259-assassination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0259-assassination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0259-assassination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0259-assassination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0259-assassination-d4-4_gen.wav"
            }
        },
        {
            "Name": "Some of which must be specially designed to fit unique requirements. even before the assassination, and to a far greater <font color='#FF0000'>extent</font> thereafter, ",
            "TestID": "control_755",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0259_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0259-extent-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0259-extent-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0259-extent-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0259-extent-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0259-extent-d1-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>secret</font> service has been receiving full cooperation in scientific research and technological development ",
            "TestID": "control_756",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0260_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0260-secret-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0260-secret-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0260-secret-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0260-secret-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0260-secret-d3-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has been receiving full <font color='#FF0000'>cooperation</font> in scientific research and technological development ",
            "TestID": "control_757",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0260_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0260-cooperation-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0260-cooperation-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0260-cooperation-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0260-cooperation-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0260-cooperation-d4-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has been receiving full cooperation in <font color='#FF0000'>scientific</font> research and technological development ",
            "TestID": "control_758",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0260_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0260-scientific-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0260-scientific-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0260-scientific-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0260-scientific-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0260-scientific-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has been receiving full cooperation in scientific <font color='#FF0000'>research</font> and technological development ",
            "TestID": "control_759",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0260_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0260-research-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0260-research-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0260-research-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0260-research-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0260-research-d2-4_gen.wav"
            }
        },
        {
            "Name": "The secret service has been receiving full cooperation in scientific research and technological <font color='#FF0000'>development</font> ",
            "TestID": "control_760",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0260_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0260-development-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0260-development-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0260-development-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0260-development-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0260-development-d4-4_gen.wav"
            }
        },
        {
            "Name": "From many <font color='#FF0000'>government</font> agencies including the department of defense and the president's office of science and technology. ",
            "TestID": "control_761",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0261_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0261-government-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0261-government-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0261-government-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0261-government-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0261-government-d1-4_gen.wav"
            }
        },
        {
            "Name": "From many government agencies including the <font color='#FF0000'>department</font> of defense and the president's office of science and technology. ",
            "TestID": "control_762",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0261_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0261-department-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0261-department-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0261-department-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0261-department-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0261-department-d2-4_gen.wav"
            }
        },
        {
            "Name": "<font color='#FF0000'>even</font> if the manpower and technological resources of the secret service are adequately augmented, ",
            "TestID": "control_763",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0262_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0262-even-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0262-even-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0262-even-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0262-even-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0262-even-d3-4_gen.wav"
            }
        },
        {
            "Name": "Even if the manpower and technological resources of the <font color='#FF0000'>secret</font> service are adequately augmented, ",
            "TestID": "control_764",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0262_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0262-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0262-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0262-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0262-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0262-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "Even if the manpower and technological resources of the secret service are adequately <font color='#FF0000'>augmented</font>, ",
            "TestID": "control_765",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0262_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0262-augmented-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0262-augmented-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0262-augmented-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0262-augmented-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0262-augmented-d1-4_gen.wav"
            }
        },
        {
            "Name": "It will continue to rely in many respects <font color='#FF0000'>upon</font> the greater resources of the office of science and technology and other agencies. ",
            "TestID": "control_766",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0263_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0263-upon-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0263-upon-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0263-upon-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0263-upon-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0263-upon-d2-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> recommends that the present arrangements ",
            "TestID": "control_767",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0264_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0264-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0264-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0264-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0264-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0264-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission recommends that the <font color='#FF0000'>present</font> arrangements ",
            "TestID": "control_768",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0264_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0264-present-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0264-present-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0264-present-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0264-present-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0264-present-d3-4_gen.wav"
            }
        },
        {
            "Name": "With the office of science and technology and the other federal agencies that have been so helpful to the <font color='#FF0000'>secret</font> service be placed on a permanent and formal basis. ",
            "TestID": "control_769",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0265_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0265-secret-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0265-secret-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0265-secret-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0265-secret-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0265-secret-d2-4_gen.wav"
            }
        },
        {
            "Name": "With the office of science and technology and the other federal agencies that have been so helpful to the secret service be <font color='#FF0000'>placed</font> on a permanent and formal basis. ",
            "TestID": "control_770",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0265_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0265-placed-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0265-placed-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0265-placed-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0265-placed-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0265-placed-d3-4_gen.wav"
            }
        },
        {
            "Name": "With the office of science and technology and the other federal agencies that have been so helpful to the secret service be placed on a <font color='#FF0000'>permanent</font> and formal basis. ",
            "TestID": "control_771",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0265_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0265-permanent-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0265-permanent-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0265-permanent-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0265-permanent-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0265-permanent-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>exchange</font> of letters dated august thirty one, nineteen sixty four, ",
            "TestID": "control_772",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0266_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0266-exchange-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0266-exchange-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0266-exchange-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0266-exchange-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0266-exchange-d3-4_gen.wav"
            }
        },
        {
            "Name": "The exchange of letters <font color='#FF0000'>dated</font> august thirty one, nineteen sixty four, ",
            "TestID": "control_773",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0266_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0266-dated-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0266-dated-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0266-dated-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0266-dated-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0266-dated-d1-4_gen.wav"
            }
        },
        {
            "Name": "The exchange of letters dated <font color='#FF0000'>august</font> thirty one, nineteen sixty four, ",
            "TestID": "control_774",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0266_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0266-august-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0266-august-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0266-august-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0266-august-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0266-august-d2-4_gen.wav"
            }
        },
        {
            "Name": "The exchange of letters dated august thirty one, <font color='#FF0000'>nineteen</font> sixty four, ",
            "TestID": "control_775",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0266_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0266-nineteen-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0266-nineteen-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0266-nineteen-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0266-nineteen-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0266-nineteen-d4-4_gen.wav"
            }
        },
        {
            "Name": "The service should <font color='#FF0000'>negotiate</font> a memorandum of understanding with each agency that has been assisting it and from which it can expect to need help in the future. ",
            "TestID": "control_776",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0268_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0268-negotiate-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0268-negotiate-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0268-negotiate-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0268-negotiate-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0268-negotiate-d2-4_gen.wav"
            }
        },
        {
            "Name": "The service should negotiate a <font color='#FF0000'>memorandum</font> of understanding with each agency that has been assisting it and from which it can expect to need help in the future. ",
            "TestID": "control_777",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0268_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0268-memorandum-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0268-memorandum-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0268-memorandum-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0268-memorandum-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0268-memorandum-d3-4_gen.wav"
            }
        },
        {
            "Name": "The service should negotiate a memorandum of understanding with each agency that has been assisting it and from which it can <font color='#FF0000'>expect</font> to need help in the future. ",
            "TestID": "control_778",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0268_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0268-expect-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0268-expect-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0268-expect-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0268-expect-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0268-expect-d4-4_gen.wav"
            }
        },
        {
            "Name": "The service should negotiate a memorandum of understanding with each agency that has been assisting it and from which it can expect to need <font color='#FF0000'>help</font> in the future. ",
            "TestID": "control_779",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0268_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0268-help-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0268-help-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0268-help-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0268-help-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0268-help-d1-4_gen.wav"
            }
        },
        {
            "Name": "The essential terms of such memoranda might well be <font color='#FF0000'>embodied</font> in an executive order. ",
            "TestID": "control_780",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0269_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0269-embodied-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0269-embodied-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0269-embodied-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0269-embodied-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0269-embodied-d4-4_gen.wav"
            }
        },
        {
            "Name": "The essential terms of such memoranda might well be embodied in an <font color='#FF0000'>executive</font> order. ",
            "TestID": "control_781",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0269_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0269-executive-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0269-executive-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0269-executive-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0269-executive-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0269-executive-d1-4_gen.wav"
            }
        },
        {
            "Name": "This <font color='#FF0000'>commission</font> can recommend no procedures for the future protection of our presidents which will guarantee security. ",
            "TestID": "control_782",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0270_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0270-commission-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0270-commission-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0270-commission-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0270-commission-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0270-commission-d4-4_gen.wav"
            }
        },
        {
            "Name": "This commission can <font color='#FF0000'>recommend</font> no procedures for the future protection of our presidents which will guarantee security. ",
            "TestID": "control_783",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0270_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0270-recommend-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0270-recommend-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0270-recommend-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0270-recommend-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0270-recommend-d2-4_gen.wav"
            }
        },
        {
            "Name": "This commission can recommend no procedures for the future <font color='#FF0000'>protection</font> of our presidents which will guarantee security. ",
            "TestID": "control_784",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0270_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0270-protection-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0270-protection-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0270-protection-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0270-protection-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0270-protection-d2-4_gen.wav"
            }
        },
        {
            "Name": "The demands on the <font color='#FF0000'>president</font> in the execution of his responsibilities in today's world are so varied and complex ",
            "TestID": "control_785",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0271_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0271-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0271-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0271-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0271-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0271-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "The demands on the president in the <font color='#FF0000'>execution</font> of his responsibilities in today's world are so varied and complex ",
            "TestID": "control_786",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0271_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0271-execution-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0271-execution-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0271-execution-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0271-execution-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0271-execution-d2-4_gen.wav"
            }
        },
        {
            "Name": "The demands on the president in the execution of his responsibilities in today's <font color='#FF0000'>world</font> are so varied and complex ",
            "TestID": "control_787",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0271_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0271-world-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0271-world-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0271-world-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0271-world-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0271-world-d1-4_gen.wav"
            }
        },
        {
            "Name": "The demands on the president in the execution of his responsibilities in today's world are so <font color='#FF0000'>varied</font> and complex ",
            "TestID": "control_788",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0271_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0271-varied-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0271-varied-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0271-varied-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0271-varied-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0271-varied-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the traditions of the office in a democracy such as ours are so deep <font color='#FF0000'>seated</font> as to preclude absolute security. ",
            "TestID": "control_789",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0272_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0272-seated-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0272-seated-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0272-seated-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0272-seated-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0272-seated-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the traditions of the office in a democracy such as ours are so deep seated as to <font color='#FF0000'>preclude</font> absolute security. ",
            "TestID": "control_790",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0272_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0272-preclude-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0272-preclude-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0272-preclude-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0272-preclude-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0272-preclude-d4-4_gen.wav"
            }
        },
        {
            "Name": "And the traditions of the office in a democracy such as ours are so deep seated as to preclude <font color='#FF0000'>absolute</font> security. ",
            "TestID": "control_791",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0272_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0272-absolute-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0272-absolute-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0272-absolute-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0272-absolute-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0272-absolute-d4-4_gen.wav"
            }
        },
        {
            "Name": "The <font color='#FF0000'>commission</font> has however from its examination of the facts of president kennedy's assassination ",
            "TestID": "control_792",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0273_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0273-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0273-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0273-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0273-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0273-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "The commission has however from its <font color='#FF0000'>examination</font> of the facts of president kennedy's assassination ",
            "TestID": "control_793",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0273_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0273-examination-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0273-examination-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0273-examination-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0273-examination-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0273-examination-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission has however from its examination of the facts of <font color='#FF0000'>president</font> kennedy's assassination ",
            "TestID": "control_794",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0273_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0273-president-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0273-president-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0273-president-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0273-president-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0273-president-d4-4_gen.wav"
            }
        },
        {
            "Name": "The commission has however from its examination of the facts of president kennedy's <font color='#FF0000'>assassination</font> ",
            "TestID": "control_795",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0273_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0273-assassination-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0273-assassination-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0273-assassination-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0273-assassination-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0273-assassination-d1-4_gen.wav"
            }
        },
        {
            "Name": "Made <font color='#FF0000'>certain</font> recommendations which it believes would if adopted, ",
            "TestID": "control_796",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0274_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0274-certain-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0274-certain-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0274-certain-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0274-certain-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0274-certain-d2-4_gen.wav"
            }
        },
        {
            "Name": "Made certain recommendations which it believes would if <font color='#FF0000'>adopted</font>, ",
            "TestID": "control_797",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0274_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0274-adopted-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0274-adopted-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0274-adopted-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0274-adopted-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0274-adopted-d1-4_gen.wav"
            }
        },
        {
            "Name": "Materially <font color='#FF0000'>improve</font> upon the procedures in effect at the time of president kennedy's assassination and result in a substantial lessening of the danger. ",
            "TestID": "control_798",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0275_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0275-improve-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0275-improve-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0275-improve-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0275-improve-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0275-improve-d1-4_gen.wav"
            }
        },
        {
            "Name": "Materially improve <font color='#FF0000'>upon</font> the procedures in effect at the time of president kennedy's assassination and result in a substantial lessening of the danger. ",
            "TestID": "control_799",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0275_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0275-upon-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0275-upon-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0275-upon-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0275-upon-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0275-upon-d2-4_gen.wav"
            }
        },
        {
            "Name": "Materially improve upon the procedures in <font color='#FF0000'>effect</font> at the time of president kennedy's assassination and result in a substantial lessening of the danger. ",
            "TestID": "control_800",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0275_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0275-effect-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0275-effect-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0275-effect-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0275-effect-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0275-effect-d4-4_gen.wav"
            }
        },
        {
            "Name": "Materially improve upon the procedures in effect at the time of <font color='#FF0000'>president</font> kennedy's assassination and result in a substantial lessening of the danger. ",
            "TestID": "control_801",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0275_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0275-president-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0275-president-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0275-president-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0275-president-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0275-president-d2-4_gen.wav"
            }
        },
        {
            "Name": "Materially improve upon the procedures in effect at the time of president kennedy's <font color='#FF0000'>assassination</font> and result in a substantial lessening of the danger. ",
            "TestID": "control_802",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0275_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0275-assassination-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0275-assassination-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0275-assassination-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0275-assassination-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0275-assassination-d0-4_gen.wav"
            }
        },
        {
            "Name": "Materially improve upon the procedures in effect at the time of president kennedy's assassination and <font color='#FF0000'>result</font> in a substantial lessening of the danger. ",
            "TestID": "control_803",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0275_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0275-result-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0275-result-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0275-result-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0275-result-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0275-result-d2-4_gen.wav"
            }
        },
        {
            "Name": "As has been <font color='#FF0000'>pointed</font> out, the commission has not resolved all the proposals which could be made. the commission nevertheless is confident that, ",
            "TestID": "control_804",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0276_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0276-pointed-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0276-pointed-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0276-pointed-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0276-pointed-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0276-pointed-d2-4_gen.wav"
            }
        },
        {
            "Name": "As has been pointed out, the <font color='#FF0000'>commission</font> has not resolved all the proposals which could be made. the <font color='#FF0000'>commission</font> nevertheless is confident that, ",
            "TestID": "control_805",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0276_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0276-commission-d3-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0276-commission-d3-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0276-commission-d3-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0276-commission-d3-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0276-commission-d3-4_gen.wav"
            }
        },
        {
            "Name": "As has been pointed out, the commission has not <font color='#FF0000'>resolved</font> all the proposals which could be made. the commission nevertheless is confident that, ",
            "TestID": "control_806",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0276_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0276-resolved-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0276-resolved-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0276-resolved-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0276-resolved-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0276-resolved-d4-4_gen.wav"
            }
        },
        {
            "Name": "As has been pointed out, the <font color='#FF0000'>commission</font> has not resolved all the proposals which could be made. the <font color='#FF0000'>commission</font> nevertheless is confident that, ",
            "TestID": "control_807",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0276_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0276-commission-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0276-commission-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0276-commission-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0276-commission-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0276-commission-d2-4_gen.wav"
            }
        },
        {
            "Name": "As has been pointed out, the commission has not resolved all the proposals which could be made. the commission nevertheless is <font color='#FF0000'>confident</font> that, ",
            "TestID": "control_808",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0276_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0276-confident-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0276-confident-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0276-confident-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0276-confident-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0276-confident-d4-4_gen.wav"
            }
        },
        {
            "Name": "With the <font color='#FF0000'>active</font> cooperation of the responsible agencies and with the understanding of the people of the united states in their demands upon their president, ",
            "TestID": "control_809",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0277_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0277-active-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0277-active-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0277-active-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0277-active-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0277-active-d4-4_gen.wav"
            }
        },
        {
            "Name": "With the active <font color='#FF0000'>cooperation</font> of the responsible agencies and with the understanding of the people of the united states in their demands upon their president, ",
            "TestID": "control_810",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0277_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0277-cooperation-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0277-cooperation-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0277-cooperation-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0277-cooperation-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0277-cooperation-d0-4_gen.wav"
            }
        },
        {
            "Name": "With the active cooperation of the responsible agencies and with the understanding of the people of the <font color='#FF0000'>united</font> states in their demands upon their president, ",
            "TestID": "control_811",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0277_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0277-united-d1-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0277-united-d1-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0277-united-d1-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0277-united-d1-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0277-united-d1-4_gen.wav"
            }
        },
        {
            "Name": "With the active cooperation of the responsible agencies and with the understanding of the people of the united states in their demands <font color='#FF0000'>upon</font> their president, ",
            "TestID": "control_812",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0277_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0277-upon-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0277-upon-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0277-upon-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0277-upon-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0277-upon-d2-4_gen.wav"
            }
        },
        {
            "Name": "With the active cooperation of the responsible agencies and with the understanding of the people of the united states in their demands upon their <font color='#FF0000'>president</font>, ",
            "TestID": "control_813",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0277_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0277-president-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0277-president-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0277-president-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0277-president-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0277-president-d0-4_gen.wav"
            }
        },
        {
            "Name": "The recommendations we have here <font color='#FF0000'>suggested</font> would greatly advance the security of the office without any impairment of our fundamental liberties. ",
            "TestID": "control_814",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0278_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0278-suggested-d0-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0278-suggested-d0-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0278-suggested-d0-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0278-suggested-d0-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0278-suggested-d0-4_gen.wav"
            }
        },
        {
            "Name": "The recommendations we have here suggested would greatly advance the security of the office <font color='#FF0000'>without</font> any impairment of our fundamental liberties. ",
            "TestID": "control_815",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0278_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0278-without-d2-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0278-without-d2-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0278-without-d2-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0278-without-d2-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0278-without-d2-4_gen.wav"
            }
        },
        {
            "Name": "The recommendations we have here suggested would greatly advance the security of the office without any <font color='#FF0000'>impairment</font> of our fundamental liberties. ",
            "TestID": "control_816",
            "Files": {
                "Reference": "audio/Control_new/GT/LJ050-0278_gen.wav",
                "1": "audio/Control_d_all/synthesized/LJ050-0278-impairment-d4-0_gen.wav",
                "2": "audio/Control_d_all/synthesized/LJ050-0278-impairment-d4-1_gen.wav",
                "3": "audio/Control_d_all/synthesized/LJ050-0278-impairment-d4-2_gen.wav",
                "4": "audio/Control_d_all/synthesized/LJ050-0278-impairment-d4-3_gen.wav",
                "5": "audio/Control_d_all/synthesized/LJ050-0278-impairment-d4-4_gen.wav"
            }
        },
        
    ]
  }