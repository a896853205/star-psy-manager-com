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
}
