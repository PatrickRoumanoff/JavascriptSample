JavascriptSample
================

basic js and tests to confirm setup

I have found that Istanbul prefix file names with ./ in the lcov report and 
that sonar doesn't like this prefix and can't match those files.

The only workaround I have found is to modify the istanbul/lib/report/lcovonly.js to remove the offending prefix
    writer.println('SF:' + fc.path);
needs to be replaced by
    writer.println('SF:' + fc.path.substr(2));
That seems to do the trick for now, more investigation required.
