class UserData():
    user_data = {}
    def addUser(self,first,last,user_id):
        self.first = first
        self.last = last
        self.user_id = user_id
        self.user_data[self.user_id] = [self.first+" "+self.last]
        print (self.user_data)
    
    def assignRole(self,user_id,role_id):
        if user_id in self.user_data.keys() and role_id in RoleData.role_data.keys():
            self.user_data[user_id].append(role_id)
        else:
            print ("The entered user or role does not exist in the database.")
        print (self.user_data)
    
    def deleteRole(self,user_id,role_id):
        if user_id in self.user_data.keys() and role_id in RoleData.role_data.keys():
            self.user_data[user_id].remove(role_id)
        else:
            print ("The entered user or role does not exist in the database.")
        print (self.user_data)

class RoleData():
    role_data = {}
    role_users = {}
    def addRole(self, name, role_id, description):
        self.name = name
        self.role_id = role_id
        self.description = description
        self.role_data[self.role_id] = [self.name,self.description]
        self.role_users[self.role_id] = []
        print (self.role_data)
    
    def addUser(self,user_id,role_id):
        if role_id in self.role_data.keys() and user_id in UserData.user_data.keys():
            self.role_users[role_id].append(user_id)
        else:
            print ("The entered user does not exist in the database.")
        print (self.role_users)

    def deleteUser(self,user_id,role_id):
        if role_id in self.role_data.keys() and user_id in UserData.user_data.keys():
            self.role_users[role_id].remove(user_id)
        else:
            print ("The entered user does not exist in the database.")
        print (self.role_users)
            
