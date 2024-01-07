/*
    Given a string path, which is an absolute path (starting with a slash '/') to a file or directory in a Unix-style file system, 
    convert it to the simplified canonical path.
    In a Unix-style file system, a period '.' refers to the current directory, a double period '..' refers to the directory up a level, 
    and any multiple consecutive slashes (i.e. '//') are treated as a single slash '/'. 
    For this problem, any other format of periods such as '...' are treated as file/directory names.

    Input: path = "/home/"
    Output: "/home"
*/

let simplifyPath = (path) => {
    let components = path.split('/');
    let stack = [];

    for (let component of components) {
        
        if (component === '..') {
            if (stack.length > 0) stack.pop();
        }
        else if (component !== '.' && component !== '') {
            stack.push(component);
        }
    }

    return '/' + stack.join('/');
}
let path = "/home/";
console.log(simplifyPath(path));

