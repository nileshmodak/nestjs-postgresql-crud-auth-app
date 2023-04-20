#!/bin/bash
set -e

psql -d postgres -c "CREATE USER myuser WITH PASSWORD 'test123';" 
