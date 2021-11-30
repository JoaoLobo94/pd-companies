pragma solidity >=0.4.22 <0.9.0;

contract UserInfo {
    struct User {
        uint256 id;
        string name;
        string job; // TODO: add multiple jobs funcitonality. Needs to be dynamic array
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

    function read(uint256 id)
        public
        view
        returns (
            uint256 identification,
            string memory name,
            string memory job,
            string memory jobtype,
            uint8 reputation,
            address account
        )
    {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                return (
                    users[i].id,
                    users[i].name,
                    users[i].job,
                    users[i].jobType,
                    users[i].reputation,
                    users[i].account
                );
            }
        }
    }

    //TODO: update functionality for all other params of the struct

    function updateAccount(uint256 id, address account) public {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].account = account;
            }
        }
    }

    function updateJob(uint256 id, string memory job) public {
        for (uint26 i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].job = job;
            }
        }
    }

    function updateReputation(uint256 id, uint8 reputation) public {
        for (uint256 i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].reputation = reputation;
            }
        }
    }
    //TODO: implement destroy functionality if a user wants to quit
}
