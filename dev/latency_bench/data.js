window.BENCHMARK_DATA = {
  "lastUpdate": 1686067632539,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e83c806bb7da33983ecb75736f2bdd2b8ff96d0b",
          "message": "Implementation of rmdir() (#247)\n\n* Implemented basic rmdir, need to add tests. Want to get reviews on cases I am missing\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the deleted case for rmdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the Delete state of the directory rather than its parent\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added fuse test for simple operation on rmdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the s3 test cfg for rmdir_test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the order of locking and deletion\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the ErrorKind in case of removing delted directory\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the tests and added deleted boolean for delete status\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected order of directory name in rmdir test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added concurrent parent deletion case in create()\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test for concurrent create and rectified nits\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* corrected the error code in rmdir_test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed useless assertion in child removal\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* readdir and getattr still working after rmdir as it does not checkparent\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected the formatting\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Separated remote direcotry test and added close file test case\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added a few more tests\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Changed error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Changed directory order for read_dir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed redundant inode_kind variable\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test for rmdir on directory with local file\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made directory marker as directory\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* changed error code\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Dropping the file to close it for testing\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added comment about error in closing file\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test to check rmdir not working on files\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved formatting according to suggestions\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved error comment according to recommendation\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made the state consistent for concurrent rmdir create test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed apparent test for concurrent rmdir create\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added other tests\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Modified the locking method to acquire single lock in 1 process\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected formatting\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* delete status check removed from create\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* positioned deleted flag in rmdir before removing from children as it is within a single lock\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the recommended changes to not unwrap the get inode state method\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved according to suggestions\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* removed unwrap from ancestors states and other minor changes\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Turbofish the type for ancestor iterator\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed comment from pre-merge\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-05-25T17:27:22+01:00",
          "tree_id": "9423d5cb98f12dffe7dbd8d3859b1361302d0645",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e83c806bb7da33983ecb75736f2bdd2b8ff96d0b"
        },
        "date": 1685032785242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.362,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.99719209999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.3436184,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "91f44b5e5dece075b1b4f3ae5f1f44078f2d297e",
          "message": "Add RustDoc for `fs`,`fuse`,`sync` modules, and on `InodeInner`'s `sync` field (#257)\n\n* Add/expand on module documentation comments for fuse,fs,sync\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add RustDoc describing how children should be used and how locks should be taken\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-25T13:41:53-05:00",
          "tree_id": "f57021eb1c4cad607b5e2235780f9a8ce0c91678",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/91f44b5e5dece075b1b4f3ae5f1f44078f2d297e"
        },
        "date": 1685040758037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.316,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.84692770000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.274732799999995,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b0c59df057de8143ace1881e8a29d512123bfd9",
          "message": "Add initial semantics documentation for `rmdir` (#236)\n\n* Proposed initial semantics for rmdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Small change: Added brackets for link to work\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved the sentence formation\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Removed the use of local keyword, and explained the case of remote files\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Update doc/SEMANTICS.md\r\n\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Improved the grammar of the remote directory case to make context more understandable\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2023-05-26T09:50:18+01:00",
          "tree_id": "5c0847df5d677c1a3b80528cfbadff053d03f533",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6b0c59df057de8143ace1881e8a29d512123bfd9"
        },
        "date": 1685091659016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.796,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.55802920000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.544385399999996,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "886f9edc710db61f8d2bcee597b15d300db6c383",
          "message": "Prepare to publish client and CRT crates (#260)\n\nThis change adds READMEs and CHANGELOGs for the client, crt, and crt-sys\r\ncrates, and bumps their version numbers just for clarity. It changes the\r\npath dependencies to also include version numbers, so that local builds\r\nof Mountpoint will use the path dependency but published releases will\r\nuse the published dependencies.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-26T10:48:54+01:00",
          "tree_id": "f8be47fb956de4aad79eab83c21b82c28eb6a2e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/886f9edc710db61f8d2bcee597b15d300db6c383"
        },
        "date": 1685095259803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.887,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.7666788,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.265037899999996,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83d2a44793d12a4808fe9430440abe6acaedf7a2",
          "message": "Updated CRT modules for publish later (#262)\n\n* Update CRT submodules to latest releases\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* typecasted part_size from usize to u64, other update to the CRT module as it is\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-05-26T14:04:41+01:00",
          "tree_id": "589c12edaf043ea9b23ed29d92f7e6d4ad6c5536",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/83d2a44793d12a4808fe9430440abe6acaedf7a2"
        },
        "date": 1685106868514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.075,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.023436100000005,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.0051791,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e73c0ffecb56607ab90b370459280a2e5da5c0f",
          "message": "Fix issue with file shadowed by a deleted directory (#256)\n\nThis change fixes an issue where a file that had been shadowed by a directory would still not become visible after the directory was removed from S3.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-26T15:07:41+01:00",
          "tree_id": "5a2b5e1c6bd90de179b8aa27c5b855a63536dd55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e73c0ffecb56607ab90b370459280a2e5da5c0f"
        },
        "date": 1685110678296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.171,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.8671583,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.2257941,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5712ed24687fb442392114575800ce1c77453005",
          "message": "Implement checksummed bytes (#258)\n\n* Implement checksummed bytes\r\n\r\nThis change introduces ChecksummedBytes struct which is a buffer containing\r\nboth the bytes and its checksum. There will be follow-up changes that make\r\nuse of this struct, as we planned to implement some integrity check along\r\nthe read and write path, the ChecksummedBytes will make those changes\r\nsimpler and more efficient.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update the ci to include checksum feature\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update error message\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update per comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-26T09:58:57-05:00",
          "tree_id": "f64494d4fe6e8d73141dc016f52fc4c0d90bee4e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5712ed24687fb442392114575800ce1c77453005"
        },
        "date": 1685113755883,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.107,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.3490809,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.3167227,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe4d717eba54ad48d17e23a06cffff9bfb6c1591",
          "message": "Integrate new CRT telemetry APIs (#261)\n\n* Integrate new CRT telemetry APIs\r\n\r\nThe telemetry APIs let us get metrics at a per-request granularity. This\r\nlets us deprecate some of the code we used to have for parsing out\r\nthings like request IDs from a meta request, and also break out our\r\nmetrics by request type. The new telemetry callback is invoked once per\r\nrequest sent by the CRT.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Update mountpoint-s3-client/src/s3_crt_client.rs\r\n\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-05-26T09:59:13-05:00",
          "tree_id": "a1ca847c5c2e3f639cb6791f015967a3772a98c2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe4d717eba54ad48d17e23a06cffff9bfb6c1591"
        },
        "date": 1685113795328,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.107,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.771822,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.818637700000004,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "04ac3516882b07bacb24bf046b6da20829036b18",
          "message": "Update to aws-c-common v0.8.22 (#264)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-26T16:40:12Z",
          "tree_id": "f4fad569d3ace822a92534abb6b2d9ae83771601",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/04ac3516882b07bacb24bf046b6da20829036b18"
        },
        "date": 1685119871735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.136,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 68.1408052,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.589383,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81923533e8aa05048a5cab435340b163fa905364",
          "message": "Implement `unlink` operation for remote files (#232)\n\n* Update semantics doc\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Implement unlink\r\n\r\nThis implementation does not attempt to tackle the unbounded growth of the superblock. This should be tackled at a later date.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Incoporate PR feedback\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Move unlink locking to cover whole operation duration\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Fix grammar in added comment\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Revert \"Move unlink locking to cover whole operation duration\"\r\n\r\nThis reverts commit 52b0bd86c190d67508c639b61df1328eb00d89df.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update unlink to panic if VFS assumptions are broken\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add test for lookup after unlink\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add integration tests for unlink of local writing files\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add TODO for inode lookup/ref counting\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Improve expect/expect_err messages\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Appease clippy\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Fix test_lookup_after_unlink for prefixed test case\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-31T09:28:29+01:00",
          "tree_id": "b9ca1fdca9eca875c0ce36963c945b4aeb174298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81923533e8aa05048a5cab435340b163fa905364"
        },
        "date": 1685522343086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.838,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.499136,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.2446411,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff4b765b3857e2dfdfa4481866dbe45bc6e34e7d",
          "message": "Add crate version to mountpoint-s3-client user agent (#266)\n\nWe already have this in mountpoint-s3, but for direct users of the\r\nclient crate there's currently no version information. This change just\r\nduplicates our existing mountpoint-s3 logic into the client crate. I\r\nalso removed the \"UNKNOWN\" suffix for builds without git history (i.e.,\r\nevery crates.io build), since it seems spammy -- we can distinguish\r\nthem by the absence of the `-`.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-31T10:23:55+01:00",
          "tree_id": "fbefbfdc18607169a8f7b7ee3e6297784af27241",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff4b765b3857e2dfdfa4481866dbe45bc6e34e7d"
        },
        "date": 1685525807201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.998,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.6195459,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.2525136,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e243ef78523119a6a405ea869e862411b123cfa8",
          "message": "Exclude test files from crt-sys crate (#265)\n\nSignificantly reduce the size of the `mountpoint-s3-crt-sys` crate, in order to stay under the 10MB threshold.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T10:38:28+01:00",
          "tree_id": "57d41f424fca0dbc9bf92cd164cc63b0489cc0a6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e243ef78523119a6a405ea869e862411b123cfa8"
        },
        "date": 1685526556358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.094,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.859,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.8573485,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.4152542,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c10c0702f14096e9965af636f8c3ca3aac779b74",
          "message": "Fix build failure outside of git (#269)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T14:43:02+01:00",
          "tree_id": "f57f49ab53668aa75e2f9d5c8b9c67f3420ed4f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c10c0702f14096e9965af636f8c3ca3aac779b74"
        },
        "date": 1685541506897,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.964,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.9110231,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.439540799999996,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e52ecb02e1739c94611ec3d4cb64e2f913a97f65",
          "message": "Increment mountpoint-s3-client version number to 0.2.2 (#270)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T13:54:08Z",
          "tree_id": "6d8c4892cdf674c8103d04bc0c3c41b42328872a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e52ecb02e1739c94611ec3d4cb64e2f913a97f65"
        },
        "date": 1685542082140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.109,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.983,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.1538335,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.31075759999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb31aba32c9c6bff7486f37e7e3415f78542cc50",
          "message": "Update to aws-c-sdkutils v0.1.11 (#271)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-02T12:00:21+01:00",
          "tree_id": "2048121c8eb19fabf34e9627645ecd9c9588748b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb31aba32c9c6bff7486f37e7e3415f78542cc50"
        },
        "date": 1685704278366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.024,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.4222858,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.379425399999995,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "768cdfafa06e1cd8b05066f46ac1e757d0feeabd",
          "message": "Remove obsolete unset of AWS_PROFILE envvar in AWS profile test (#272)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-02T13:32:33+01:00",
          "tree_id": "28da93cf2ce0079f34f6bbb9dd82e16a4a846361",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/768cdfafa06e1cd8b05066f46ac1e757d0feeabd"
        },
        "date": 1685709871974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.314,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 102.3805568,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.4217969,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd9eb73de8d5f298aaa6b0921b623dadb82b57ec",
          "message": "Correctly handle missing TTFB telemetry (#275)\n\nThe send_end and receive_start times can be missing, which we weren't\r\nhandling.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-05T09:32:19-05:00",
          "tree_id": "97b863e7f077b28490c1cdc823ceaa3016b03beb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd9eb73de8d5f298aaa6b0921b623dadb82b57ec"
        },
        "date": 1685976181423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.371,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.464877,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.2070814,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alexpax@amazon.co.uk",
            "name": "Alessandro Passaro",
            "username": "passaro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3bb128cf18cc866362a105784893e274a525f0b",
          "message": "Update CRT submodules to latest releases (#278)\n\n* Update CRT submodules to latest releases including streaming changes\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Pick up fix: aws_future functions no longer inline\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Pick up aws-checksums segfault fix\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-05T21:32:59Z",
          "tree_id": "3e1edd0dc3a72232157c54e7c3a12065678d9957",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3bb128cf18cc866362a105784893e274a525f0b"
        },
        "date": 1686001432166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.204,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.6697992,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.2790037,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "843c9630081e3d8c82c595f31431155763094cd9",
          "message": "Bump xml-rs from 0.8.4 to 0.8.14 (#279)\n\nBumps [xml-rs](https://github.com/kornelski/xml-rs) from 0.8.4 to 0.8.14.\r\n- [Changelog](https://github.com/kornelski/xml-rs/blob/main/Changelog.md)\r\n- [Commits](https://github.com/kornelski/xml-rs/compare/0.8.4...0.8.14)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: xml-rs\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-06T05:32:47Z",
          "tree_id": "8ebb6116e56d3606900ecd10b61e81506277f8e7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/843c9630081e3d8c82c595f31431155763094cd9"
        },
        "date": 1686030252585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.09,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.484,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.3798446,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 47.9470505,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rostyslav.fridman@gmail.com",
            "name": "Rostyslav",
            "username": "frostyslav"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1194c3f50a6ed4aafccd28847ce09674fdcff6",
          "message": "feat: reduce docker image size (#276)\n\n* feat: reduce docker image size\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\n\r\n* feat: small dockerfile improvements\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\nCo-authored-by: Rostyslav Fridman <frir@amazon.com>",
          "timestamp": "2023-06-06T10:55:10-05:00",
          "tree_id": "e20bee0af0e6b12f10ee5dada095204d21728057",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf1194c3f50a6ed4aafccd28847ce09674fdcff6"
        },
        "date": 1686067632050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.034,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 104.9851051,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.304334,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}