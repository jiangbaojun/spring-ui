package com.ui.model.demo;

import java.util.Date;

public class User {

	/**
	 * id
	 */
    private String id;

    /**
     * 姓名
     */
    private String xm;

    /**
     * 手机
     */
    private String sj;

    /**
     * 职务
     */
    private String zw;

    /**
     * 部门
     */
    private String bm;

    /**
     * 入职日期
     */
    private Date rzrq;

    /**
     * 工号
     */
    private String workId;

	public User(String id, String xm, String sj, String zw, String bm, Date rzrq, String workId) {
		super();
		this.id = id;
		this.xm = xm;
		this.sj = sj;
		this.zw = zw;
		this.bm = bm;
		this.rzrq = rzrq;
		this.workId = workId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getXm() {
		return xm;
	}

	public void setXm(String xm) {
		this.xm = xm;
	}

	public String getSj() {
		return sj;
	}

	public void setSj(String sj) {
		this.sj = sj;
	}

	public String getZw() {
		return zw;
	}

	public void setZw(String zw) {
		this.zw = zw;
	}

	public String getBm() {
		return bm;
	}

	public void setBm(String bm) {
		this.bm = bm;
	}

	public Date getRzrq() {
		return rzrq;
	}

	public void setRzrq(Date rzrq) {
		this.rzrq = rzrq;
	}

	public String getWorkId() {
		return workId;
	}

	public void setWorkId(String workId) {
		this.workId = workId;
	}
    
	
}
