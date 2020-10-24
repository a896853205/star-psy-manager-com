declare namespace UserList {
  /**
   * 表格数据
   */
  interface Item {
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: 'male' | 'female';
  }
  
  /**
   * antd表格结构
   */
  interface Result {
    total: number;
    list: UserList.Item[];
  }
}
