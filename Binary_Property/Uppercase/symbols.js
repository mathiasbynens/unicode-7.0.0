module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,93,154,73,210,229,56,114,132,239,82,107,45,126,0,129,105,9,32,2,26,123,110,13,221,42,29,67,247,23,219,196,239,89,251,91,176,204,81,73,56,221,1,70,56,241,50,255,251,151,245,203,63,252,178,159,235,60,151,63,87,60,215,125,174,127,124,174,127,122,174,127,126,174,127,121,174,127,125,174,127,123,174,223,60,215,111,159,235,119,207,245,251,231,250,195,115,253,241,185,254,244,92,127,126,174,127,127,174,255,120,174,255,124,174,255,122,174,191,60,215,95,159,235,215,255,253,249,57,63,128,4,200,128,2,48,64,5,52,64,7,12,192,4,44,192,6,28,128,3,2,112,95,224,232,113,244,56,122,28,61,142,30,71,143,163,199,145,225,200,112,100,56,50,28,25,142,12,127,101,164,159,31,64,6,24,160,1,6,96,1,14,0,158,4,79,130,39,193,147,224,73,240,36,120,18,60,9,158,12,79,134,39,195,147,225,201,240,100,120,50,60,25,158,2,79,129,167,192,83,224,41,19,176,1,14,120,119,39,89,2,20,64,5,116,0,50,12,25,134,140,138,140,138,140,138,140,138,140,138,157,10,79,133,167,194,211,224,105,240,52,120,26,60,13,158,6,79,131,167,193,211,225,233,240,116,120,58,60,29,158,206,250,116,214,167,179,62,131,101,25,240,12,120,6,60,131,245,25,240,12,132,13,8,7,194,6,11,62,81,56,121,196,100,229,39,143,152,60,98,242,136,137,230,137,229,137,212,9,243,130,121,161,121,65,184,32,92,16,46,52,47,8,23,82,23,132,27,133,27,194,141,212,205,75,178,33,220,40,220,16,210,100,18,45,37,209,64,18,237,34,209,37,18,205,33,209,19,18,173,32,57,211,233,0,137,194,79,159,50,15,188,7,82,131,167,7,222,3,133,129,140,64,106,192,115,145,113,153,126,153,126,145,113,225,185,240,92,120,238,203,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,105,59,153,182,147,11,55,211,100,50,77,38,23,102,209,100,50,77,38,27,79,167,219,100,67,134,33,131,182,147,105,59,153,182,83,40,243,66,153,23,170,187,244,247,141,42,212,105,25,3,48,1,11,112,0,48,83,167,133,242,44,147,71,80,167,133,58,45,179,2,120,22,5,91,40,216,50,121,232,228,161,115,3,120,58,181,92,38,50,40,234,66,81,151,133,158,133,12,170,187,44,100,80,230,133,50,47,11,25,212,123,89,200,88,200,160,6,11,185,92,168,193,66,46,23,82,184,16,190,133,204,45,212,96,161,6,11,53,88,168,193,66,13,22,106,176,80,131,133,26,44,212,96,161,244,10,21,87,46,226,169,184,114,89,177,251,153,245,186,48,74,207,126,18,32,3,10,192,0,21,208,0,29,48,0,19,176,0,27,112,0,14,8,0,122,40,97,75,232,161,150,45,161,135,162,182,132,30,170,219,18,122,40,115,75,232,161,222,45,161,135,194,183,132,30,58,128,37,244,208,10,44,163,135,158,96,25,61,52,7,203,232,161,75,88,70,15,237,194,50,122,232,27,150,209,67,3,177,140,30,58,137,101,244,16,253,70,244,27,209,111,68,191,17,253,70,244,27,209,111,68,191,209,19,140,158,96,68,191,209,28,140,232,183,14,79,135,167,195,51,224,161,75,24,93,194,232,18,70,136,27,205,193,232,9,70,43,48,58,128,81,248,70,189,27,101,110,84,183,17,217,70,81,27,181,108,148,176,81,185,70,100,27,145,109,27,30,146,218,54,60,27,30,2,218,54,60,36,181,109,120,56,59,24,103,7,227,200,96,156,20,140,52,55,206,5,198,113,192,136,117,227,155,223,104,41,70,39,49,62,236,141,150,98,180,20,163,165,24,45,197,104,41,70,75,49,90,138,209,82,140,150,98,180,20,163,165,24,45,197,46,60,23,30,154,140,145,239,70,172,27,77,198,136,117,163,201,84,122,75,165,165,84,58,73,165,129,84,250,70,165,93,84,186,68,165,57,84,122,66,165,21,84,58,64,165,240,43,245,94,41,243,74,117,87,138,186,82,203,149,18,174,84,110,165,96,43,117,90,41,207,74,85,86,138,177,150,4,128,167,20,0,132,165,2,96,46,29,192,35,56,113,84,190,10,42,95,5,181,240,80,62,15,106,249,60,253,109,5,213,176,195,7,67,53,244,240,229,80,249,114,168,124,57,84,190,28,42,7,150,202,39,68,53,244,240,45,81,13,61,124,84,84,67,15,95,23,213,208,195,233,166,86,244,112,204,169,21,61,156,119,106,69,207,123,240,121,78,147,63,128,4,200,128,2,48,64,5,124,166,119,192,0,76,192,2,108,192,1,56,32,0,247,5,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,27,61,7,61,7,61,7,61,7,61,7,61,7,61,7,25,111,183,121,190,253,127,0,25,96,128,6,24,128,5,56,128,87,88,36,120,18,60,9,158,4,79,130,39,193,147,224,73,240,100,120,50,60,25,158,12,79,134,39,195,147,225,201,240,20,120,10,60,5,158,2,79,129,167,192,83,224,41,240,24,60,6,143,193,99,240,24,60,6,143,193,99,240,84,120,42,60,21,30,222,249,168,240,84,120,42,60,21,158,6,79,131,167,193,211,224,105,240,52,120,26,60,13,158,14,79,135,167,195,211,225,233,240,116,120,58,60,29,158,1,207,128,103,192,51,224,25,240,12,120,6,60,3,158,9,207,132,103,194,51,185,135,158,16,180,130,160,3,4,133,31,212,123,80,230,65,117,7,69,29,212,114,80,194,65,229,6,5,27,212,105,80,158,65,85,6,197,24,212,96,80,122,65,197,197,129,231,192,115,224,57,240,28,120,28,30,135,199,225,113,120,28,30,135,199,225,113,120,2,158,128,39,224,9,120,2,158,128,39,224,9,120,46,60,23,158,11,207,133,231,194,115,225,185,240,188,137,159,46,125,227,190,167,128,7,44,192,6,28,128,3,62,211,223,94,119,233,27,55,193,67,3,185,9,30,58,201,77,240,208,37,110,102,22,237,226,102,102,209,55,110,254,204,226,233,153,167,211,37,110,129,135,118,113,11,60,244,141,91,224,161,129,220,2,15,93,226,26,60,180,139,107,240,208,55,174,193,83,185,185,114,79,253,252,17,204,212,251,109,220,76,225,223,198,44,58,192,109,76,167,21,220,6,15,239,252,37,155,46,47,255,37,155,46,239,243,61,220,195,139,125,15,247,240,174,94,231,30,94,218,235,220,195,123,120,131,123,120,33,111,124,238,65,51,47,219,189,220,204,91,119,239,255,223,156,249,141,250,1,29,240,249,163,3,240,23,188,105,245,128,4,96,250,123,138,124,192,4,44,0,132,9,194,4,225,27,82,153,31,162,51,63,68,103,126,136,126,0,211,51,211,51,211,11,122,10,122,10,122,222,143,201,7,4,224,190,192,144,218,152,222,152,222,152,222,152,222,80,216,62,179,144,218,88,177,134,230,134,247,134,248,134,248,134,248,134,248,134,176,134,176,241,62,148,3,212,3,58,96,0,38,96,1,54,224,0,28,16,128,247,17,156,182,50,167,173,7,100,0,79,127,187,113,230,252,245,0,244,28,244,28,244,28,244,28,244,28,244,28,244,28,244,28,244,188,191,255,228,243,126,71,61,32,1,50,160,0,12,80,1,13,208,1,3,48,1,11,176,1,7,224,128,0,160,135,55,252,240,134,31,222,240,147,208,147,208,195,59,127,18,122,18,122,18,122,40,135,67,57,28,202,225,80,14,135,114,56,9,61,9,61,25,61,25,61,25,61,25,61,20,209,201,232,161,154,78,70,15,101,117,50,122,168,175,67,125,29,234,235,80,95,39,163,135,74,57,20,200,161,64,14,5,114,40,135,67,21,28,94,254,195,59,127,218,135,16,131,29,230,14,115,199,69,231,230,206,205,131,155,7,55,15,158,62,176,60,112,58,48,56,240,53,32,156,240,76,120,38,60,19,158,9,207,132,103,194,51,225,89,240,44,120,22,60,11,158,5,207,130,103,193,179,224,217,240,108,120,54,60,180,130,67,7,56,20,254,161,222,15,101,126,168,238,67,81,31,106,249,80,194,135,202,61,20,236,161,78,15,229,121,28,30,135,199,225,113,120,28,30,135,199,225,113,120,2,158,128,39,120,37,130,87,226,253,88,90,237,61,50,60,224,243,127,12,208,0,3,176,0,7,16,47,168,240,84,120,42,60,21,158,10,79,133,167,194,83,225,105,240,52,120,26,60,13,158,6,79,131,167,193,51,152,62,152,62,152,62,152,62,152,62,152,62,62,211,145,49,225,153,240,76,120,38,60,19,158,247,93,93,253,237,18,15,48,64,3,12,192,231,230,3,120,31,218,11,211,11,211,11,211,11,211,11,211,11,211,11,211,217,202,206,86,118,182,178,179,149,157,173,236,108,101,103,43,59,91,217,217,202,206,86,118,182,178,179,149,157,173,236,108,101,103,43,59,91,217,217,202,206,86,118,182,178,179,149,157,173,236,108,101,103,43,123,131,231,253,219,219,7,108,128,3,184,135,125,239,236,123,103,223,59,251,222,7,211,7,211,217,229,206,46,119,54,183,179,185,253,179,185,19,97,147,135,46,166,47,166,47,30,186,224,89,240,44,120,22,50,22,132,11,61,27,194,247,119,155,123,243,7,100,64,1,24,160,2,26,160,3,6,96,2,22,96,3,14,192,1,1,184,47,120,63,249,30,128,158,130,158,130,158,130,158,130,158,130,158,130,158,130,158,130,158,247,125,246,241,147,158,255,242,101,242,25,38,29,102,29,22,29,154,14,171,14,155,14,187,14,135,14,167,14,191,68,110,29,30,29,186,14,67,135,87,134,73,253,38,245,155,212,111,82,191,73,253,38,245,155,212,111,82,191,73,253,38,245,155,212,111,82,191,73,253,38,245,155,212,111,82,191,89,253,102,245,155,213,111,86,191,89,253,102,245,155,213,111,254,248,109,127,27,174,31,29,38,29,102,29,22,29,154,14,171,14,155,14,191,158,59,116,56,117,184,116,184,117,120,116,232,58,12,29,94,25,110,245,187,213,239,86,191,91,253,110,245,187,213,239,86,191,91,253,110,245,187,213,239,86,191,91,253,110,245,187,213,239,86,191,27,191,165,254,250,247,125,227,29,38,29,102,29,22,29,154,14,171,14,155,14,187,14,135,14,167,14,151,14,183,14,143,14,93,135,161,67,245,155,212,111,82,191,73,253,38,245,155,212,111,82,191,73,253,38,245,155,212,111,82,191,69,153,139,50,23,101,46,202,92,148,185,124,49,235,74,22,93,201,162,43,89,116,37,139,174,100,209,149,52,93,73,211,149,52,93,73,211,149,52,245,107,234,215,212,175,169,95,83,191,166,126,77,253,154,250,53,245,107,234,183,41,115,83,230,166,204,77,153,155,50,183,47,102,93,201,166,43,217,117,37,187,174,100,215,149,236,186,146,93,87,178,235,74,118,93,201,174,43,217,213,111,87,191,93,253,118,245,219,213,111,87,191,93,253,118,245,59,212,239,80,191,83,153,167,82,77,165,90,186,56,75,237,47,181,191,212,224,82,131,75,13,46,149,177,84,198,82,25,91,29,109,117,180,85,228,214,29,220,186,131,91,45,184,50,187,50,187,50,187,50,187,50,251,23,179,46,142,235,187,225,250,110,184,46,157,235,210,185,46,157,235,210,185,190,27,174,43,233,186,146,161,126,67,253,134,250,13,245,27,234,55,212,111,168,223,80,191,161,126,67,252,186,38,157,107,210,185,70,155,107,180,249,207,23,213,210,161,235,48,116,40,139,227,26,94,174,225,229,26,94,174,225,229,26,94,174,105,229,154,86,174,105,229,154,86,158,212,66,218,58,148,221,119,141,39,215,120,114,205,35,47,95,115,117,113,52,143,92,3,200,53,128,92,3,200,53,128,92,3,200,53,113,92,67,196,53,68,92,67,196,53,68,220,190,68,234,14,86,213,172,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,174,169,225,154,26,62,212,239,80,191,67,253,14,245,187,148,121,41,179,70,140,47,101,94,202,188,190,152,117,37,151,174,228,210,149,212,120,114,141,39,215,120,114,141,39,95,186,146,154,86,174,105,229,154,86,174,105,229,154,86,174,105,229,154,86,174,105,229,91,253,110,245,187,213,239,86,191,154,86,174,105,229,154,86,174,105,229,154,86,238,95,204,186,146,154,86,174,105,229,154,86,174,105,229,154,86,174,105,229,154,86,174,105,229,154,86,174,105,229,154,86,174,105,229,154,86,174,105,229,95,105,21,234,55,212,111,168,223,16,191,161,225,21,26,94,161,225,21,122,46,11,61,151,197,207,23,115,232,80,86,50,52,218,66,163,45,52,218,66,163,45,52,218,66,207,101,161,73,23,154,116,161,73,23,154,116,161,73,23,154,116,161,73,23,73,253,38,245,155,212,111,86,191,89,253,106,14,134,230,96,104,14,134,158,203,66,99,49,52,22,67,99,49,52,22,67,99,49,244,92,22,154,146,161,231,178,208,115,89,232,185,44,52,82,67,35,53,52,82,67,35,53,52,82,67,35,53,52,82,163,170,223,170,126,171,250,173,234,183,170,95,77,216,208,132,13,77,216,208,132,13,77,216,232,95,204,186,146,154,176,161,9,27,154,176,161,9,27,154,176,161,9,27,154,176,161,9,27,154,176,161,9,27,154,176,161,9,27,154,176,161,9,27,154,176,252,35,177,207,80,253,14,245,59,212,175,166,100,172,175,63,213,213,208,148,12,77,201,208,148,12,77,201,208,148,12,77,201,208,148,12,77,201,208,148,12,77,201,208,148,12,77,201,208,148,12,77,201,208,148,140,173,126,183,250,221,234,119,171,223,173,126,245,151,64,254,157,27,67,13,175,208,240,10,13,175,208,240,10,13,175,208,240,10,13,175,208,240,10,13,175,208,240,10,13,175,248,10,175,80,131,161,6,175,26,188,186,161,87,253,94,245,123,213,239,85,191,87,253,94,245,123,213,239,85,191,87,252,94,205,148,171,153,114,53,83,174,102,202,213,76,185,154,41,55,103,29,22,29,154,14,171,14,155,14,187,14,135,14,167,14,213,96,222,58,84,191,89,253,102,245,155,213,111,81,191,69,253,22,245,91,212,175,254,226,122,171,26,172,106,176,170,193,170,6,171,26,172,106,176,170,193,170,6,171,26,172,106,176,169,193,166,6,155,26,108,106,176,169,193,166,27,218,212,111,83,191,250,67,232,213,31,66,175,254,16,122,245,135,208,171,71,218,171,71,218,171,71,218,59,213,224,84,131,83,13,78,53,56,213,224,84,131,83,13,78,53,56,213,224,84,131,83,13,78,53,168,191,79,222,169,6,231,151,65,221,80,61,105,94,61,105,94,61,105,94,61,105,94,61,105,94,61,105,94,61,105,94,61,105,94,205,80,254,49,231,51,60,191,254,237,119,149,31,29,38,29,102,29,22,29,154,14,171,14,155,14,187,14,135,14,167,14,191,68,110,29,30,29,186,14,67,135,87,134,166,126,77,253,154,250,53,245,107,234,215,212,175,169,95,83,191,166,126,77,253,86,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,191,84,233,46,84,221,133,170,187,80,117,23,170,238,66,213,93,104,234,183,169,223,166,126,155,250,109,234,183,169,223,166,126,155,250,109,234,183,169,223,174,170,186,170,234,170,170,171,170,174,170,186,170,234,170,170,171,170,174,170,250,151,42,221,133,174,187,208,117,23,186,238,66,215,93,232,186,11,67,253,14,245,59,212,239,80,191,67,253,14,245,59,212,239,80,191,67,253,62,223,252,255,243,127,32,219,235,60,5,70,0,0])))