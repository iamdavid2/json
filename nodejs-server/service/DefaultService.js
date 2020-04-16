'use strict';


/**
 *
 * body Body Optional description in *Markdown*
 * returns grbk
 **/
exports.grbkPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "_shards" : {
    "total" : 2,
    "failed" : 0,
    "successful" : 2,
    "skipped" : 0
  },
  "hits" : {
    "hits" : [ {
      "_index" : "gradebook_outcomes",
      "_type" : "_doc",
      "_source" : {
        "metadata" : {
          "timestamplong" : 1576685937948,
          "ISOtimestamptext" : "2019-12-18T16:18:57.948453"
        },
        "event" : {
          "lessonStatus" : "Started",
          "role" : "Student",
          "loggedAccountId" : 3309740,
          "gradeItemPercentage" : 0.3333333333333333,
          "homeroomId" : 1176590,
          "submittedTime" : 1576688548000,
          "courseCode" : "CALMS2629",
          "gradeItemStatus" : "gradeItemStatus",
          "classroomId" : 1237483,
          "lessonId" : 256390,
          "currentAttempt" : 2,
          "maxScore" : 9,
          "studentIdentityId" : 3309740,
          "sensorId" : "pp.gradebook.outcome",
          "gradeItemId" : 213574,
          "score" : 3,
          "maxAttempts" : 3,
          "lastUpdated" : 1576688548000,
          "scopeAndSequenceId" : 1002629,
          "unitId" : 256377,
          "scopeAndSequenceVersion" : -1,
          "status" : "A"
        }
      },
      "_id" : "-QrIGW8Bxe5M82Fp5KGq",
      "_score" : 2
    }, {
      "_index" : "gradebook_outcomes",
      "_type" : "_doc",
      "_source" : {
        "metadata" : {
          "timestamplong" : 1576685937948,
          "ISOtimestamptext" : "2019-12-18T16:18:57.948453"
        },
        "event" : {
          "lessonStatus" : "Started",
          "role" : "Student",
          "loggedAccountId" : 3309740,
          "gradeItemPercentage" : 0.3333333333333333,
          "homeroomId" : 1176590,
          "submittedTime" : 1576688548000,
          "courseCode" : "CALMS2629",
          "gradeItemStatus" : "gradeItemStatus",
          "classroomId" : 1237483,
          "lessonId" : 256390,
          "currentAttempt" : 2,
          "maxScore" : 9,
          "studentIdentityId" : 3309740,
          "sensorId" : "pp.gradebook.outcome",
          "gradeItemId" : 213574,
          "score" : 3,
          "maxAttempts" : 3,
          "lastUpdated" : 1576688548000,
          "scopeAndSequenceId" : 1002629,
          "unitId" : 256377,
          "scopeAndSequenceVersion" : -1,
          "status" : "A"
        }
      },
      "_id" : "-QrIGW8Bxe5M82Fp5KGq",
      "_score" : 2
    } ],
    "total" : 1,
    "max_score" : 2
  },
  "took" : 2,
  "timed_out" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

