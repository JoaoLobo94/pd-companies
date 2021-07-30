pragma solidity >=0.4.22 <0.9.0;

contract userInfo {
    struct User {
        uint256 id;
        string name;
        string job;
        string jobType;
        uint8 reputation;
        address account;
    }
    User[] public users;
    uint256 public nextId;

    function create(
        string memory name,
        string memory job,
        string memory jobType,
        uint8 reputation,
        address account
    ) public {
        users.push(
            User({
                id: nextId,
                name: name,
                job: job,
                jobType: jobType,
                reputation: reputation,
                account: account
            })
        );
        nextId++;
    }

    function read(uint256 id) view public returns(uint256, string memory, string memory, string memory, uint8, address){
	    for (uint256 i = 0; i < users.length; i++) {
		    if (users[i].id == id) {
			   return(users[i].id, users[i].name, users[i].job, users[i].jobType, users[i].reputation, users[i].account);
		    }
			   
		    
	    }
    }

    function update(uint256 id) public {

    }
}
