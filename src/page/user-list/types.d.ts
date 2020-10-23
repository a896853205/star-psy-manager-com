declare namespace UserList {
  /**
   * 表格数据
   */
  interface Item {
    name: {
      last: string;
    };
    email: string;
    phone: string;
    gender: 'male' | 'female';
  }
}
